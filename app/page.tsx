"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isEducationExpanded, setIsEducationExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOfficeExpanded, setIsOfficeExpanded] = useState(false);
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Lab Name Heading - Centered */}
        <div className="relative mb-4 sm:mb-6 py-4 sm:py-6 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 animate-gradient bg-[length:200%_200%] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-green-400 via-blue-300 to-green-400 animate-gradient bg-[length:200%_200%] opacity-10" style={{ animationDelay: '1.5s' }}></div>
          <h1 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 bg-clip-text text-transparent">
            Digital and Precision Agriculture Lab
          </h1>
        </div>

        {/* AI & Digital Intelligence – Lab Focus */}
        <div className="relative mb-6 sm:mb-8 overflow-hidden rounded-2xl border border-violet-200/60 bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-50 shadow-lg">
          <div className="absolute top-0 right-0 w-40 h-40 bg-violet-400/20 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-400/20 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative px-4 sm:px-6 py-5 sm:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-violet-600">Where AI Meets the Field</p>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">AI &amp; Digital Intelligence at the Heart of Our Research</h2>
                </div>
              </div>
              <a
                href="/research-projects"
                className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm shadow-md hover:from-violet-500 hover:to-indigo-500 transition-all"
              >
                Explore AI Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
            <div className="mt-4 pt-4 border-t border-violet-200/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-violet-500" />
                <span><strong className="text-gray-900">AI &amp; ML for irrigation</strong> — Prescriptive water use from soil and weather data</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-violet-500" />
                <span><strong className="text-gray-900">Deep learning &amp; drones</strong> — Stress mapping, LAI, and stand assessment</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-violet-500" />
                <span><strong className="text-gray-900">Big data &amp; decision tools</strong> — From field sensors to farmer-facing apps</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-violet-500" />
                <span><strong className="text-gray-900">IoT, GIS &amp; digital ag</strong> — Site-specific and climate-smart management</span>
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT US and Profile in parallel */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Left side - ABOUT US Section */}
          <div className="flex-1">
            <div className="bg-blue-50 rounded-lg p-4 sm:p-6 shadow-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3 sm:mb-4 text-center">ABOUT US</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                <strong>Digital and Precision Agriculture Lab (D-PAL)</strong> is an AI-first research group dedicated to advancing innovative, data-driven solutions for sustainable and efficient agricultural practices. We integrate artificial intelligence, machine learning, remote sensing, GIS, and IoT to build decision support tools and precision strategies that optimize crop production systems. The research emphasizes site-specific management strategies that enhance productivity while minimizing environmental impacts. By bridging the gap between field-level challenges and technological innovations, the lab contributes to the development of smart farming systems tailored to diverse agro-ecological and hydrological conditions. The lab integrates a comprehensive field-lab-modeling framework, enabling a holistic understanding of soil-water-plant dynamics under variable climatic and management conditions. By combining field experiments, laboratory analysis, and process-based modeling, the lab supports the development of precision strategies that address real-world challenges in water and nutrient management, contributing to resilient and climate-smart agriculture.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                <strong>Dr. Kumar</strong> is an expert in developing AI- and data-driven, water-smart irrigation solutions for site-specific precision water management in changing weather regimes. He has pioneered methods that use machine learning on field and remote-sensing data, together with physical models (HYDRUS and SWAT), to estimate water stress and optimize irrigation decisions during critical crop growth stages. Additionally, Dr. Kumar has devised a novel method for optimizing management zones based field capacity to determine accurate irrigation thresholds and amounts, ensuring the upper water holding capacity of the soils. This approach underscores the necessity of variable rate irrigation as a resilient solution, addressing the challenges of water scarcity during growing seasons. Please reach out at <a href="mailto:hemendra@umd.edu" className="text-blue-600 hover:underline">hemendra@umd.edu</a> to discuss the ideas.
              </p>
            </div>
          </div>

          {/* Right side - Profile picture and contact info */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-gray-100 rounded-lg p-4 sm:p-6 max-h-[800px] overflow-y-auto">
              <div className="mb-6">
                <Image
                  src="/profile%20pictures/HK_Headshot.jpeg"
                  alt="Hemendra Kumar"
                  width={300}
                  height={300}
                  className="rounded-lg w-full h-auto"
                  unoptimized
                />
              </div>
              <div className="text-gray-900">
                <h3 className="text-xl font-bold mb-0">Hemendra Kumar, Ph.D.</h3>
                <p className="text-gray-700 font-medium mb-0">Precision Agriculture Specialist</p>
                <p className="text-sm text-gray-700 mb-0">University of Maryland College Park</p>
                <div className="text-sm text-gray-700 space-y-2 mt-4">
                  <div className="mt-4 space-y-1">
                    <p>
                      <a href="https://agnr.umd.edu/about/directory/hemendra-kumar/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Website</a>
                      {" | "}
                      <a href="https://scholar.google.com/citations?user=ym2vnxoAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Scholar</a>
                      {" | "}
                      <a href="https://www.linkedin.com/in/hemendra-kumar-pa/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mt-4 pt-4 border-t border-gray-300">
                <button
                  onClick={() => setIsEducationExpanded(!isEducationExpanded)}
                  className="flex items-center justify-between w-full text-left mb-4"
                >
                  <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                  <svg
                    className={`w-5 h-5 text-gray-600 transition-transform ${isEducationExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isEducationExpanded && (
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li>Ph.D.: Major- Biosystems Engineering, Auburn University; Minor- Statistics, Auburn University</li>
                    <li>M.Sc.: Civil and Environmental Engineering, Auburn University</li>
                    <li>M.Tech- Hydrology, Indian Institute of Technology (IIT) Roorkee and University of Stuttgart</li>
                    <li>B.Sc.: B.Tech- Agricultural Engineering, Punjab Agricultural University</li>
                  </ul>
                )}
              </div>

              {/* Professional Experience */}
              <div className="mt-4 pt-4 border-t border-gray-300">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center justify-between w-full text-left mb-4"
                >
                  <h3 className="text-lg font-semibold text-gray-900">Professional Experience</h3>
                  <svg
                    className={`w-5 h-5 text-gray-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isExpanded && (
                  <ul className="text-sm text-gray-700 space-y-3 list-disc list-inside">
                    <li>Affiliate Faculty - Department of Environmental Science and Technology</li>
                    <li>Precision Agriculture Specialist (Faculty Rank- Assistant Professor) - University of Maryland</li>
                    <li>Postdoctoral Scholar - The Ohio State University, Wooster Ohio</li>
                    <li>Postdoctoral Scholar - USDA ARS Application Technology Research Unit (ATRU), Wooster Ohio</li>
                  </ul>
                )}
              </div>

              {/* Office */}
              <div className="mt-4 pt-4 border-t border-gray-300">
                <button
                  onClick={() => setIsOfficeExpanded(!isOfficeExpanded)}
                  className="flex items-center justify-between w-full text-left mb-4"
                >
                  <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                  <svg
                    className={`w-5 h-5 text-gray-600 transition-transform ${isOfficeExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOfficeExpanded && (
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Central Maryland Research and Education Center, 2005 Largo Road Upper Marlboro, MD 20774-8508.<br />
                    Email: <a href="mailto:hemendra@umd.edu" className="text-blue-600 hover:underline">hemendra@umd.edu</a><br />
                    Phone (Office): (301) 226-7405
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mission/Vision */}
        <div className="mb-8 sm:mb-12 space-y-6 sm:space-y-8">
          <div className="bg-green-50 rounded-lg p-6 sm:p-8 shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-3 sm:mb-4">Mission</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              To deliver AI-powered, science-based solutions that improve productivity, reduce environmental impacts, and support long-term agricultural resilience through site-specific strategies. We integrate machine learning, remote sensing, GIS, and IoT within a robust field–lab–modeling framework to empower producers, researchers, and decision-makers with precision tools for resource efficiency and environmental sustainability.
            </p>
          </div>

          <div className="bg-amber-50 rounded-lg p-6 sm:p-8 shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-3 sm:mb-4">Vision</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              To set the benchmark for AI-driven precision agriculture by designing adaptable, high-impact solutions for real-world crop production challenges. The lab aims to lead in smart, scalable farming systems that combine rigorous field research with advanced analytics and ML. We translate field–lab–modeling insights into tools and strategies for resilient, efficient, and climate-adaptive agriculture.
            </p>
          </div>
        </div>

        {/* Our Latest Edited Books - Full Width */}
        <div className="mt-6 sm:mt-10 mb-6 sm:mb-8 bg-gray-100 rounded-lg p-4 sm:p-6 md:p-8 w-full">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-4 sm:mb-6">Our Latest Edited Books</h2>
          <div className="flex justify-center">
            {/* Book 1 */}
            <div className="bg-white rounded-lg p-6 sm:p-8 hover:shadow-xl transition-shadow max-w-lg w-full">
              <a href="#" target="_blank" rel="noopener noreferrer" className="block group">
                <Image
                  src="/profile%20pictures/Book%20cover.png"
                  alt="Precision Technologies for Digital Agriculture"
                  width={300}
                  height={450}
                  className="rounded-lg w-full max-w-[280px] sm:max-w-[320px] h-auto mx-auto group-hover:scale-105 transition-transform mb-6"
                  unoptimized
                />
              </a>
              <div className="text-center space-y-3">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-tight">Precision Technologies for Digital Agriculture: Harnessing IoT, Big Data, Crop Modeling, and AI for Agricultural Production</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  <span className="font-medium">Edited by:</span> Sushil Kumar Himanshu, Hemendra Kumar, Pankaj Kumar Gupta, Santosh Subash Palmate
                </p>
                <p className="text-base sm:text-lg text-gray-700">
                  <span className="font-medium">Publisher:</span> Elsevier, Amsterdam, Netherlands
                </p>
                <p className="text-base sm:text-lg text-gray-700">
                  <span className="font-medium">ISBN:</span> 9780443405136 (In Press)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
