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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 text-center mb-6 sm:mb-8">
          Precision Agriculture Lab
        </h1>

        {/* ABOUT US and Profile in parallel */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Left side - ABOUT US Section */}
          <div className="flex-1">
            <div className="bg-blue-50 rounded-lg p-4 sm:p-6 shadow-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3 sm:mb-4 text-center">ABOUT US</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                <strong>The Precision Agriculture Lab (PAL)</strong> is dedicated to advancing innovative, data-driven solutions for sustainable and efficient agricultural practices. The lab focuses on integrating cutting-edge technologies such as remote sensing, Geographic Information Systems (GIS), Internet of Things (IoT), and artificial intelligence to optimize crop production systems. The research emphasizes site-specific management strategies that enhance productivity while minimizing environmental impacts. By bridging the gap between field-level challenges and technological innovations, the lab contributes to the development of smart farming systems tailored to diverse agro-ecological and hydrological conditions. The lab integrates a comprehensive field-lab-modeling framework, enabling a holistic understanding of soil-water-plant dynamics under variable climatic and management conditions. By combining field experiments, laboratory analysis, and process-based modeling, the lab supports the development of precision strategies that address real-world challenges in water and nutrient management, contributing to resilient and climate-smart agriculture.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                <strong>Dr. Kumar</strong> is an expert in developing water-smart irrigation solutions for site-specific precision water management issues in changing weather regimes. He has pioneered innovative methods for precision irrigation, accurately estimating water stress conditions during critical crop growth stages using field-collected data (Machine Learning) and physical models (HYDRUS and SWAT) to inform decision-making. Additionally, Dr. Kumar has devised a novel method for optimizing management zones based field capacity to determine accurate irrigation thresholds and amounts, ensuring the upper water holding capacity of the soils. This approach underscores the necessity of variable rate irrigation as a resilient solution, addressing the challenges of water scarcity during growing seasons. Please reach out at <a href="mailto:hemendra@umd.edu" className="text-blue-600 hover:underline">hemendra@umd.edu</a> to discuss the ideas.
              </p>
            </div>
          </div>

          {/* Right side - Profile picture and contact info */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-gray-100 rounded-lg p-4 sm:p-6">
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
                  <h3 className="text-lg font-semibold text-blue-900">OFFICE</h3>
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
              To deliver advanced, science-based, technology-driven solutions that improve productivity, reduce environmental impacts, and support long-term agricultural resilience under varying climatic and management conditions through site-specific strategies. By integrating remote sensing, GIS, IoT, and AI within a robust field-lab-modeling framework, the lab empowers producers, researchers, and decision-makers to improve productivity, resource efficiency, and environmental sustainability across diverse agricultural systems.
            </p>
          </div>

          <div className="bg-amber-50 rounded-lg p-6 sm:p-8 shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-3 sm:mb-4">Vision</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              To set the benchmark for precision agriculture by designing and implementing adaptable, high-impact solutions that directly address real-world challenges in crop production. The lab strives to lead in developing smart, scalable farming systems grounded in rigorous field research, advanced analytics, and cross-disciplinary innovation. PAL aims to set new standards in agricultural innovation by translating complex field-lab-modeling insights into real-world impact for farmers, researchers, and policymakers working toward resilient, efficient, and climate-adaptive agriculture.
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
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-tight">Precision Technologies for Digital Agriculture: Harnessing IoT, Big Data, Crop Modeling, and Al for Agricultural Production</h3>
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
