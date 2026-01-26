"use client";

import { useState } from "react";

export default function Page() {
  const [activeWindow, setActiveWindow] = useState<'advising' | 'publication'>('publication');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Publications and Services
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveWindow('publication')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              activeWindow === 'publication'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
            }`}
          >
            Research Project and Publication
          </button>
          <button
            onClick={() => setActiveWindow('advising')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              activeWindow === 'advising'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
            }`}
          >
            Advising and Services
          </button>
        </div>
        
        {/* Full Page Layout */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {/* First Window: Research Project and Publication */}
          {activeWindow === 'publication' && (
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-4"></div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Research Project and Publication</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Sponsored Research and Programs */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Sponsored Research and Programs</h3>
                    <ul className="space-y-3 pl-4">
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. & Jarboe, D. (2025). Irrigation Water Management. USDA NRCS. (PI; $1,437,526; three years).
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2025). Optimizing Precision Irrigation Management for the Soybean Crop in Maryland. Maryland Soybean Board. (PI; $31,147; one year).
                      </li>
                    </ul>
                  </div>

                  {/* Research Articles */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Research Articles</h3>
                    <ul className="space-y-3 pl-4">
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Fleuridor, L., Haden, V.R., Chiavegato, M., Jackson-Smith, D., & Lyon, S. (2025). Soil and water impacts around re-introduction of manure into farming systems. <em className="text-gray-900 font-semibold">Agrosystems, Geosciences & Environment</em>.{" "}
                        <a href="https://doi.org/10.1002/agg2.70264" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          DOI
                        </a>
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Palli, A*. & Kumar, H. (2024). Integration of Smart Drones and AI into Agriculture – A Review. <em className="text-gray-900 font-semibold">Journal of NACAA</em>, 17.{" "}
                        <a href="https://www.nacaa.com/journal/ebacfa77-5d94-44c8-ada3-8d891a3cef28" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          View Article
                        </a>
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Takhellambam, B. S., Srivastava, P., Lamba, J., Zhao, W., Kumar, H., Tian, D., & Molinari, R. (2024). Artificial neural network-empowered projected future rainfall intensity-duration-frequency curves under changing climate. <em className="text-gray-900 font-semibold">Atmospheric Research</em>, 297, 107122.{" "}
                        <a href="https://doi.org/10.1016/j.atmosres.2023.107122" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          DOI
                        </a>
                        <span className="text-sm text-gray-500 ml-2">9 citations</span>
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Miller, S. A., & Lyon, S. W. (2023). Assessing nutrient concentrations and field-scale seepage load under an automated drainage water management system in Ohio. <em className="text-gray-900 font-semibold">Smart Agricultural Technology</em>, 6, 100328.{" "}
                        <a href="https://doi.org/10.1016/j.atech.2023.100328" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          DOI
                        </a>
                        <span className="text-sm text-gray-500 ml-2">1 citation</span>
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Srivastava, P., Lamba, J., Lena, B., Diamantopoulos, E., Ortiz, B., Takhellambam, B. S., Morata, G., & Bondesan, L. (2023). A methodology to optimize site-specific field capacity and irrigation thresholds. <em className="text-gray-900 font-semibold">Agricultural Water Management</em>, 286, 108385.{" "}
                        <a href="https://doi.org/10.1016/j.agwat.2023.108385" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          DOI
                        </a>
                        <span className="text-sm text-gray-500 ml-2">9 citations</span>
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Takhellambam, B. S., Srivastava, P., Lamba, J., McGehee, R. P., Kumar, H., & Tian, D. (2023). Projected mid-century rainfall erosivity under climate change over the southeastern United States. <em className="text-gray-900 font-semibold">Science of The Total Environment</em>, 865, 161119.{" "}
                        <a href="https://doi.org/10.1016/j.scitotenv.2022.161119" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          DOI
                        </a>
                        <span className="text-sm text-gray-500 ml-2">19 citations</span>
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Srivastava, P., Lamba, J., Diamantopoulos, E., Ortiz, B., Morata, G., Takhellambam, B. S., & Bondesan, L. (2022). Site-specific irrigation scheduling using one-layer soil hydraulic properties and inverse modeling. <em className="text-gray-900 font-semibold">Agricultural Water Management</em>, 273, 107877.{" "}
                        <a href="https://doi.org/10.1016/j.agwat.2022.107877" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          DOI
                        </a>
                        <span className="text-sm text-gray-500 ml-2">22 citations</span>
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Srivastava, P., Lamba, J., Ortiz, B. V., Way, T. R., Sangha, L., Takhellambam, B. S., Morata, G., & Molinari, R. (2022). Within-field variability in nutrients for site-specific agricultural management in irrigated cornfield. <em className="text-gray-900 font-semibold">Journal of the ASABE</em>, 65(4), 865-880.{" "}
                        <a href="https://doi.org/10.13031/ja.15042" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          DOI
                        </a>
                        <span className="text-sm text-gray-500 ml-2">15 citations</span>
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Takhellambam, B. S., Srivastava, P., Lamba, J., McGehee, R. P., Kumar, H., & Tian, D. (2022). Temporal disaggregation of hourly precipitation under changing climate over the Southeast United States. <em className="text-gray-900 font-semibold">Scientific Data</em>, 9(1), 211.{" "}
                        <a href="https://doi.org/10.1038/s41597-022-01304-7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          DOI
                        </a>
                        <span className="text-sm text-gray-500 ml-2">23 citations</span>
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Lena, B. P., Bondesan, L., Pinheiro, E. A. R., Ortiz, B. V., Morata, G. T., & Kumar, H. (2022). Determination of irrigation scheduling thresholds based on HYDRUS-1D simulations of field capacity for multilayered agronomic soils in Alabama, USA. <em className="text-gray-900 font-semibold">Agricultural Water Management</em>, 259, 107234.{" "}
                        <a href="https://doi.org/10.1016/j.agwat.2021.107234" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          DOI
                        </a>
                        <span className="text-sm text-gray-500 ml-2">22 citations</span>
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Srivastava, P., Ortiz, B. V., Morata, G., Takhellambam, B. S., Lamba, J., & Bondesan, L. (2021). Field-scale spatial and temporal soil water variability in irrigated croplands. <em className="text-gray-900 font-semibold">Transactions of the ASABE</em>, 64(4), 1277-1294.{" "}
                        <a href="https://doi.org/10.13031/trans.14335" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          DOI
                        </a>
                        <span className="text-sm text-gray-500 ml-2">18 citations</span>
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Ridolfi, E., Kumar, H., & Bárdossy, A. (2020). A methodology to estimate flow duration curves at partially ungauged basins. <em className="text-gray-900 font-semibold">Hydrology and Earth System Sciences</em>, 24(4), 2043-2060.{" "}
                        <a href="https://doi.org/10.5194/hess-24-2043-2020" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          DOI
                        </a>
                        <span className="text-sm text-gray-500 ml-2">42 citations</span>
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Sangha, L., Lamba, J., & Kumar, H. (2020). Effect of ENSO-based upstream water withdrawals for irrigation on downstream water withdrawals. <em className="text-gray-900 font-semibold">Hydrology Research</em>, 51(4), 602-620.{" "}
                        <a href="https://doi.org/10.2166/nh.2020.156" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          DOI
                        </a>
                        <span className="text-sm text-gray-500 ml-2">5 citations</span>
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Sangha, L., Lamba, J., Kumar, H., Srivastava, P., Dougherty, M., & Prasad, R. (2020). An innovative approach to rainwater harvesting for irrigation based on El Niño Southern Oscillation forecasts. <em className="text-gray-900 font-semibold">Journal of Soil and Water Conservation</em>, 75(5), 565-578.{" "}
                        <a href="https://doi.org/10.2489/jswc.2020.00085" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          DOI
                        </a>
                        <span className="text-sm text-gray-500 ml-2">9 citations</span>
                      </li>
                    </ul>
                  </div>

                  {/* Book Chapters */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Book Chapters</h3>
                    <ul className="space-y-3 pl-4">
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Palli, A.*, Sater, H., & Kumar, H. (accepted). Optimizing UAV spray application for pesticide deposition in watermelon production systems in the Mid-Atlantic. <em className="text-gray-900 font-semibold">Precision Technologies for Digital Agriculture: Harnessing IoT, Big Data, Crop Modeling, and AI for Agricultural Production</em>. Elsevier.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Singh, R*. & Kumar, H. (accepted). Next-Gen Data-Driven Precision Irrigation: Application of Artificial Intelligence with In-Situ and Remote Sensing Measurements for Management Zones and VRI Technologies. <em className="text-gray-900 font-semibold">Precision Technologies for digital agriculture: Harnessing IoT, big data, crop modeling, and AI for agricultural production</em>. Elsevier.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Madolli, M., Gade, S., Debnath, S., Kumar, H., & Himanshu, S.K. (accepted). Urbanization, Industrialization, and Water Security: Theoretical perspective and empirical evidence. <em className="text-gray-900 font-semibold">Precision Technologies for Digital Agriculture: Harnessing IoT, Big Data, Crop Modeling, and AI for Agricultural Production</em>. Elsevier.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Williams, N., Grant, K., & Kumar, H. (accepted). Data Sharing, Privacy, and Management Strategies and Security Protocols for Smart Agricultural Systems. <em className="text-gray-900 font-semibold">Precision Technologies for digital agriculture: Harnessing IoT, big data, crop modeling, and AI for agricultural production</em>. Elsevier.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Ortiz, B.V., Srivastava, P., & Lamba, J. (2024). Assessing nutrient variability in irrigated agricultural fields using unsupervised learning and mixed models. <em className="text-gray-900 font-semibold">Advances in agri-tech approaches for nutrients and irrigation water management</em>. Taylor and Francis Group, 68-82.
                      </li>
                    </ul>
                  </div>

                  {/* Edited Book */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Edited Book</h3>
                    <ul className="space-y-3 pl-4">
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Himanshu, S.K., Kumar, H., Gupta, P.K., & Palmate, S. S. (under-review). <em className="text-gray-900 font-semibold">Precision Technologies for digital agriculture: Harnessing IoT, big data, crop modeling, and AI for agricultural production</em>. Elsevier.
                      </li>
                    </ul>
                  </div>

                  {/* Conference Presentations */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Conference Presentations</h3>
                    <ul className="space-y-2 pl-4">
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Palli, A.* & Kumar, H. (2025). Leaf Area Index (LAI) estimation using deep learning and drone imagery. Northeast Agricultural/Biological Engineering Conference (NABEC), August 3-6, 2025.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Sengar, A.* & Kumar, H. (2025). Leveraging deep learning techniques for irrigation prescription by soil matric potential analysis. Northeast Agricultural/Biological Engineering Conference (NABEC), August 3-6, 2025.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2024). Importance of in situ soil moisture measurements in irrigation scheduling? AGU Fall Meeting, December 9-13, virtual.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2024). Irrigation Scheduling using HYPROP generated and inverse soil hydraulic parameters. ASABE Annual International Meeting, July 28-31, Anaheim, California.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Srivastava, P., Lamba, J., Ortiz, B. V., Lyon, S.W., Takhellambam, B.S., Morata, G., & Bondesan., L. (2023). Integral Approach of Unsupervised Learning and Temporal Stability in Irrigation Management. ASABE Annual International Meeting, July 9-12, Omaha, Nebraska.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Miller, S., & Lyon, S.W. (2023). Field-scale implications of an automated drainage water management system in Ohio. ASABE Annual International Meeting, July 9-12, Omaha, Nebraska.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Takhellambam, B.S., Srivastava, P., Lamba, J., Zhao, W., Kumar, H., & Tian, D. (2023). Artificial Neural Network-Empowered Projected Future Rainfall Intensity-Duration-Frequency Curves Over the Southeast United States. ASABE Annual International Meeting, July 9-12, Omaha, Nebraska.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Lyon, S.W., Miller, S., & Kumar, H. (2022). Understanding and (potentially) mitigating the impacts of tile drainage. AGU Annual Fall Meeting, December 12-16, Chicago, Illinois.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Takhellambam, B.S., Srivastava, P., Lamba, J., McGehee, R., Kumar, H., & Tian, D. (2022). Projected Mid-Century Rainfall Erosivity Under Climate Change Over the Southeastern US. Alabama Water Resource Conference, September 7-9, Orange Beach, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Takhellambam, B.S., Srivastava, P., Lamba, J., Zhao, W., Kumar, H., & Tian, D. (2022). Rainfall Intensity-duration-frequency curves over Southeastern, US under climate scenarios using Artificial Neural Networks. Alabama Water Resource Conference, September 7-9, Orange Beach, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Srivastava, P., Lamba, J., Lena, B.P., Diamantopoulos, E., Ortiz, B. V., Takhellambam, B.S., & Morata, G. (2022). A methodology to optimize field capacity and irrigation thresholds using in-field soil water measurements. ASABE Annual International Meeting, July 17-21, Houston, Texas.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Srivastava, P., Lamba, J., Lena, B.P., Diamantopoulos, E., Ortiz, B. V., Takhellambam, B.S., & Morata, G. (2022). Numerical simulations of soil water and irrigation scheduling in fine-textured soils. ASABE Annual International Meeting, July 17-21, Houston, Texas.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Takhellambam, B.S., Srivastava, P., Lamba, J., McGehee, R., Kumar, H., & Tian, D. (2022). Projected rainfall erosivity under climate change in the southeastern United States. ASABE Annual International Meeting, July 17-21, Houston, Texas.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Takhellambam, B.S., Srivastava, P., Lamba, J., Zhao, W., Kumar, H., & Tian, D. (2022). Assessment of projected change in Intensity-duration-frequency (IDF) curves for Southeastern, United States using Artificial Neural Networks. ASABE Annual International Meeting, July 17-21, Houston, Texas.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Takhellambam, B.S., Srivastava, P., Lamba, J., McGehee, R., & Kumar, H. (2021). Potential changes in rainfall erosivity under climate change in southeastern United States. AGU Fall Meeting, December 13-17, New Orleans, Louisiana.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Srivastava, P., Lamba, J., Ortiz, B. V., Morata, G. & Takhellambam, B.S. (2021). Time stability in soil moisture in irrigated agricultural field. Alabama Water Resource Conference, September 7-10, Orange Beach, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Takhellambam, B.S., Srivastava, P., Lamba, J., McGehee, R., Kumar, H., & Tian, D. (2021). Effect of climate change on rainfall erosivity in Southeastern, United States. Alabama Water Resource Conference, September 7-10, Orange Beach, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Srivastava, P., Lamba, J., Ortiz, B. V., Takhellambam, B.S., & Morata, G. (2021). Soil water variability and stability in crop fields during a growing season. ASABE Annual International Meeting, July 12-16, virtual.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Srivastava, P., Lamba, J., Ortiz, B. V., Takhellambam, B.S., Sangha, L., & Way, T.R. (2021). Phosphorus variability in the irrigated cropland during a growing season. ASABE Annual International Meeting, July 12-16, virtual.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Lena, B.P., Bondesan, L., Ortiz, B. V., Pinheiro, E.A.R., Morata, G., & Kumar, H. (2021). Evaluation of different negligible drainage flux for field capacity estimation and its implication on irrigation depth for major soil types in Alabama, USA. ASABE Annual International Meeting, July 12-16, virtual.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Takhellambam, B.S., Srivastava, P., Lamba, J., McGehee, R., Kumar, H., & Tian, D. (2021). Potential changes in rainfall erosivity under climate change in the Southeastern United States. ASABE Annual International Meeting, July 12-16, virtual.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Takhellambam, B.S., Srivastava, P., Lamba, J., McGehee, R., Kumar, H., & Tian, D. (2021). Generation of high-temporal resolution precipitation for environmental assessment under climate change scenarios over the Southeastern United States. ASABE Annual International Meeting, July 12-16, virtual.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Srivastava, P., Ortiz, B. V., Takhellambam, B.S., Morata, G., Bondesan, L., & Lamba, J. (2020). Spatiotemporal soil moisture variability in corn and cotton fields during the growing season. AGU Fall Meeting, December 1-17, virtual.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Ortiz, B. V., Morata, G., Bondesan, L., Lena, B.P., Kumar, H., Lamba, J., Srivastava, P., & Raper, T.B. (2020). Putting irrigation technology into the hands of Alabama farmers. ASA, CSSA and SSSA International Annual Meeting, November 9-13, virtual.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2020). Helping farmers to understand importance of soil moisture in irrigation. Five-minute thesis, Auburn University, October 15, virtual.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Sangha, L., Lamba, J., Kumar, H., Srivastava, P., Dougherty, M., & Prasad, R. (2019). Use of ENSO to withdraw water sustainably from the streams. ASABE Annual International Meeting, July 7-10, Boston, Massachusetts.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Srivastava, P., Sangha, L., Lamba, J., Morata, G., Bondesan, L., & Ortiz, B. V. (2019). Soil Water and Nutrient Dynamics in Cropland Fields under rainfed and different irrigation practices. ASABE Annual International Meeting, July 7-10, Boston, Massachusetts.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Sangha, L., Lamba, J., Kumar, H., Srivastava, P., Dougherty, M., & Prasad, R. (2019). An innovative approach to rainwater harvesting for irrigation based on ENSO forecasts. ASABE Annual International Meeting, July 7-10, Boston, Massachusetts.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Sangha, L., Lamba, J., Kumar, H., Srivastava, P., Dougherty, M., & Prasad, R. (2019). Influence of climate variability on ecologically sustainable water withdrawals from streams for Irrigation. Alabama Water Resource Conference, September 4-6, Orange Beach, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Srivastava, P., Sangha, L., Lamba, J., Morata, G., Bondesan, L., & Ortiz, B. V. (2019). Soil Water Dynamics in Cropland Fields under rainfed and different irrigation practices. Alabama Water Resource Conference, September 4-6, Orange Beach, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Morata, G., Ortiz, B.V., Bondesan, L., Kumar, H., Billor, N., & Knappenberger, T. (2019). Evaluation of Topographic Indices as Tools to Characterize the Spatial Variability of Soil Moisture Content on Alabama's Row Crops Fields. ASA-CSSA-SSSA International Annual Meeting, November 10-13, San Antonio, Texas.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Sangha, L., Lamba, J., Kumar, H., Srivastava, P., Dougherty, M., & Prasad, R. (2019). An innovative approach to rainwater harvesting for irrigation based on ENSO forecasts. Auburn Research Student Symposium, Auburn University, April 9, Auburn, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Ortiz, B. V., Bondesan, L., Morata, G., Kumar, H., Sangha., L., Goodrich, B., Lamba, J., Srivastava, P., & Vellidis, G. (2021). Helping Alabama farmers to adopt precision irrigation practices in Alabama. Alabama Water Resource Conference, September 5-7, Orange Beach, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Ridolfi, E., Kumar, H., & Bárdossy, A. (2018). Flow duration curves estimation at partially ungauged sites. EGU General Assembly, April 8-13, Vienna, Austria.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Bárdossy, A., & Perumal, M. (2017). Estimation of flow duration curves in Upper Neckar catchment using Regionalization. Graduate Engineering Research Showcase, Samuel Ginn Engineering College, Auburn University, Auburn, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2025). Data-Driven Irrigation Water Management: Integrating Soil Physics from Measurements to Models for Precision Irrigation. CANVAS 2025, ASA-CSSA-SSSA. November 9-12, 2025.{" "}
                        <a href="https://scisoc.confex.com/scisoc/2025am/meetingapp.cgi/Paper/169008" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          View Abstract
                        </a>
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2024). Importance of in situ soil moisture measurements in irrigation scheduling? AGU Annual Fall Meeting Abstracts, H51A-02, December 9-13, 2024.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Lyon, S.W., Miller, S., & Kumar, H. (2022). Understanding and (potentially) mitigating the impacts of tile drainage. AGU Annual Fall Meeting Abstracts, H43E-01, December 12-16, Chicago, Illinois.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Takhellambam, B.S., Srivastava, P., Lamba, J., McGehee, R., & Kumar, H. (2021). Potential changes in rainfall erosivity under climate change in southeastern United States. AGU Fall Meeting, December 13-17, New Orleans, Louisiana. <span className="text-sm text-gray-500">4 citations</span>
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Srivastava, P., Ortiz, B. V., Takhellambam, B.S., Morata, G., Bondesan, L., & Lamba, J. (2020). Spatiotemporal soil moisture variability in corn and cotton fields during the growing season. AGU Fall Meeting, H209-05, December 1-17, virtual. <span className="text-sm text-gray-500">1 citation</span>
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Ortiz, B. V., Morata, G., Bondesan, L., Lena, B.P., Kumar, H., Lamba, J., Srivastava, P., & Raper, T.B. (2020). Putting irrigation technology into the hands of Alabama farmers. ASA, CSSA and SSSA International Annual Meeting, 127152, November 9-13, virtual.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Ridolfi, E., Kumar, H., & Bárdossy, A. (2018). Flow duration curves estimation at partially ungauged sites. EGU General Assembly, 14728, April 8-13, Vienna, Austria.
                      </li>
                    </ul>
                  </div>

                  {/* Posters */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Posters</h3>
                    <ul className="space-y-2 pl-4">
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Gadde, N.*, Peterson, C., & Kumar, H. (2025). Forecasting Soil Matric Potential Using ML Ensemble Approach. Cornerstone Event, College of Agriculture and Natural Resources, University of Maryland. October 23, 2025.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Sengar, A.*, Peterson, C., & Kumar, H. (2025). AI-Driven Smart Irrigation Scheduling Using Deep Learning. Cornerstone Event, College of Agriculture and Natural Resources, University of Maryland. October 23, 2025.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Allala, S.C.*, Chen, N.*, Peterson, C., & Kumar, H. (2025). Real-Time Crop Water Stress and Irrigation Mapping Using Multispectral Imagery. Cornerstone Event, College of Agriculture and Natural Resources, University of Maryland. October 23, 2025.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Takhellambam, B.S., Srivastava, P., Lamba, J., Zhao, W., Kumar, H., & Tian, D. (2022). Quantifying the Projected Rainfall Intensity Duration Frequency (IDF) Curves under Changing Climate for the Southeast United States using Artificial Neural Networks. Graduate Students Research Poster showcase at College of Agriculture, Auburn University, October 20, Auburn, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Takhellambam, B.S., Srivastava, P., Lamba, J., Zhao, W., Kumar, H., & Tian, D. (2022). Assessment of projected change in Intensity-Duration-Frequency curves for the Southeast United States using Artificial Neural Networks. HydroML Symposium (NSF-funded), Pennsylvania State University, May 17-21, State College, Pennsylvania.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Srivastava, P., Lamba, J., Ortiz, B. V., Takhellambam, B.S., Way, T.R., & Morata, G. (2021). Influence of soil phosphorus on crop yield variability across the field. Graduate Engineering Research Showcase at Samuel Ginn Engineering College, Auburn University, October 28, Auburn, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Srivastava, P., Lamba, J., Ortiz, B. V., Takhellambam, B.S., Way, T.R., & Morata, G. (2021). Within-field phosphorus variability and impacts on crop yield in Alabama. Graduate Students Research Poster showcase, College of Agriculture, Auburn University, October 28, Auburn, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Takhellambam, B.S., Srivastava, P., Lamba, J., McGehee, R., Kumar, H., & Tian, D. (2021). Temporal disaggregation of hourly projected precipitation over the Southeast United States. Graduate Engineering Research Showcase at Samuel Ginn Engineering College, Auburn University, October 28, Auburn, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Takhellambam, B.S., Srivastava, P., Lamba, J., McGehee, R., Kumar, H., & Tian, D. (2021). Stochastic generation of sub-hourly precipitation for water resource modeling under climate change over Southeastern United States. Graduate Students Research Poster showcase, College of Agriculture, Auburn University, October 28, Auburn, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Srivastava, P., Lamba, J., Ortiz, B. V., Takhellambam, B.S., Way, T.R., & Morata, G. (2021). Phosphorus variability in delineated irrigation management zones in the crop field. Alabama Water Resource Conference, September 7-10, Orange Beach, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Ortiz, B. V., Morata, G., Lena, B.P., McClendon, P., & Kumar, H. (2021). Participatory irrigation extension program to Increase adoption of best irrigation strategies. Alabama Water Resource Conference, September 7-10, Orange Beach, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Takhellambam, B.S., Srivastava, P., Lamba, J., McGehee, R., Kumar, H., & Tian, D. (2021). Stochastic generation of 15-minute precipitation for water resource modeling under climate change over Southeastern United States. Alabama Water Resource Conference, September 7-10, Orange Beach, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Sangha, L., Kumar, H., Lamba, J., Srivastava, P., Dougherty, M., Prasad, R. & Ortiz, B.V. (2018). An innovative approach to rainwater harvesting for irrigation based on ENSO forecasts. Graduate Students Research Poster showcase, College of Agriculture, Auburn University, October 25, Auburn, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H., Bárdossy, A., & Perumal, M. (2017). Estimation of flow duration curves in Upper Neckar catchment using Regionalization. Graduate Student Research Poster Showcase, College of Agriculture, Auburn University, Auburn, Alabama.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Gadde, N.*, Peterson, C., & Kumar, H. (2025). Forecasting Soil Matric Potential Using ML Ensemble Approach. Irrigation Workshop.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Sengar, A.*, Peterson, C., & Kumar, H. (2025). AI-Driven Smart Irrigation Scheduling Using Deep Learning. Irrigation Workshop.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Shah, K.*, Peterson, C., & Kumar, H. (2025). Evapotranspiration And Crop Coefficients: Guiding Efficient Irrigation on Maryland's Eastern Shore. Irrigation Workshop.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Allala, S.C.*, Chen, N.*, Peterson, C., & Kumar, H. (2025). Real-Time Crop Water Stress and Irrigation Mapping Using Multispectral Imagery. Irrigation Workshop.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Herron, R.*, Peterson, C., & Kumar, H. (2025). Sustainable Water Management: Hyprop2, WP4C, and Soil Water Education in Action. Irrigation Workshop.
                      </li>
                    </ul>
                  </div>

                  {/* Invited Talks */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Invited Talks</h3>
                    <ul className="space-y-2 pl-4">
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2025). Does Data Aggregation Matter in AI Irrigation Predictions? International Conference on Modern Agriculture & Allied Sciences. December 21-22, 2025.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2025). Decision-Making for Variable Rate Application using Field and Aerial Measurements: Precision Nutrient Management Strategy. Nutrient Management Update Meeting, Maryland Department of Agriculture. December 15, 2025.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2025). Drone Application in Nitrogen Modeling. Nutrient Management Update Meeting, Maryland Department of Agriculture. December 4, 2025.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2025). Data-Driven Irrigation Water Management: Integrating Soil Physics from Measurements to Models for Precision Irrigation. CANVAS 2025, ASA-CSSA-SSSA. November 9-12, 2025.{" "}
                        <a href="https://scisoc.confex.com/scisoc/2025am/meetingapp.cgi/Paper/169008" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          View Abstract
                        </a>
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2025). Applications of Unpiloted Aerial Systems in Ornamental Horticulture Production: Image Processing. Cultivate'25. July 12-15, 2025.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2025). Working irrigation water requirements using soil moisture in crops. National Soil Moisture Workshop. June 2-5, 2025.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2025). Use of Imaging Software for Decision Making with High Resolution UAV Data. International IPM Symposium. March 3-6, 2025.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2024). Precision Agriculture: Application of Digital Agriculture Technologies in Climate Smart Agricultural Water Management. Rajiv Gandhi University, Rono Hills, Arunachal Pradesh, India. December 13-16, 2024.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2024). Embracing Precision Agricultural Management for Sustainable Agriculture: Farm to Research. Sustainable Development Goal (SDG2-Zero Hunger)-Sustainable Agriculture: Focus on Water Management and Materials for Packaging organized by the German Academic Exchange Service (DAAD). November 12, 2024.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2024). Precision Farming: Integrating Field, Lab, and Modeling Approaches for Precision Irrigation Water Management. International Conference on Emerging Technologies in Agriculture and Allied Sciences. August 10-11, 2024.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2023). Overview of Precision Agriculture Research. Department of Environmental Science and Technology, University of Maryland College Park.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2022). Climate Variability and its Impact on Water Resource Management. Department of Geology, College of Wooster, Ohio, USA.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2021). Stream flow measurement techniques and use of velocity-flow meter in streams. Department of Civil and Environmental Engineering, Auburn University, Auburn, USA.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2020). Runoff predictions in ungauged watersheds and tracing various runoff signatures. Department of Biosystems Engineering, Auburn University, Auburn, USA.
                      </li>
                    </ul>
                  </div>

                  {/* Keynotes */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Keynotes</h3>
                    <ul className="space-y-2 pl-4">
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2025). Is Agricultural Intelligence Replacing Other Precision Agriculture Technologies? Keynote Speaker and International Advisor to "International Conference on Modern Agriculture & Allied Sciences (ICMAAS-2025)." December 21-22, 2025.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2024). Keynote Speaker and International Advisor to "International Conference on Emerging Technologies in Agriculture and Allied Sciences." August 10-11, 2024.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Kumar, H. (2024). Resource (Key) person for the International Workshop cum Training on MATLAB, SPSS and R Programming in Agriculture and Allied Sciences. Virtual. December 15-21, 2024.
                      </li>
                    </ul>
                  </div>

                  {/* Panels */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Panels</h3>
                    <ul className="space-y-2 pl-4">
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Nitrogen Modeling panel. Nutrient Management Update Meeting, Maryland Department of Agriculture. December 4 and December 15, 2025.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Barriers and Opportunities in the Adoption of Information and Technologies. National Soil Moisture Workshop. June 2-5, 2025.
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Precision Ag and Soil Health. Central Maryland 2025 Agronomy Update. February 19, 2025.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Second Window: Advising and Services */}
          {activeWindow === 'advising' && (
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-4"></div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Advising and Services</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Academic Appointments */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Academic Appointments</h3>
                    <ul className="space-y-3 pl-4">
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <span className="font-semibold">04/25-present</span> Affiliate Faculty, Department of Plant Science and Landscape Architecture
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <span className="font-semibold">01/25-present</span> Affiliate Faculty, Artificial Intelligence Interdisciplinary Institute at Maryland
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <span className="font-semibold">01/24-present</span> Affiliate Faculty, Department of Environmental Science and Technology
                      </li>
                      <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <span className="font-semibold">08/23-present</span> Precision Agriculture Specialist, University of Maryland Extension
                      </li>
                    </ul>
                  </div>

                  {/* Advising */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Advising</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Undergraduate</h4>
                        <ul className="space-y-2 pl-4">
                          <li className="text-base text-gray-700">Nathaniel Chen - Adviser. 2025-present.</li>
                          <li className="text-base text-gray-700">Raven Noel Herron - Adviser. 2025-present.</li>
                          <li className="text-base text-gray-700">Julia Sullivan - Adviser. 2025-present.</li>
                          <li className="text-base text-gray-700">Ananth Sriram - Adviser. 2023-present.</li>
                          <li className="text-base text-gray-700">Shreeya Venkatesh Babu - Adviser. 2023-2024.</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Master's</h4>
                        <ul className="space-y-2 pl-4">
                          <li className="text-base text-gray-700">John Augustus Samura - Co-adviser. 2025-present.</li>
                          <li className="text-base text-gray-700">Dhattri Meda - Adviser. 2025-present.</li>
                          <li className="text-base text-gray-700">Nayana Gadde - Adviser. 2025-present.</li>
                          <li className="text-base text-gray-700">Sri Grandhi - Adviser. 2025-present.</li>
                          <li className="text-base text-gray-700">Kaustubh Shah - Adviser. 2025-present.</li>
                          <li className="text-base text-gray-700">Sri Chandraja Reddy Allala - Adviser. 2025-present.</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Doctoral</h4>
                        <ul className="space-y-2 pl-4">
                          <li className="text-base text-gray-700">Md Mahir Shahriyar - committee member (Asian Institute of Technology-Thailand)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Post-doctoral</h4>
                        <ul className="space-y-2 pl-4">
                          <li className="text-base text-gray-700">Dr. Fitsum Teshome - Adviser. 2025-present.</li>
                          <li className="text-base text-gray-700">Dr. Cara Peterson - Adviser. 2025-present.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Boards */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Editorial Boards</h3>
                    <ul className="space-y-2 pl-4">
                      <li className="text-base text-gray-700"><span className="font-semibold">2025-present</span> Journal of Precision Agriculture (Springer Nature)</li>
                      <li className="text-base text-gray-700"><span className="font-semibold">2025-present</span> Agronomy Journal: Machine Learning and Precision Agriculture (Wiley)</li>
                      <li className="text-base text-gray-700"><span className="font-semibold">2025-present</span> Journal of Smart Agricultural Technology (Elsevier)</li>
                      <li className="text-base text-gray-700"><span className="font-semibold">2025-present</span> Special Issue Editor - Frontiers in Climate</li>
                      <li className="text-base text-gray-700"><span className="font-semibold">2025-present</span> Guest Editor - MDPI Artificial Intelligence in Agriculture</li>
                      <li className="text-base text-gray-700"><span className="font-semibold">2024-present</span> Book Editor with Elsevier</li>
                      <li className="text-base text-gray-700"><span className="font-semibold">2023-present</span> Review Editor - Frontiers in Water</li>
                    </ul>
                  </div>

                  {/* Campus Service */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Campus Service</h3>
                    <ul className="space-y-2 pl-4">
                      <li className="text-base text-gray-700"><span className="font-semibold">2025</span> Committee Chair for Senior Faculty Specialist, MAES, AGNR</li>
                      <li className="text-base text-gray-700"><span className="font-semibold">2025</span> Hiring Manager and Committee Chair for Precision Agriculture Lab, UME</li>
                      <li className="text-base text-gray-700"><span className="font-semibold">2025</span> Howard County High School Recruitment, AGNR</li>
                      <li className="text-base text-gray-700"><span className="font-semibold">2025</span> Judge, AGNR 2025 Cornerstone Event's Poster Session</li>
                    </ul>
                  </div>

                  {/* Leadership Roles */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Leadership Roles (Meetings and Conferences)</h3>
                    <ul className="space-y-2 pl-4">
                      <li className="text-base text-gray-700"><span className="font-semibold">2025</span> International Advisor for the International Conference on Modern Agriculture & Allied Sciences 2025: Bridging Engineering, Policy, and Practice for a Sustainable and Resilient Future</li>
                      <li className="text-base text-gray-700"><span className="font-semibold">2025</span> Moderator, Mid-Atlantic Crop Management School. Four sessions</li>
                      <li className="text-base text-gray-700"><span className="font-semibold">2025</span> Moderator, Crop Irrigation Strategies and Management Oral II (includes student competition), CANVAS 2025, ASA-CSSA-SSSA.</li>
                    </ul>
                  </div>

                  {/* Professional Certifications, Licenses, and Memberships */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Professional Certifications, Licenses, and Memberships</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Memberships</h4>
                        <ul className="space-y-2 pl-4">
                          <li className="text-base text-gray-700"><span className="font-semibold">2025-present</span> ASA-CSSA-SSSA</li>
                          <li className="text-base text-gray-700"><span className="font-semibold">2024-present</span> FAA Certified sUAS Pilot (107 and 137 License)</li>
                          <li className="text-base text-gray-700"><span className="font-semibold">2024-present</span> Maryland Association of County Agricultural Agents</li>
                          <li className="text-base text-gray-700"><span className="font-semibold">2024-present</span> National Association County Agricultural Agents (NACAA)</li>
                          <li className="text-base text-gray-700"><span className="font-semibold">2018-present</span> American Society of Agricultural and Biological Engineers (ASABE)</li>
                          <li className="text-base text-gray-700"><span className="font-semibold">2018-present</span> Association of Agricultural, Biological, and Food Engineers of Indian Origin (AABFIEO)</li>
                          <li className="text-base text-gray-700"><span className="font-semibold">2019-present</span> AGU: American Geophysical Union</li>
                          <li className="text-base text-gray-700"><span className="font-semibold">2018-present</span> ASCE: American Society of Civil Engineers</li>
                          <li className="text-base text-gray-700"><span className="font-semibold">2019-present</span> Chi Epsilon: The Honor Society of Civil Engineering</li>
                          <li className="text-base text-gray-700"><span className="font-semibold">2018-present</span> Alpha Epsilon: The Honor Society of Agricultural, Food, and Biological Engineering</li>
                          <li className="text-base text-gray-700"><span className="font-semibold">2018-present</span> Gamma Sigma Delta: The Honor Society of Agriculture</li>
                          <li className="text-base text-gray-700"><span className="font-semibold">2016-present</span> PUB: Predictions in Ungauged Basins</li>
                          <li className="text-base text-gray-700"><span className="font-semibold">2018-present</span> IAHS: International Association of Hydrological Science</li>
                          <li className="text-base text-gray-700"><span className="font-semibold">2015-present</span> DAAD: German Academic Exchange Service fellow, Germany</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Non-University Advisory */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Non-University Advisory, Reviewing Committees, etc.</h3>
                    <ul className="space-y-2 pl-4">
                      <li className="text-base text-gray-700"><span className="font-semibold">2025-present</span> Grant Reviewer, Israel Science Foundation</li>
                      <li className="text-base text-gray-700"><span className="font-semibold">2025-present</span> Advisor - Precision Farming Solutions, SAN R&D Business Solutions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
