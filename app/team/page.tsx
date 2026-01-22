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
    twitter?: string;
    x?: string;
    github?: string;
  };
  category: "PI" | "Postdoctoral Research Associate" | "Graduate Students" | "Undergraduate Students" | "Former Lab Members";
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
      x: "https://x.com/username",
    },
    category: "PI",
  },
  {
    name: "Fitsum Teshome, Ph.D.",
    profileImage: "/profile%20pictures/headshotfitsum.jpeg",
    email: "fteshome@umd.edu",
    phone: "(301) 314-6301",
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
      x: "https://x.com/username",
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
      x: "https://x.com/username",
    },
    category: "Postdoctoral Research Associate",
  },
  {
    name: "Abubakar Siddiq Palli (\"Abubakar\")",
    profileImage: "/profile%20pictures/Abubakarheadshot.png",
    email: "absiddiq@umd.edu",
    phone: "240-481-3766",
    education: {
      msc: "Masters in Robotics,University of Maryland",
    },
    links: {
      linkedin: "https://www.linkedin.com/in/absiddiq1",
      github: "https://github.com/abubakar1107",
      website:"https://portfolio-website-jet-six-44.vercel.app",
    },
    category: "Graduate Students",
  },
  {
    name: "Ananth Sriram",
    profileImage: "/profile%20pictures/Ananthheadshot.jpeg",
    email: "asriram2@terpmail.umd.edu",
    education: {
      bsc: "Computer Science (Machine Learning Track),University of Maryland (In Progress)",
    },
    links: {
      linkedin: "https://www.linkedin.com/in/ananthsriram1/",
      github: "https://ananthsriram1.github.io/",
    },
    category: "Undergraduate Students",
  },
  {
    name: "Sri Chandraja Reddy Allala (\"Sri Allala\")",
    profileImage: "/profile%20pictures/SriAllalaheadshot.jpeg",
    email: "ascj@umd.edu",
    education: {
      bsc: "Electronics and Communication Engineering",
      msc: "Telecommunications Engineering, University Maryland (In Progress)",
    },
    links: {
      linkedin: "www.linkedin.com/in/srichandrajareddyallala",
    },
    category: "Graduate Students",
  },
  {
    name: "Nathaniel Chen",
    email: "nchen118@terpmail.umd.edu",
    education: {
      bsc: "Electronics and Communication Engineering, University of Maryland (In Progress)",
    },
    links: {
      linkedin: "www.linkedin.com/in/nathaniel-chen-410198336",
    },
    category: "Undergraduate Students",
  },
  {
    name: "Kaustubh Shah",
    profileImage: "/profile%20pictures/Kaustubhheadshot.JPG",
    email: "kshah115@umd.edu",
    education: {
      bsc: "Electronics and Communication Engineering, Motilal Nehru National Institute Of Technology (MNNIT)",
      msc: "Applied Machine Learning, University of Maryland (In Progress) ",
    },
    links: {
      linkedin: "https://www.linkedin.com/in/kaustubh-shah",
      github: "https://sites.google.com/view/kaustubh-shah/",
    },
    category: "Graduate Students",
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
        <div className="flex flex-wrap gap-3 justify-center pt-4 border-t border-blue-100">
          {member.links.website && (
            <a
              href={member.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-full hover:bg-purple-700 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              title="Website"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </a>
          )}
          {member.links.googleScholar && (
            <a
              href={member.links.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              title="Google Scholar"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
              </svg>
            </a>
          )}
          {member.links.researchGate && (
            <a
              href={member.links.researchGate}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              title="ResearchGate"
            >
              <Image
                src="/profile%20pictures/ResearchGate_icon_SVG.svg.png"
                alt="ResearchGate"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
                unoptimized
              />
            </a>
          )}
          {member.links.linkedin && (
            <a
              href={member.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          )}
          {member.links.youtube && (
            <a
              href={member.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-700 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              title="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          )}
          {member.links.x && (
            <a
              href={member.links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              title="X"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          )}
          {member.links.github && (
            <a
              href={member.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-900 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              title="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
          {member.links.twitter && (
            <a
              href={member.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-sky-500 text-white rounded-full hover:bg-sky-600 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              title="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
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
  const formerMembers = teamMembers.filter((m) => m.category === "Former Lab Members");

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

        {/* Former Lab Members */}
        {formerMembers.length > 0 && (
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 mb-4 sm:mb-6">Former Lab Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {formerMembers.map((member) => (
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
