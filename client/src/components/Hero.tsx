import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Hero() {
  const heroTextRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (heroTextRef.current) {
      // Split text into words for animation
      const words = heroTextRef.current.querySelectorAll(".word");

      // Initial state - hide all words
      gsap.set(words, {
        opacity: 0,
        y: 100,
        rotationX: -90,
        transformOrigin: "50% 100%",
      });

      // Animate words in sequence
      gsap.to(words, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 0.5,
      });

      // Add a subtle glow effect to IEEE PES
      gsap.to(".ieee-pes-text", {
        textShadow: "0 0 20px rgba(174, 219, 129, 0.5)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });
    }
  }, []);

  const handleJoinUsClick = () => {
    alert("Applications not open");
  };

  return (
    <div className="relative min-h-screen w-full bg-dark-green overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute -top-16 -right-16 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] 
                     md:-top-24 md:-right-24 lg:-top-32 lg:-right-32 opacity-8 z-30"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="300"
            cy="300"
            r="280"
            stroke="currentColor"
            strokeWidth="2"
            className="text-office-green animate-pulse"
          />
          <circle
            cx="300"
            cy="300"
            r="240"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-mindaro"
          />
          <circle
            cx="300"
            cy="300"
            r="200"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-office-green animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <circle
            cx="300"
            cy="300"
            r="160"
            stroke="currentColor"
            strokeWidth="1"
            className="text-mindaro"
          />
          <circle
            cx="300"
            cy="300"
            r="120"
            stroke="currentColor"
            strokeWidth="1"
            className="text-office-green animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <circle
            cx="300"
            cy="300"
            r="80"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-mindaro"
          />
          <circle
            cx="300"
            cy="300"
            r="40"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-office-green animate-pulse"
            style={{ animationDelay: "3s" }}
          />
        </svg>

        {/* Middle row - Large ring on the left */}
        <svg
          className="absolute top-1/2 -left-20 w-[350px] h-[350px] md:w-[525px] md:h-[525px] lg:w-[700px] lg:h-[700px] 
                     md:-left-30 lg:-left-40 opacity-10 transform -translate-y-1/2 z-30"
          viewBox="0 0 700 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="350"
            cy="350"
            r="320"
            stroke="currentColor"
            strokeWidth="2"
            className="text-mindaro animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <circle
            cx="350"
            cy="350"
            r="280"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-office-green"
          />
          <circle
            cx="350"
            cy="350"
            r="240"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-mindaro animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <circle
            cx="350"
            cy="350"
            r="200"
            stroke="currentColor"
            strokeWidth="1"
            className="text-office-green"
          />
          <circle
            cx="350"
            cy="350"
            r="160"
            stroke="currentColor"
            strokeWidth="1"
            className="text-mindaro animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          <circle
            cx="350"
            cy="350"
            r="120"
            stroke="currentColor"
            strokeWidth="1"
            className="text-office-green"
          />
          <circle
            cx="350"
            cy="350"
            r="80"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-mindaro animate-pulse"
            style={{ animationDelay: "3.5s" }}
          />
          <circle
            cx="350"
            cy="350"
            r="40"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-office-green"
          />
        </svg>

        {/* Bottom row - Large ring on the right */}
        <svg
          className="absolute -bottom-20 -right-12 w-[250px] h-[250px] md:w-[375px] md:h-[375px] lg:w-[500px] lg:h-[500px] 
                     md:-bottom-30 md:-right-18 lg:-bottom-40 lg:-right-24 opacity-12 z-30"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="250"
            cy="250"
            r="230"
            stroke="currentColor"
            strokeWidth="2"
            className="text-office-green animate-pulse"
            style={{ animationDelay: "4s" }}
          />
          <circle
            cx="250"
            cy="250"
            r="195"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-mindaro"
          />
          <circle
            cx="250"
            cy="250"
            r="160"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-office-green animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <circle
            cx="250"
            cy="250"
            r="125"
            stroke="currentColor"
            strokeWidth="1"
            className="text-mindaro"
          />
          <circle
            cx="250"
            cy="250"
            r="90"
            stroke="currentColor"
            strokeWidth="1"
            className="text-office-green animate-pulse"
            style={{ animationDelay: "2.5s" }}
          />
          <circle
            cx="250"
            cy="250"
            r="55"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-mindaro"
          />
          <circle
            cx="250"
            cy="250"
            r="25"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-office-green animate-pulse"
            style={{ animationDelay: "0.8s" }}
          />
        </svg>
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-left lg:text-left">
            <h1
              ref={heroTextRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
            >
              <span className="word inline-block mr-4">Powering</span>
              <span className="word inline-block mr-4">Tomorrow</span>
              <span className="word inline-block mr-4">with</span>
              <span className="word ieee-pes-text inline-block text-mindaro">
                IEEE
              </span>
              <span className="word ieee-pes-text inline-block ml-2 text-mindaro">
                PES
              </span>
            </h1>
            <p className="text-lg md:text-xl text-baby-powder/90 max-w-3xl mb-8 leading-relaxed">
              IEEE PES SSN Student Chapter brings together minds passionate
              about Power & Energy. We organize technical seminars, impactful
              talks, awareness campaigns, and research-oriented webinars to
              empower students and connect them with industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleJoinUsClick}
                className="bg-mindaro hover:bg-mindaro/40 hover:text-white text-dark-green font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform "
              >
                JOIN US
              </button>
              <Link
                to="commitment"
                smooth={true}
                duration={800}
                offset={-80}
                className="border-2 border-office-green text-office-green hover:bg-office-green hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 cursor-pointer inline-block text-center"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
