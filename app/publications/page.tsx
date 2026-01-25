export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Publications
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8 sm:space-y-10">
          {/* Sponsored Research and Programs */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Sponsored Research and Programs</h2>
            </div>
            <ul className="space-y-4 pl-6">
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. & Jarboe, D. (2025). Irrigation Water Management. USDA NRCS. (PI; $1,437,526; three years).</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Optimizing Precision Irrigation Management for the Soybean Crop in Maryland. Maryland Soybean Board. (PI; $31,147; one year).</span>
              </li>
            </ul>
          </div>

          {/* Edited Book */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Edited Book</h2>
            </div>
            <ul className="space-y-4 pl-6">
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Himanshu, S.K., Kumar, H., Gupta, P.K., & Palmate, S. S. (under-review). <em className="text-gray-900 font-semibold">Precision Technologies for digital agriculture: Harnessing IoT, big data, crop modeling, and AI for agricultural production</em>. Elsevier.</span>
              </li>
            </ul>
          </div>

          {/* Book Chapters */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Book Chapters</h2>
            </div>
            <ul className="space-y-4 pl-6">
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Palli, A.*, Sater, H., & Kumar, H. (accepted). Optimizing UAV spray application for pesticide deposition in watermelon production systems in the Mid-Atlantic. <em className="text-gray-900 font-semibold">Precision Technologies for Digital Agriculture: Harnessing IoT, Big Data, Crop Modeling, and AI for Agricultural Production</em>. Elsevier.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Singh, R*. & Kumar, H. (accepted). Next-Gen Data-Driven Precision Irrigation: Application of Artificial Intelligence with In-Situ and Remote Sensing Measurements for Management Zones and VRI Technologies. <em className="text-gray-900 font-semibold">Precision Technologies for digital agriculture: Harnessing IoT, big data, crop modeling, and AI for agricultural production</em>. Elsevier.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Madolli, M., Gade, S., Debnath, S., Kumar, H., & Himanshu, S.K. (accepted). Urbanization, Industrialization, and Water Security: Theoretical perspective and empirical evidence. <em className="text-gray-900 font-semibold">Precision Technologies for Digital Agriculture: Harnessing IoT, Big Data, Crop Modeling, and AI for Agricultural Production</em>. Elsevier.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Williams, N., Grant, K., & Kumar, H. (accepted). Data Sharing, Privacy, and Management Strategies and Security Protocols for Smart Agricultural Systems. <em className="text-gray-900 font-semibold">Precision Technologies for digital agriculture: Harnessing IoT, big data, crop modeling, and AI for agricultural production</em>. Elsevier.</span>
              </li>
            </ul>
          </div>

          {/* Refereed Research Articles */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Refereed Research Articles</h2>
            </div>
            <ul className="space-y-4 pl-6">
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H., Fleuridor, L., Haden, V.R., Chiavegato, M., Jackson-Smith, D., & Lyon, S. (2025). Soil and water impacts around re-introduction of manure into farming systems. <em className="text-gray-900 font-semibold">Agrosystems, Geosciences & Environment</em>. </span>
                <a href="https://doi.org/10.1002/agg2.70264" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200 break-all">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  DOI
                </a>
              </li>
            </ul>
          </div>

          {/* Refereed Presentations */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Refereed Presentations</h2>
            </div>
            <ul className="space-y-4 pl-6">
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Palli, A.* & Kumar, H. (2025). Leaf Area Index (LAI) estimation using deep learning and drone imagery. Northeast Agricultural/Biological Engineering Conference (NABEC), August 3-6, 2025.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Sengar, A.* & Kumar, H. (2025). Leveraging deep learning techniques for irrigation prescription by soil matric potential analysis. Northeast Agricultural/Biological Engineering Conference (NABEC), August 3-6, 2025.</span>
              </li>
            </ul>
          </div>

          {/* Refereed Abstracts */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Refereed Abstracts</h2>
            </div>
            <ul className="space-y-4 pl-6">
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Data-Driven Irrigation Water Management: Integrating Soil Physics from Measurements to Models for Precision Irrigation. CANVAS 2025, ASA-CSSA-SSSA. November 9-12, 2025. </span>
                <a href="https://scisoc.confex.com/scisoc/2025am/meetingapp.cgi/Paper/169008" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200 break-all">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  View Abstract
                </a>
              </li>
            </ul>
          </div>

          {/* Refereed Posters */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Refereed Posters</h2>
            </div>
            <ul className="space-y-4 pl-6">
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Gadde, N.*, Peterson, C., & Kumar, H. (2025). Forecasting Soil Matric Potential Using ML Ensemble Approach. Cornerstone Event, College of Agriculture and Natural Resources, University of Maryland. October 23, 2025.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Sengar, A.*, Peterson, C., & Kumar, H. (2025). AI-Driven Smart Irrigation Scheduling Using Deep Learning. Cornerstone Event, College of Agriculture and Natural Resources, University of Maryland. October 23, 2025.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Allala, S.C.*, Chen, N.*, Peterson, C., & Kumar, H. (2025). Real-Time Crop Water Stress and Irrigation Mapping Using Multispectral Imagery. Cornerstone Event, College of Agriculture and Natural Resources, University of Maryland. October 23, 2025.</span>
              </li>
            </ul>
          </div>

          {/* Refereed Panels */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Refereed Panels</h2>
            </div>
            <ul className="space-y-4 pl-6">
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Nitrogen Modeling panel. Nutrient Management Update Meeting, Maryland Department of Agriculture. December 4 and December 15, 2025.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Barriers and Opportunities in the Adoption of Information and Technologies. National Soil Moisture Workshop. June 2-5, 2025.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Precision Ag and Soil Health. Central Maryland 2025 Agronomy Update. February 19, 2025.</span>
              </li>
            </ul>
          </div>

          {/* Keynotes */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Keynotes</h2>
            </div>
            <ul className="space-y-4 pl-6">
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Is Agricultural Intelligence Replacing Other Precision Agriculture Technologies? Keynote Speaker and International Advisor to "International Conference on Modern Agriculture & Allied Sciences (ICMAAS-2025)." December 21-22, 2025</span>
              </li>
            </ul>
          </div>

          {/* Invited Talks */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Invited Talks</h2>
            </div>
            <ul className="space-y-4 pl-6">
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Does Data Aggregation Matter in AI Irrigation Predictions? International Conference on Modern Agriculture & Allied Sciences. December 21-22, 2025.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Decision-Making for Variable Rate Application using Field and Aerial Measurements: Precision Nutrient Management Strategy. Nutrient Management Update Meeting, Maryland Department of Agriculture. December 15, 2025.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Drone Application in Nitrogen Modeling. Nutrient Management Update Meeting, Maryland Department of Agriculture. December 4, 2025.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Data-Driven Irrigation Water Management: Integrating Soil Physics from Measurements to Models for Precision Irrigation. CANVAS 2025, ASA-CSSA-SSSA. November 9-12, 2025. </span>
                <a href="https://scisoc.confex.com/scisoc/2025am/meetingapp.cgi/Paper/169008" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200 break-all">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  View Abstract
                </a>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Applications of Unpiloted Aerial Systems in Ornamental Horticulture Production: Image Processing. Cultivate'25. July 12-15, 2025.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Working irrigation water requirements using soil moisture in crops. National Soil Moisture Workshop. June 2-5, 2025.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Use of Imaging Software for Decision Making with High-Resolution UAV Data. International IPM Symposium. March 3-6, 2025.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
