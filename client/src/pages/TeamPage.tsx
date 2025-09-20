import { useState } from "react";
import GooeyLinks from "@/components/GooeyLinks";

interface Member {
  role: string;
  name: string;
  image: string;
  linkedin: string | null;
  academicYear?: string;
}

interface SelectedMember {
  name: string;
  image: string;
  linkedin: string | null;
  academicYear?: string;
}

export default function Team() {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<SelectedMember | null>(null);

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
    "Rithvikha V": "https://www.linkedin.com/in/rithvikha-v-b7946824a/",
    "Anshul L": "https://www.linkedin.com/in/anshul-l/",
    Samyuktaa: "https://www.linkedin.com/in/samyuktaa-sivakumar-128524219/",
    "Sanjay M": "https://www.linkedin.com/in/sanjay-m-664695305/",
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

  const pastChairpersons: Member[] = [
    {
      role: "CHAIR PERSON",
      name: "Sai Krishna Karthik",
      image: "/team/Sai Krishna Karthik.jpeg",
      linkedin: null,
      academicYear: "2023-2024",
    },
    {
      role: "CHAIR PERSON",
      name: "Smithaa M",
      image: "/team/Smithaa.jpg",
      linkedin: null,
      academicYear: "2024-2025",
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
    "Sai Krishna Karthik": "/team/Sai Krishna Karthik.jpeg",
    "Smithaa M": "/team/Smithaa.jpg",
  };

  const toggleTeam = (team: string) => setSelectedTeam(team);
  const allTeamBoxNames = Object.keys(teams);

  return (
    <div className="flex flex-col min-h-screen bg-[#102512] relative">
      <main className="flex-grow pt-28 px-4 font-sans relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-2 text-[#e6f86d] drop-shadow-[0_0_15px_rgba(230,248,109,0.8)] hover:drop-shadow-[0_0_40px_rgba(230,248,109,1)] transition-all duration-300 relative z-10 cursor-pointer">
          OUR TEAM
        </h1>
        <h2 className="text-3xl font-bold text-[#e6f86d] text-center mb-4 drop-shadow-[0_0_10px_rgba(230,248,109,0.5)] hover:drop-shadow-[0_0_20px_rgba(230,248,109,0.8)] transition-all duration-300 relative z-10">
          "WIRED FOR SUCCESS"
        </h2>
        <div className="flex flex-col items-center w-full px-4 md:px-20 lg:px-40 space-y-10 pb-16 animate-fade-in-up">
          {/* CORE EXECUTIVES Section */}
          <div
            className="bg-[#e6f86d] text-[#203E2E] rounded-2xl p-8 sm:p-10 w-full max-w-[600px]
             text-center shadow-[0_0_40px_rgba(230,248,109,0.3)] border-4 border-white animate-glow z-10 transition-all duration-300 hover:scale-[1.01] overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#e6f86d]/40 to-transparent opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <h3 className="text-2xl font-extrabold mb-6 text-[#203E2E] drop-shadow-md relative">
              CORE EXECUTIVES (2025-2026)
            </h3>
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
              <div className="cursor-pointer hover:scale-105 transition-transform duration-300 relative group">
                <img
                  src={facultyIncharge.image}
                  alt={facultyIncharge.name}
                  className="rounded-full w-52 h-52 mx-auto mb-3 object-cover border-4 border-[#203E2E] shadow-lg group-hover:shadow-[0_0_20px_rgba(230,248,109,0.8)] group-hover:rotate-3 transition-all duration-500"
                />
                <p className="text-base font-semibold text-[#203E2E] drop-shadow-md">
                  {facultyIncharge.role}
                </p>
                <p className="text-lg font-bold text-[#203E2E] drop-shadow-lg">
                  {facultyIncharge.name}
                </p>
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
                  className="cursor-pointer hover:scale-105 transition-transform duration-300 relative group"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-52 h-52 mx-auto mb-3 object-cover border-4 border-[#203E2E] shadow-lg group-hover:shadow-[0_0_20px_rgba(230,248,109,0.8)] group-hover:rotate-3 transition-all duration-500"
                  />
                  <p className="text-base font-semibold text-[#203E2E] drop-shadow-md">
                    {member.role}
                  </p>
                  <p className="text-lg font-bold text-[#203E2E] drop-shadow-lg">
                    {member.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PAST CHAIRPERSONS Section */}
          <div
            className="bg-[#e6f86d] text-[#203E2E] rounded-2xl p-8 sm:p-10 w-full max-w-[600px]
             text-center shadow-[0_0_40px_rgba(230,248,109,0.3)] border-4 border-white animate-glow z-10 transition-all duration-300 hover:scale-[1.01] overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#e6f86d]/40 to-transparent opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <h3 className="text-2xl font-extrabold mb-6 text-[#203E2E] drop-shadow-md relative">
              PAST CHAIRPERSONS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {pastChairpersons.map((member, idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    setSelectedMember({
                      name: member.name,
                      image: member.image,
                      linkedin: member.linkedin,
                      academicYear: member.academicYear,
                    })
                  }
                  className="cursor-pointer hover:scale-105 transition-transform duration-300 relative group"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-52 h-52 mx-auto mb-3 object-cover border-4 border-[#203E2E] shadow-lg group-hover:shadow-[0_0_20px_rgba(230,248,109,0.8)] group-hover:rotate-3 transition-all duration-500"
                  />
                  <p className="text-base font-semibold text-[#203E2E] drop-shadow-md">
                    {member.name}
                  </p>
                  {member.academicYear && (
                    <p className="text-sm font-medium text-gray-700 drop-shadow-sm">
                      ({member.academicYear})
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* END PAST CHAIRPERSONS Section */}

          {allTeamBoxNames.map((teamName) => (
            <div
              key={teamName}
              onClick={() => toggleTeam(teamName)}
              className="group bg-[#e6f86d] text-[#203E2E] rounded-2xl w-full max-w-[600px] p-8 flex flex-col items-center justify-center cursor-pointer transition duration-500 hover:scale-[1.02] shadow-[0_0_40px_rgba(230,248,109,0.1)] relative overflow-hidden border-4 border-white"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#e6f86d]/40 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <p className="text-2xl font-bold text-center relative z-10 drop-shadow-lg">
                {teamName}
              </p>
              <div className="flex items-center justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                <span className="text-[#203E2E] text-lg mr-2">👀</span>
                <span className="text-[#203E2E] text-lg">View Members</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* TEAM POPUP */}
      {selectedTeam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="popup-special text-white p-8 w-[90%] max-w-xl shadow-2xl relative animate-fade-in-up border-4 border-[#e6f86d] rounded-2xl bg-white/10 backdrop-blur-lg">
            <button
              onClick={() => setSelectedTeam(null)}
              className="absolute top-3 right-4 text-3xl font-bold text-[#e6f86d] hover:text-white transition-colors"
            >
              ✖
            </button>
            <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#e6f86d] via-white to-[#e6f86d] text-transparent bg-clip-text animate-glow-text drop-shadow-md">
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
                    className="text-lg font-semibold hover:text-[#e6f86d] cursor-pointer transition-colors"
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
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-xl">
          <div className="popup-special text-white p-10 w-[90%] max-w-sm relative animate-fade-in-up border-4 border-[#e6f86d] rounded-2xl bg-white/10 backdrop-blur-lg shadow-[0_0_50px_rgba(230,248,109,0.4)]">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-4 text-3xl font-bold text-[#e6f86d] hover:text-white transition-colors"
            >
              ✖
            </button>
            <img
              src={selectedMember.image}
              className="w-56 h-56 rounded-full mx-auto mb-4 object-cover border-4 border-[#e6f86d] shadow-lg hover:shadow-[0_0_20px_rgba(230,248,109,0.8)] transition-all duration-300"
              alt={selectedMember.name}
            />
            <p className="text-2xl font-bold text-center underline decoration-[#e6f86d] drop-shadow-lg text-white">
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