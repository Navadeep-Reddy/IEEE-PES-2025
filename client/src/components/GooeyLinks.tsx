import { useRef, useEffect } from "react";
import GUI from "lil-gui";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GooeyLinks = () => {
  const canvasEl = useRef<HTMLCanvasElement | null>(null);
  const contentEl = useRef<HTMLDivElement | null>(null);
  const scrollMsgEl = useRef<HTMLDivElement | null>(null);
  const scrollArrowEl = useRef<HTMLDivElement | null>(null);
  const gl = useRef<WebGLRenderingContext | null>(null);
  const uniforms = useRef<{ [key: string]: WebGLUniformLocation | null }>({});

  // White goo over a gray background
  const params = useRef({
    scrollProgress: 0,
    colWidth: 0.7,
    speed: 0.2,
    scale: 0.25,
    seed: 0.231,
    color: [1, 1, 1], // White color for the goo
    pageColor: "#808080", // Initial gray background
  }).current;

  useEffect(() => {
    gl.current = initShader();
    if (!gl.current) return;
    const gui = createControls(); // Get the GUI instance
    document.body.style.backgroundColor = params.pageColor;

    const st = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".page-container",
          start: "0% 0%",
          end: "100% 100%",
          scrub: true,
        },
      })
      .to(
        params,
        {
          scrollProgress: 1,
          onUpdate: () => {
            // Change the body background color as we scroll
            const white = [255, 255, 255];
            const gray = [128, 128, 128];
            const r = gsap.utils.interpolate(
              gray[0],
              white[0],
              params.scrollProgress
            );
            const g = gsap.utils.interpolate(
              gray[1],
              white[1],
              params.scrollProgress
            );
            const b = gsap.utils.interpolate(
              gray[2],
              white[2],
              params.scrollProgress
            );
            document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
          },
        },
        0
      )
      .to(scrollArrowEl.current, { duration: 0.2, y: 50, opacity: 0 }, 0)
      .to(scrollMsgEl.current, { opacity: 0 }, 0)
      .to(contentEl.current, { duration: 0.3, opacity: 1 }, 0.5)
      .progress(0);

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    const renderLoop = requestAnimationFrame(render);

    gsap.set(".page-container", { opacity: 1 });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(renderLoop);
      st.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gui.destroy(); // Clean up lil-gui
      // Reset body color on component unmount
      document.body.style.backgroundColor = "";
    };
  }, [params]);

  const initShader = () => {
    // The GLSL code is embedded directly for simplicity
    const vsSource = `attribute vec2 a_position; void main() { gl_Position = vec4(a_position, 0.0, 1.0); }`;
    const fsSource = `
            precision mediump float;
            uniform vec2 u_resolution;
            uniform float u_time;
            uniform float u_scroll_progr;
            uniform float u_col_width;
            uniform float u_speed;
            uniform float u_scale;
            uniform float u_seed;
            uniform vec3 u_color;

            float random (in vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123); }
            float noise (in vec2 st) {
                vec2 i = floor(st);
                vec2 f = fract(st);
                float a = random(i);
                float b = random(i + vec2(1.0, 0.0));
                float c = random(i + vec2(0.0, 1.0));
                float d = random(i + vec2(1.0, 1.0));
                vec2 u = f*f*(3.0-2.0*f);
                return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
            }

            void main() {
                vec2 st = gl_FragCoord.xy/u_resolution.xy;
                st.x *= u_resolution.x/u_resolution.y;
                float time = u_time * u_speed / 1000.0;
                float progr = u_scroll_progr;
                float base_h = smoothstep(0.0, 1.0, progr);
                float col_w = u_col_width;
                float inverted_col_w = 1.0 - col_w;
                float WAVE_h = 1.0 - base_h;
                float N_h = noise(vec2(st.x * u_scale + u_seed, time * 0.3)) * (1.0 - base_h);
                float h = base_h + N_h;
                float col_l = inverted_col_w / 2.0;
                float col_r = 1.0 - inverted_col_w / 2.0;
                float final_mask = smoothstep(h - 0.01, h, st.y) * smoothstep(col_l, col_l + 0.01, st.x) * (1.0 - smoothstep(col_r - 0.01, col_r, st.x));
                gl_FragColor = vec4(u_color, final_mask);
            }
        `;
    if (!canvasEl.current) return null;
    const newGl = canvasEl.current.getContext("webgl");
    if (!newGl) {
      alert("WebGL is not supported.");
      return null;
    }

    const createShader = (
      gl: WebGLRenderingContext,
      sourceCode: string,
      type: number
    ) => {
      const shader = gl.createShader(type);
      if (!shader) {
        console.error("Unable to create shader");
        return null;
      }
      gl.shaderSource(shader, sourceCode);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error: " + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = createShader(newGl, vsSource, newGl.VERTEX_SHADER);
    const fragmentShader = createShader(newGl, fsSource, newGl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return null;
    const program = newGl.createProgram();
    if (!program) {
      console.error("Unable to create program");
      return null;
    }
    newGl.attachShader(program, vertexShader);
    newGl.attachShader(program, fragmentShader);
    newGl.linkProgram(program);

    uniforms.current = {};
    const uniformCount = newGl.getProgramParameter(
      program,
      newGl.ACTIVE_UNIFORMS
    );
    for (let i = 0; i < uniformCount; i++) {
      const uniformInfo = newGl.getActiveUniform(program, i);
      if (uniformInfo) {
        uniforms.current[uniformInfo.name] = newGl.getUniformLocation(
          program,
          uniformInfo.name
        );
      }
    }

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = newGl.createBuffer();
    newGl.bindBuffer(newGl.ARRAY_BUFFER, buffer);
    newGl.bufferData(newGl.ARRAY_BUFFER, vertices, newGl.STATIC_DRAW);
    newGl.useProgram(program);
    const positionLocation = newGl.getAttribLocation(program, "a_position");
    newGl.enableVertexAttribArray(positionLocation);
    newGl.vertexAttribPointer(positionLocation, 2, newGl.FLOAT, false, 0, 0);

    newGl.uniform1f(uniforms.current.u_col_width, params.colWidth);
    newGl.uniform1f(uniforms.current.u_speed, params.speed);
    newGl.uniform1f(uniforms.current.u_scale, params.scale);
    newGl.uniform1f(uniforms.current.u_seed, params.seed);
    newGl.uniform3f(
      uniforms.current.u_color,
      params.color[0],
      params.color[1],
      params.color[2]
    );

    return newGl;
  };

  const render = () => {
    if (gl.current) {
      gl.current.uniform1f(uniforms.current.u_time, performance.now());
      gl.current.uniform1f(
        uniforms.current.u_scroll_progr,
        params.scrollProgress
      );
      gl.current.drawArrays(gl.current.TRIANGLE_STRIP, 0, 4);
    }
    requestAnimationFrame(render);
  };

  const resizeCanvas = () => {
    if (canvasEl.current && gl.current) {
      const dpr = Math.min(window.devicePixelRatio, 2);
      if (!canvasEl.current) return;
      canvasEl.current.width = window.innerWidth * dpr;
      canvasEl.current.height = window.innerHeight * dpr;
      gl.current.viewport(
        0,
        0,
        canvasEl.current.width,
        canvasEl.current.height
      );
      gl.current.uniform2f(
        uniforms.current.u_resolution,
        canvasEl.current.width,
        canvasEl.current.height
      );
    }
  };

  const createControls = () => {
    const gui = new GUI();
    gui.close();
    gui
      .add(params, "colWidth", 0.2, 1.5)
      .onChange((v: number) => {
        if (gl.current) {
          gl.current.uniform1f(uniforms.current.u_col_width, v);
        }
      })
      .name("column width");
    gui.add(params, "scale", 0.15, 0.35).onChange((v: number) => {
      if (gl.current) {
        gl.current.uniform1f(uniforms.current.u_scale, v);
      }
    });
    gui.add(params, "speed", 0, 1).onChange((v: number) => {
      if (gl.current) {
        gl.current.uniform1f(uniforms.current.u_speed, v);
      }
    });
    gui.add(params, "seed", 0, 1).onChange((v: number) => {
      if (gl.current) {
        gl.current.uniform1f(uniforms.current.u_seed, v);
      }
    });
    return gui; // Return instance for cleanup
  };

  return (
    <div className="page-container h-[200vh] opacity-0">
      {/* Wrapper for fixed content */}
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
        <canvas ref={canvasEl} className="w-full h-full" />
        <div
          ref={contentEl}
          className="text-white text-center opacity-0 pointer-events-auto"
        >
          <h1 className="text-5xl font-bold">Gooey Links</h1>
          <p className="mt-4 text-lg">Scroll down to see the effect</p>
        </div>
        <div
          ref={scrollMsgEl}
          className="absolute bottom-10 text-white text-lg"
        >
          Scroll down
        </div>
        <div
          ref={scrollArrowEl}
          className="absolute bottom-4 text-white text-2xl"
        >
          ↓
        </div>
      </div>
    </div>
  );
};

export default GooeyLinks;
