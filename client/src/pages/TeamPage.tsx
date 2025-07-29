import GooeyLinks from "@/components/GooeyLinks";
import React, { useState } from "react";
import useWindowWidth from "@/components/useWindowWidth"; 

export default function Team() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const windowWidth = useWindowWidth(); 
  const isSmallScreen = windowWidth < 768; 

  const quote = '"WIRED FOR SUCCESS"';

  const teams = {
    "EXECUTIVE BOARD": [
      "Anshul L - Vice Chair",
      "Samyuktaa - Secretary",
      "Akshaya V V - Joint Secretary",
      "Sanjana Y - General Secretary",
      "Sanjay M - Treasurer",
    ],
    "PR TEAM": [
      "Leelasri B - PR Head",
      "Shravanthi D - PR Member",
      "Adithya Sivakumar - PR Member",
      "Diya Bharath - PR Member",
      "RoopaSree B - PR Member",
    ],
    "DESIGN TEAM": [
      "HarshikaaSundari - Design Head",
      "Praveen N R - Design Member",
      "Yashasvee - Design Member",
      "Shivashankar P - Design Member",
      "Tanyashree M - Design Member",
    ],
    "EVENT MGMT": [
      "Felicia Jenny P J - Events Head",
      "Anbuselvam B - Events Member",
      "Viya Balaji - Events Member",
      "Harinath Vaitheeswar S - Events Member",
      "Jayasurya S - Events Member",
      "Avinash R - Events Member",
    ],
    "WEB MASTER TEAM": [
      "Navadeep Reddy - Web Master Head",
      "Prawin Kumar S - Web Master Member",
      "Shiri Sakthi P N - Web Master Member",
    ],
  };

  
  const positions = {
    "EXECUTIVE BOARD": "top-[12%] right-[6%]",
    "PR TEAM": "top-[12%] left-[6%]",
    "DESIGN TEAM": "bottom-[10%] left-[8%]",
    "WEB MASTER TEAM": "bottom-[10%] right-[8%]",
    "EVENT MGMT": "bottom-[0%] left-1/2 transform -translate-x-1/2",
  };

  const memberImages = {
    "Shiri Sakthi P N": "/team/Shiri.jpg",
    "Akshaya V V": "/team/akshaya.jpg",
    "Rithvikha V": "/team/Rithvikha.jpeg",
    "Navadeep Reddy": "/team/Navadeep.jpg",
    "Prawin Kumar S": "/team/prawin.jpg",
    "Felicia Jenny P J": "/team/Felicia J.jpg",
    "Anbuselvam B": "/team/Anbuselvam.webp",
    "Viya Balaji": "/team/Viya.jpg",
    "Harinath Vaitheeswar S": "/team/Harinath.jpg",
    "Jayasurya S": "/team/Jayasurya.png",
    "Avinash R": "/team/Avinash R.jpg",
    HarshikaaSundari: "/team/Harshikaa.jpg",
    "Praveen N R": "/team/Praveen.jpg",
    Yashasvee: "/team/yashasvee.jpg",
    "Shivashankar P": "/team/Shivashankar.jpg",
    "Tanyashree M": "/team/Tanyashree.jpg",
    "Leelasri B": "/team/Leelasri.jpg",
    "Shravanthi D": "/team/Shravanthi.jpg",
    "Adithya Sivakumar": "/team/Adi.jpeg",
    "Diya Bharath": "/team/Diya.jpg",
    "RoopaSree B": "/team/Roopashree.jpg",
    "Anshul L": "/team/Anshul.jpg",
    Samyuktaa: "/team/Samyuktaa.jpeg",
    "Sanjana Y": "/team/sanjana.jpg",
    "Sanjay M": "/team/Sanjay.jpg",
  };

  const toggleTeam = (team) => setSelectedTeam(team);

 
  const linearLayoutElements = [
    { type: "chair", name: "Rithvikha V", image: memberImages["Rithvikha V"] },
    ...Object.keys(teams).map((teamName) => ({ type: "team", name: teamName })),
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#102512] relative">
      
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[1100px] h-[1100px] rounded-full neon-ring ring-1"></div>
        <div className="absolute w-[900px] h-[900px] rounded-full neon-ring ring-2"></div>
        <div className="absolute w-[700px] h-[700px] rounded-full neon-ring ring-3"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full neon-ring ring-4"></div>
      </div>

      <main className="flex-grow pt-28 px-4">
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-2 bg-gradient-to-r from-[#e6f86d] via-white to-[#e6f86d] text-transparent bg-clip-text animate-glow-text relative z-10">
          OUR TEAM
        </h1>
        <h2 className="text-3xl font-bold text-white text-center mb-4 animate-fade-in-up relative z-10">
          {quote}
        </h2>
        <p className="text-center text-[#e6f86d] text-md italic mb-8 animate-fade-in-up relative z-10 max-w-2xl mx-auto">
          Fusing our energies dynamically to create electric achievements and
          transformative outcomes.
        </p>

        {isSmallScreen ? (
          
          <div className="flex flex-col items-center py-8 px-4 z-10 relative">
            {linearLayoutElements.map((element, index) => (
              <React.Fragment key={index}>
                {element.type === "chair" ? (
                  
                  <div
                    onClick={() =>
                      setSelectedMember({
                        name: element.name,
                        image: element.image,
                      })
                    }
                    className="bg-[#e6f86d] text-[#203E2E] rounded-2xl p-3 w-60 text-center shadow-xl border-2 border-white animate-glow-text cursor-pointer my-4" // Added my-4
                  >
                    <img
                      src={element.image}
                      className="rounded-full w-20 h-20 mx-auto mb-2"
                      alt={element.name}
                    />
                    <p className="text-sm font-semibold">CHAIR PERSON</p>
                    <p className="text-lg font-bold">{element.name}</p>
                  </div>
                ) : (
                  
                  <div
                    onClick={() => toggleTeam(element.name)}
                    className={`group bg-[#e6f86d] text-[#203E2E] rounded-full w-48 h-48 flex flex-col items-center justify-center cursor-pointer
                      transition duration-300 hover:scale-105 shadow-md hover:shadow-lg my-4`} // Added my-4
                  >
                    <p className="text-md font-bold whitespace-pre-line text-center">
                      {element.name}
                    </p>
                    <span className="mt-1 text-[10px] opacity-60 hidden group-hover:block">
                      👁 View Members
                    </span>
                  </div>
                )}
                
                {index < linearLayoutElements.length - 1 && (
                  <div className="linear-separator"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        ) : (
          
          <div className="relative mx-auto w-full max-w-[800px] h-[600px] sm:h-[650px] md:h-[700px] lg:h-[550px] z-10 -mt-4 md:-mt-8 overflow-hidden">
            
            <svg
              className="absolute w-full h-full z-0"
              viewBox="0 0 800 600"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M400 230 C 300 180, 180 140, 130 110"
                stroke="#e6f86d"
                strokeWidth="2.5"
                fill="none"
                className="glowing-line"
              />
              <path
                d="M400 230 C 500 180, 620 140, 670 110"
                stroke="#e6f86d"
                strokeWidth="2.5"
                fill="none"
                className="glowing-line"
              />
              <path
                d="M400 230 C 290 340, 200 420, 150 480"
                stroke="#e6f86d"
                strokeWidth="2.5"
                fill="none"
                className="glowing-line"
              />
              <path
                d="M400 230 C 510 340, 600 420, 650 480"
                stroke="#e6f86d"
                strokeWidth="2.5"
                fill="none"
                className="glowing-line"
              />
              <path
                d="M400 230 C 400 340, 400 470, 400 570"
                stroke="#e6f86d"
                strokeWidth="2.5"
                fill="none"
                className="glowing-line"
              />
            </svg>

            
            <div
              onClick={() =>
                setSelectedMember({
                  name: "Rithvikha V",
                  image: memberImages["Rithvikha V"],
                })
              }
              className="absolute top-[36%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#e6f86d] text-[#203E2E] rounded-2xl p-3 sm:p-4 w-48 sm:w-52 text-center shadow-xl border-2 border-white animate-glow-text cursor-pointer z-10"
            >
              <img
                src={memberImages["Rithvikha V"]}
                className="rounded-full w-20 h-20 mx-auto mb-2"
                alt="Rithvikha V"
              />
              <p className="text-sm font-semibold">CHAIR PERSON</p>
              <p className="text-lg font-bold">Rithvikha V</p>
            </div>

            
            {Object.keys(teams).map((teamName) => (
              <div
                key={teamName}
                onClick={() => toggleTeam(teamName)}
                className={`group absolute bg-[#e6f86d] text-[#203E2E] rounded-full w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center cursor-pointer
                  transition duration-300 hover:scale-105 shadow-md hover:shadow-lg ${positions[teamName]}`}
              >
                <p className="text-sm font-bold whitespace-pre-line text-center">
                  {teamName}
                </p>
                <span className="mt-1 text-[10px] opacity-60 hidden group-hover:block">
                  👁 View Members
                </span>
              </div>
            ))}
          </div>
        )}
      </main>

      
      {selectedTeam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="popup-special text-white p-8 w-[90%] max-w-xl shadow-2xl relative animate-fade-in-up">
            <button
              onClick={() => setSelectedTeam(null)}
              className="absolute top-3 right-4 text-xl font-bold text-[#e6f86d]"
            >
              ✖
            </button>
            <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#e6f86d] via-white to-[#e6f86d] text-transparent bg-clip-text animate-glow-text">
              {selectedTeam}
            </h2>
            <ul className="text-center space-y-3">
              {teams[selectedTeam].map((fullName, idx) => {
                const [name] = fullName.split(" - "); 
                return (
                  <li
                    key={idx}
                    onClick={() =>
                      setSelectedMember({
                        name,
                        image: memberImages[name] || "/team/default.jpg", // Fallback image
                      })
                    }
                    className="text-lg font-semibold hover:text-[#e6f86d] cursor-pointer"
                  >
                    ✨ {fullName}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

     
      {selectedMember && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="popup-special text-white p-6 w-[90%] max-w-sm relative animate-fade-in-up">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-4 text-xl font-bold text-[#e6f86d]"
            >
              ✖
            </button>
            <img
              src={selectedMember.image}
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#e6f86d]"
              alt={selectedMember.name} 
            />
            <p className="text-2xl font-bold text-center underline decoration-[#e6f86d]">
              {selectedMember.name}
            </p>
          </div>
        </div>
      )}

      <footer className="mt-50 w-full ">
        <GooeyLinks />
      </footer>

      
      <style>{`
        /* Global Box-Sizing for better layout consistency */
        html {
          box-sizing: border-box;
        }
        *, *::before, *::after {
          box-sizing: inherit;
        }

        /* Your existing animations and styles */
        @keyframes glowText {
          0%, 1% { text-shadow: 0 0 4px #e6f86d, 0 0 8px #e6f86d; }
          50% { text-shadow: 0 0 6px #e6f86d, 0 0 10px #e6f86d; }
          100% { text-shadow: 0 0 4px #e6f86d, 0 0 8px #e6f86d; }
        }
        .animate-glow-text { animation: glowText 3s ease-in-out infinite; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }

        .popup-special {
          animation: fadeInUp 0.3s ease-out;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          border: 2px solid #e6f86d;
        }

        .glowing-line {
          filter: drop-shadow(0 0 4px #e6f86d);
        }

        /* New style for the linear separator line */
        .linear-separator {
          width: 2px; /* Thin vertical line */
          height: 80px; /* Length of the line, adjust as needed */
          background-color: #e6f86d; /* Color of the line */
          filter: drop-shadow(0 0 4px #e6f86d); /* Glowing effect */
          margin: 1rem 0; /* Add some space above and below the line */
        }


        @keyframes pulseRingSimultaneous {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.06); opacity: 0.8; }
        }

        .neon-ring {
          border-width: 2px;
          animation: pulseRingSimultaneous 5s ease-in-out infinite;
        }

        .ring-1 { border-color: #1c8b22; }
        .ring-2 { border-color: #f8faf8; }
        .ring-3 { border-color: #d0ef74; }
        .ring-4 { border-color: #778c8b; }
      `}</style>
    </div>
  );
}