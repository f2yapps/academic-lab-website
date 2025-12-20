"use client";

import Image from "next/image";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  fundingAgency: string;
  totalFunding?: string;
  placeOfImplementation: string;
  projectPageUrl?: string;
  images: string[];
}

// Project data - Update this with actual project information
const projects: Project[] = [
  {
    id: "1",
    title: "Develop the database of soil hydraulic properties for precision irrigation management in Maryland",
    description: "Creating a comprehensive database of soil hydraulic properties specific to Maryland soils to support precision irrigation management practices and improve water-use efficiency in agricultural systems.",
    fundingAgency: "TBD",
    totalFunding: "TBD",
    placeOfImplementation: "Maryland, USA",
    projectPageUrl: "#",
    images: ["/banners/banner1.png", "/banners/banner2.png"],
  },
  {
    id: "2",
    title: "Quantifying actual nutrient load reduction in drainage structures",
    description: "Research project focused on measuring and quantifying the actual reduction of nutrient loads in agricultural drainage structures to improve water quality and reduce environmental impact.",
    fundingAgency: "Harry R. Hughes Center for Agro-Ecology (2024-2026)",
    totalFunding: "TBD",
    placeOfImplementation: "Maryland, USA",
    projectPageUrl: "#",
    images: ["/banners/banner3.png", "/banners/banner5.png"],
  },
  {
    id: "3",
    title: "Precision Horticulture using Unpiloted Aerial Vehicles as part of an Integrated Plant Management Approach for Ornamental Nurseries",
    description: "Development and implementation of precision horticulture techniques utilizing unpiloted aerial vehicles (UAVs) as part of an integrated plant management system for ornamental nursery operations, enhancing monitoring, decision-making, and resource optimization.",
    fundingAgency: "NIFA (2024-2025)",
    totalFunding: "TBD",
    placeOfImplementation: "Maryland, USA",
    projectPageUrl: "#",
    images: ["/banners/banner6.png", "/banners/banner1.png"],
  },
  {
    id: "4",
    title: "Drought risk reduction through automated drainage water management",
    description: "Investigating and implementing automated drainage water management systems to reduce drought risks by optimizing water table control and improving water availability during critical growing periods.",
    fundingAgency: "Nationwide AgTech (2023-2024)",
    totalFunding: "TBD",
    placeOfImplementation: "Maryland, USA",
    projectPageUrl: "#",
    images: ["/banners/banner2.png", "/banners/banner3.png"],
  },
  {
    id: "5",
    title: "AI-Enabled Precision Irrigation Decision Support App",
    description: "Our lab is developing an AI-based irrigation decision tool designed to help farmers apply the optimal amount of water to their fields. This approach reduces water and nutrient usage, ultimately improving agricultural productivity while minimizing environmental contamination caused by runoff and nutrient leaching.",
    fundingAgency: "TBD",
    totalFunding: "TBD",
    placeOfImplementation: "Maryland, USA",
    projectPageUrl: "#",
    images: ["/banners/banner5.png", "/banners/banner6.png"],
  },
];

export default function Page() {
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  const toggleProject = (projectId: string) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedProjects(newExpanded);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Ongoing Research Projects */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-6 sm:mb-10">Ongoing Research Projects</h1>
        <div className="space-y-4">
          {projects.map((project) => {
            const isExpanded = expandedProjects.has(project.id);
            return (
              <div key={project.id} className="bg-white rounded-lg shadow-md border border-gray-200">
                {/* Project Header */}
                <button
                  onClick={() => toggleProject(project.id)}
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 pr-2 sm:pr-4 break-words">{project.title}</h2>
                  <svg
                    className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
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

                {/* Collapsible Content */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{project.description}</p>

                    {/* Project Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">Funding Agency: </span>
                        <span className="text-gray-700">{project.fundingAgency}</span>
                      </div>
                      {project.totalFunding && (
                        <div>
                          <span className="font-semibold text-gray-900">Total Funding: </span>
                          <span className="text-gray-700">{project.totalFunding}</span>
                        </div>
                      )}
                      <div>
                        <span className="font-semibold text-gray-900">Place of Implementation: </span>
                        <span className="text-gray-700">{project.placeOfImplementation}</span>
                      </div>
                    </div>

                    {/* Project Images */}
                    {project.images && project.images.length > 0 && (
                      <div className="mt-4 sm:mt-6">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Project Images</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {project.images.map((image, idx) => (
                            <div key={idx} className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                              <Image
                                src={image}
                                alt={`${project.title} - Image ${idx + 1}`}
                                fill
                                className="object-cover"
                                unoptimized
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Project Page Link */}
                    {project.projectPageUrl && (
                      <div className="pt-4 border-t border-gray-200">
                        <a
                          href={project.projectPageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                        >
                          View Project Page
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Thematic Research Areas */}
        <div className="mb-8 sm:mb-12 mt-12 sm:mt-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-6 sm:mb-10">Thematic Research Areas</h1>
          <div className="space-y-4 sm:space-y-6">
            {/* Group 1: Irrigation and Water Management */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Irrigation and Water Management</h3>
              <ul className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-2 list-disc list-inside ml-2 sm:ml-4">
                <li><strong>Climate- Water- and Field-Smart Irrigation Strategies</strong> - Design of adaptive irrigation solutions that respond to climate variability, soil heterogeneity, and crop water demands.</li>
                <li><strong>Controlled and Automated Drainage Water Management</strong> - Innovation in drainage systems to optimize water table control and minimize nutrient losses under variable field conditions.</li>
                <li><strong>Optimization of Irrigation Water Management</strong> - Strategies to improve water-use efficiency and scheduling through system-level evaluation and technology integration.</li>
                <li><strong>Variable Rate Irrigation (VRI) Management</strong> - Design and application of VRI systems for spatially targeted water delivery based on real-time field data.</li>
              </ul>
            </div>

            {/* Group 2: Digital Agriculture and Smart Technologies */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Digital Agriculture and Smart Technologies</h3>
              <ul className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-2 list-disc list-inside ml-2 sm:ml-4">
                <li><strong>Digital Agriculture and Smart Farming Technologies</strong> - Development and implementation of integrated digital tools to enhance decision-making and farm management efficiency.</li>
                <li><strong>Remote Sensing, IoT, and GIS Applications in Crop Production</strong> - Use of spatial and sensor-based technologies for monitoring crop health, soil moisture, and field variability.</li>
                <li><strong>AI-Driven Agricultural Intelligence and Big Data Applications</strong> - Application of advanced data science methods to analyze large-scale datasets for predictive modeling and precision decision support.</li>
              </ul>
            </div>

            {/* Group 3: Modeling and Soil Science */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Modeling and Soil Science</h3>
              <ul className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-2 list-disc list-inside ml-2 sm:ml-4">
                <li><strong>Developing and Optimizing Soil Hydraulic Properties (SHPs) to Improve Crop and Hydrologic Modeling</strong> - Advancing methods to accurately characterize and parameterize soil hydraulic properties, enabling more reliable simulations of soil-water dynamics and improving the predictive accuracy of the models.</li>
                <li><strong>Crop Modeling Integrated with Lab and Field Measurements</strong> - Development and calibration of process-based models using empirical data to simulate crop growth and soil-water interactions.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
