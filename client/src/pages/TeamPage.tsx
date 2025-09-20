import { useState } from "react";
import GooeyLinks from "@/components/GooeyLinks";

interface Member {
  role: string;
  name: string;
  image: string;
  linkedin: string | null;
}

interface SelectedMember {
  name: string;
  image: string;
  linkedin: string | null;
}

export default function Team() {
  
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<SelectedMember | null>(null);

  const quote = '"WIRED FOR SUCCESS"';

  
  const teams: Record<string, string[]> = {
    "EXECUTIVE BOARD": [
      "Akshaya V V - Joint Secretary",
      "Sanjana Y - General Secretary",
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

  const memberLinkedIn: Record<string, string | null> = {
    "Akshaya V V": "https://www.linkedin.com/in/akshaya-v-v/",
    "Sanjana Y": "https://www.linkedin.com/in/sanjana-yoganand-b484542a4/",
  };

  const facultyIncharge: Member = {
    role: "FACULTY INCHARGE",
    name: "Thiyagarajan",
    image: "/team/Thiyagarajan.jpeg",
    linkedin: null,
  };

  const coreExecutives: Member[] = [
    {
      role: "CHAIR PERSON",
      name: "Rithvikha V",
      image: "/team/Rithvikha.jpeg",
      linkedin: "https://www.linkedin.com/in/rithvikha-v-b7946824a/",
    },
    {
      role: "VICE CHAIR",
      name: "Anshul L",
      image: "/team/Anshul.jpg",
      linkedin: "https://www.linkedin.com/in/anshul-l/",
    },
    {
      role: "SECRETARY",
      name: "Samyuktaa",
      image: "/team/Samyuktaa.jpeg",
      linkedin: "https://www.linkedin.com/in/samyuktaa-sivakumar-128524219/",
    },
    {
      role: "TREASURER",
      name: "Sanjay M",
      image: "/team/Sanjay.jpg",
      linkedin: "https://www.linkedin.com/in/sanjay-m-664695305/",
    },
  ];

  const memberImages: Record<string, string> = {
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
    "HarshikaaSundari": "/team/Harshikaa.jpg",
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
    Thiyagarajan: "/team/Thiyagarajan.jpeg",
  };

  const toggleTeam = (team: string) => setSelectedTeam(team);

  const allTeamBoxNames = Object.keys(teams);

  return (
    <div className="flex flex-col min-h-screen bg-[#102512] relative">
      <main className="flex-grow pt-28 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-2 bg-gradient-to-r from-[#e6f86d] via-white to-[#e6f86d] text-transparent bg-clip-text animate-glow-text relative z-10">
          OUR TEAM
        </h1>
        <h2 className="text-3xl font-bold text-white text-center mb-4 animate-fade-in-up relative z-10">
          {quote}
        </h2>

        <div className="flex flex-col items-center w-full px-4 md:px-20 lg:px-40 space-y-8 pb-10">
          <div
            className="bg-[#e6f86d] text-[#203E2E] rounded-2xl p-8 sm:p-10 w-full max-w-[600px]
             text-center shadow-2xl border-4 border-white animate-glow-text z-10"
          >
            <h3 className="text-2xl font-extrabold mb-6">CORE EXECUTIVES</h3>
            <div
              className="mb-8 flex justify-center w-full"
              onClick={() =>
                setSelectedMember({
                  name: facultyIncharge.name,
                  image: facultyIncharge.image,
                  linkedin: null,
                })
              }
            >
              <div className="cursor-pointer hover:scale-105 transition">
                <img
                  src={facultyIncharge.image}
                  alt={facultyIncharge.name}
                  className="rounded-lg w-52 h-52 mx-auto mb-3 object-cover border-4 border-[#203E2E] shadow-lg"
                />
                <p className="text-base font-semibold">{facultyIncharge.role}</p>
                <p className="text-lg font-bold">{facultyIncharge.name}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {coreExecutives.map((member, idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    setSelectedMember({
                      name: member.name,
                      image: member.image,
                      linkedin: member.linkedin,
                    })
                  }
                  className="cursor-pointer hover:scale-105 transition"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-lg w-52 h-52 mx-auto mb-3 object-cover border-4 border-[#203E2E] shadow-lg"
                  />
                  <p className="text-base font-semibold">{member.role}</p>
                  <p className="text-lg font-bold">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
          {allTeamBoxNames.map((teamName) => (
            <div
              key={teamName}
              onClick={() => toggleTeam(teamName)}
              className="group bg-[#e6f86d] text-[#203E2E] rounded-2xl w-full max-w-[600px] p-8 flex flex-col items-center justify-center cursor-pointer transition duration-300 hover:scale-[1.02] shadow-lg relative"
            >
              <p className="text-2xl font-bold text-center">{teamName}</p>
              <div className="flex items-center justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-gray-600 text-lg mr-2">👀</span>
                <span className="text-gray-600 text-lg">View Members</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* TEAM POPUP */}
      {selectedTeam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="popup-special text-white p-8 w-[90%] max-w-xl shadow-2xl relative animate-fade-in-up border-4 border-white rounded-lg">
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
              {teams[selectedTeam]?.map((fullName, idx) => {
                const [name] = fullName.split(" - ");
                const image = memberImages[name] || "/team/default.jpg";
                const linkedin = memberLinkedIn[name];
                return (
                  <li
                    key={idx}
                    onClick={() =>
                      setSelectedMember({
                        name,
                        image,
                        linkedin,
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

      {/* MEMBER POPUP */}
      {selectedMember && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="popup-special text-white p-10 w-[90%] max-w-sm relative animate-fade-in-up border-4 border-white rounded-lg">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-4 text-xl font-bold text-[#e6f86d]"
            >
              ✖
            </button>
            <img
              src={selectedMember.image}
              className="w-56 h-56 rounded-full mx-auto mb-4 border-4 border-[#e6f86d] object-cover"
              alt={selectedMember.name}
            />
            <p className="text-2xl font-bold text-center underline decoration-[#e6f86d]">
              {selectedMember.name}
            </p>
            {selectedMember.linkedin && (
              <a
                href={selectedMember.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex justify-center items-center text-white bg-[#0077b5] px-4 py-2 rounded-full font-semibold transition hover:bg-[#005582]"
              >
                View LinkedIn
              </a>
            )}
          </div>
        </div>
      )}

      <footer className="mt-50 w-full ">
        <GooeyLinks />
      </footer>
    </div>
  );
}