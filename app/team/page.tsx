"use client";

import Image from "next/image";

interface TeamMember {
  name: string;
  position?: string;
  profileImage?: string;
  email: string;
  phone?: string;
  education: {
    phd?: string;
    msc?: string;
    mtech?: string;
    bsc?: string;
  };
  links?: {
    website?: string;
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
      bsc: "Agricultural Engineering, Punjab Agricultural University",
    },
    links: {
      website: "https://agnr.umd.edu/about/directory/hemendra-kumar/",
      googleScholar: "https://scholar.google.com/citations?user=ym2vnxoAAAAJ&hl=en&oi=ao",
      linkedin: "https://www.linkedin.com/in/hemendra-kumar-pa/",
    },
    category: "PI",
  },
  {
    name: "Fitsum Teshome, Ph.D.",
    profileImage: "/profile%20pictures/headshotfitsum.jpeg",
    email: "fteshome@umd.edu",
    phone: "786-491-5076",
    education: {
      phd: "Agricultural and Biological Engineering, University of Florida, USA",
      mtech: "Agricultural Engineering, Banaras Hindu University, India",
      bsc: "Agricultural and Biological Engineering, Haramaya University, Ethiopia",
    },
    links: {
      googleScholar: "https://scholar.google.com/citations?user=QzEpPCUAAAAJ&hl=en&oi=ao",
      researchGate: "https://www.researchgate.net/profile/Fitsum-Teshome",
      linkedin: "https://www.linkedin.com/in/fitsum-teshome-ph-d-52b305ab/",
      youtube: "https://www.youtube.com/@Dr.Fitsum_Teshome",
    },
    category: "Postdoctoral Research Associate",
  },
  {
    name: "Cara Peterson, Ph.D.",
    profileImage: "/profile%20pictures/caraheadshot.png",
    email: "cmpeters@umd.edu",
    phone: "(301) 226-7404",
    education: {
      phd: "Plant Science, University of Maryland, College Park, USA",
      msc: "Plant Science, University of Maryland, College Park, USA",
      bsc: "International Studies, University of North Carolina at Chapel Hill, USA",
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
    email: "email@umd.edu",
    phone: "(XXX) XXX-XXXX",
    education: {
      bsc: "Institution",
      msc: "University of Maryland (In Progress)",
    },
    links: {
      linkedin: "https://www.linkedin.com/...",
    },
    category: "Graduate Students",
  },
  {
    name: "Ananth Sriram",
    email: "email@umd.edu",
    phone: "(XXX) XXX-XXXX",
    education: {
      bsc: "University of Maryland (In Progress)",
    },
    links: {
      linkedin: "https://www.linkedin.com/...",
    },
    category: "Undergraduate Students",
  },
  {
    name: "Shreeya Venkatesh Babu",
    email: "email@umd.edu",
    phone: "(XXX) XXX-XXXX",
    education: {
      bsc: "University of Maryland (In Progress)",
    },
    links: {
      linkedin: "https://www.linkedin.com/...",
    },
    category: "Undergraduate Students",
  },
  {
    name: "Shivam Sehgal",
    email: "email@example.com",
    phone: "(XXX) XXX-XXXX",
    education: {
      bsc: "Institution",
      msc: "Institution",
      phd: "Institution",
    },
    links: {
      linkedin: "https://www.linkedin.com/...",
    },
    category: "Alumni",
  },
];

function TeamMemberCard({ member }: { member: TeamMember }) {
  // Get initials from name
  const getInitials = (name: string) => {
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl shadow-lg border border-blue-100/50 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 h-full flex flex-col">
      {/* Profile Picture - Circular Style */}
      <div className="flex items-center justify-center pt-8 sm:pt-10 pb-4 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
        {member.profileImage ? (
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-white">
            <Image
              src={member.profileImage}
              alt={member.name}
              fill
              className="object-cover"
              style={{ objectPosition: 'center' }}
              unoptimized
            />
          </div>
        ) : (
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-100 via-blue-50 to-gray-100 flex items-center justify-center shadow-lg border-4 border-white">
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-400 drop-shadow-sm">{getInitials(member.name)}</span>
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        {/* Name */}
        <div className="text-center mb-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 break-words mb-2">{member.name}</h3>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

      {/* Contact Information */}
      <div className="mb-6 text-lg sm:text-xl flex-1">
        <div className="bg-white/60 rounded-lg p-3 shadow-sm">
          <p className="text-gray-700 mb-2">
            <span className="font-semibold text-blue-900">Email:</span>{" "}
            <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
              {member.email}
            </a>
          </p>
          {member.phone && (
            <p className="text-gray-700">
              <span className="font-semibold text-blue-900">Phone:</span>{" "}
              <a href={`tel:${member.phone}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                {member.phone}
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Education Background */}
      <div className="mb-6 flex-1">
        <h4 className="font-bold text-gray-900 mb-3 text-lg sm:text-xl flex items-center">
          <span className="w-1 h-5 bg-blue-600 mr-2 rounded-full"></span>
          Education
        </h4>
        <ul className="text-base sm:text-lg text-gray-700 space-y-2">
          {member.education.phd && (
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 mt-1">•</span>
              <span><span className="font-semibold text-gray-900">Ph.D.:</span> {member.education.phd}</span>
            </li>
          )}
          {member.education.msc && (
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 mt-1">•</span>
              <span><span className="font-semibold text-gray-900">M.Sc.:</span> {member.education.msc}</span>
            </li>
          )}
          {member.education.mtech && (
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 mt-1">•</span>
              <span><span className="font-semibold text-gray-900">M.Tech:</span> {member.education.mtech}</span>
            </li>
          )}
          {member.education.bsc && (
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 mt-1">•</span>
              <span>
                <span className="font-semibold text-gray-900">
                  {member.name === "Dr. Hemendra Kumar" ? "B.Tech.:" : "B.Sc.:"}
                </span> {member.education.bsc}
              </span>
            </li>
          )}
        </ul>
      </div>

      {/* Social Links */}
      {member.links && (
        <div className="flex flex-wrap gap-2 justify-center pt-4 border-t border-blue-100">
          {member.links.website && (
            <a
              href={member.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium hover:bg-purple-700 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Website
            </a>
          )}
          {member.links.googleScholar && (
            <a
              href={member.links.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-full text-base font-medium hover:bg-blue-700 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Google Scholar
            </a>
          )}
          {member.links.researchGate && (
            <a
              href={member.links.researchGate}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white rounded-full text-base font-medium hover:bg-green-700 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              ResearchGate
            </a>
          )}
          {member.links.linkedin && (
            <a
              href={member.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
          )}
          {member.links.youtube && (
            <a
              href={member.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-red-600 text-white rounded-full text-base font-medium hover:bg-red-700 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              YouTube
            </a>
          )}
        </div>
      )}
      </div>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Principal Investigator */}
        {pi.length > 0 && (
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 mb-4 sm:mb-6">Principal Investigator (PI)</h2>
            <div className="grid grid-cols-1 gap-6 sm:gap-8">
              {pi.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Postdoctoral Research Associates */}
        {postdocs.length > 0 && (
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 mb-4 sm:mb-6">Postdoctoral Research Associates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {postdocs.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Graduate Students */}
        {gradStudents.length > 0 && (
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 mb-4 sm:mb-6">Graduate Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {gradStudents.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Undergraduate Students */}
        {undergradStudents.length > 0 && (
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 mb-4 sm:mb-6">Undergraduate Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {undergradStudents.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Alumni */}
        {alumni.length > 0 && (
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 mb-4 sm:mb-6">Alumni</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {alumni.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Join Our Lab */}
        <div className="mb-8 sm:mb-12 mt-12 sm:mt-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 mb-4 sm:mb-6">Join Our Lab</h2>
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Be a part of the cutting-edge innovations happening at the Precision Ag Lab! We're seeking enthusiastic and committed individuals - volunteers, undergraduate students, visiting scholars, interns, and graduate students - to join our dynamic team.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Take this opportunity to contribute, learn, and grow with us. Contact Dr. Hemendra Kumar at{" "}
              <a href="mailto:hemendra@umd.edu?subject=Opportunities-title" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                hemendra@umd.edu
              </a>
              , utilizing the subject line <strong>Opportunities-title</strong>, and embark on an exciting journey to influence the realm of precision agriculture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
