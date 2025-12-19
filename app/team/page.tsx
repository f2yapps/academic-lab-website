"use client";

import Image from "next/image";

interface TeamMember {
  name: string;
  position?: string;
  profileImage: string;
  email: string;
  phone?: string;
  education: {
    phd?: string;
    msc?: string;
    mtech?: string;
    bsc?: string;
  };
  links?: {
    googleScholar?: string;
    researchGate?: string;
    linkedin?: string;
    youtube?: string;
  };
  category: "PI" | "Postdoctoral Research Associate" | "Graduate Students" | "Undergraduate Students" | "Alumni";
}

// Team member data - Update this with actual information
const teamMembers: TeamMember[] = [
  {
    name: "Dr. Hemendra Kumar",
    profileImage: "/profile%20pictures/HK_Headshot.jpeg",
    email: "hemendra@umd.edu",
    phone: "(301) 226-7405",
    education: {
      phd: "Major- Biosystems Engineering, Auburn University; Minor- Statistics, Auburn University",
      msc: "Civil and Environmental Engineering, Auburn University",
      mtech: "Hydrology, Indian Institute of Technology (IIT) Roorkee and University of Stuttgart",
      bsc: "B.Tech- Agricultural Engineering, Punjab Agricultural University",
    },
    links: {
      googleScholar: "https://scholar.google.com/citations?user=ym2vnxoAAAAJ&hl=en&oi=ao",
      linkedin: "https://www.linkedin.com/in/hemendra-kumar-pa/",
    },
    category: "PI",
  },
  {
    name: "Fitsum Teshome, Ph.D.",
    profileImage: "/profile%20pictures/HK_Headshot.jpeg", // Replace with actual profile picture
    email: "fteshome@umd.edu",
    phone: "786-491-5076",
    education: {
      phd: "Agricultural and Biological Engineering, University of Florida, USA",
      msc: "Agricultural Engineering, Banaras Hindu University, India",
      bsc: "Agricultural and Biological Engineering, Haramaya University, Ethiopia",
    },
    links: {
      googleScholar: "https://scholar.google.com/citations?user=QzEpPCUAAAAJ&hl=en&oi=ao",
      researchGate: "https://www.researchgate.net/profile/Fitsum-Teshome",
      linkedin: "https://www.linkedin.com/in/fitsum-teshome-ph-d-52b305ab/",
    },
    category: "Postdoctoral Research Associate",
  },
  {
    name: "Cara Peterson, Ph.D.",
    profileImage: "/profile%20pictures/HK_Headshot.jpeg", // Replace with actual profile picture
    email: "cmpeters@umd.edu",
    phone: "(301) 226-7404",
    education: {
      phd: "Institution",
      msc: "Institution",
      bsc: "Institution",
    },
    links: {
      googleScholar: "https://scholar.google.com/...",
      researchGate: "https://www.researchgate.net/...",
      linkedin: "https://www.linkedin.com/...",
    },
    category: "Postdoctoral Research Associate",
  },
  {
    name: "Abubakar Siddiq Palli",
    profileImage: "/profile%20pictures/HK_Headshot.jpeg", // Replace with actual profile picture
    email: "email@umd.edu",
    phone: "(XXX) XXX-XXXX",
    education: {
      bsc: "Institution",
      msc: "Institution (In Progress)",
    },
    links: {
      googleScholar: "https://scholar.google.com/...",
      researchGate: "https://www.researchgate.net/...",
      linkedin: "https://www.linkedin.com/...",
      youtube: "https://www.youtube.com/...",
    },
    category: "Graduate Students",
  },
  {
    name: "Ananth Sriram",
    profileImage: "/profile%20pictures/HK_Headshot.jpeg", // Replace with actual profile picture
    email: "email@umd.edu",
    phone: "(XXX) XXX-XXXX",
    education: {
      bsc: "Institution (In Progress)",
    },
    links: {
      googleScholar: "https://scholar.google.com/...",
      linkedin: "https://www.linkedin.com/...",
    },
    category: "Undergraduate Students",
  },
  {
    name: "Shreeya Venkatesh Babu",
    profileImage: "/profile%20pictures/HK_Headshot.jpeg", // Replace with actual profile picture
    email: "email@umd.edu",
    phone: "(XXX) XXX-XXXX",
    education: {
      bsc: "Institution (In Progress)",
    },
    links: {
      linkedin: "https://www.linkedin.com/...",
    },
    category: "Undergraduate Students",
  },
  {
    name: "Shivam Sehgal",
    profileImage: "/profile%20pictures/HK_Headshot.jpeg", // Replace with actual profile picture
    email: "email@example.com",
    phone: "(XXX) XXX-XXXX",
    education: {
      bsc: "Institution",
      msc: "Institution",
      phd: "Institution",
    },
    links: {
      googleScholar: "https://scholar.google.com/...",
      researchGate: "https://www.researchgate.net/...",
      linkedin: "https://www.linkedin.com/...",
    },
    category: "Alumni",
  },
];

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {/* Profile Picture */}
      <div className="flex justify-center mb-4">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
          <Image
            src={member.profileImage}
            alt={member.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      {/* Name only - no position/category */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
      </div>

      {/* Contact Information */}
      <div className="space-y-2 mb-4 text-sm">
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span>{" "}
          <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">
            {member.email}
          </a>
        </p>
        {member.phone && (
          <p className="text-gray-700">
            <span className="font-semibold">Phone:</span> {member.phone}
          </p>
        )}
      </div>

      {/* Education Background */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          {member.education.phd && <li>Ph.D.: {member.education.phd}</li>}
          {member.education.msc && <li>M.Sc.: {member.education.msc}</li>}
          {member.education.mtech && <li>M.Tech: {member.education.mtech}</li>}
          {member.education.bsc && <li>B.Sc.: {member.education.bsc}</li>}
        </ul>
      </div>

      {/* Social Links */}
      {member.links && (
        <div className="flex flex-wrap gap-3 justify-center">
          {member.links.googleScholar && (
            <a
              href={member.links.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              Google Scholar
            </a>
          )}
          {member.links.researchGate && (
            <a
              href={member.links.researchGate}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              ResearchGate
            </a>
          )}
          {member.links.linkedin && (
            <a
              href={member.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              LinkedIn
            </a>
          )}
          {member.links.youtube && (
            <a
              href={member.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              YouTube
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Page() {
  const pi = teamMembers.filter((m) => m.category === "PI");
  const postdocs = teamMembers.filter((m) => m.category === "Postdoctoral Research Associate");
  const gradStudents = teamMembers.filter((m) => m.category === "Graduate Students");
  const undergradStudents = teamMembers.filter((m) => m.category === "Undergraduate Students");
  const alumni = teamMembers.filter((m) => m.category === "Alumni");

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-10">Team Members</h1>

        {/* Principal Investigator */}
        {pi.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-900 mb-6">Principal Investigator (PI)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pi.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Postdoctoral Research Associates */}
        {postdocs.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-900 mb-6">Postdoctoral Research Associates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {postdocs.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Graduate Students */}
        {gradStudents.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-900 mb-6">Graduate Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gradStudents.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Undergraduate Students */}
        {undergradStudents.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-900 mb-6">Undergraduate Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {undergradStudents.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Alumni */}
        {alumni.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-900 mb-6">Alumni</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {alumni.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
