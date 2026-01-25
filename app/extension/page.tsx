export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Extension
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8 sm:space-y-10">
          {/* Refereed Extension Publications */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Refereed Extension Publications</h2>
            </div>
            <ul className="space-y-4 pl-6">
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Shah, K.*, Peterson, C., & Kumar, H. (2025). Evapotranspiration and Its Significance in Precision Irrigation Water Management. <em className="text-gray-900 font-semibold">University of Maryland Extension</em>, Fact sheet. </span>
                <a href="https://go.umd.edu/FS-2025-0792" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200 break-all">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  View Fact Sheet
                </a>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Dill, S., Hirsch, S., Newton, S., Kumar, H., Vollmer, K., Fiorellino, N., & Kness, A. (2025). University of Maryland Extension Winter Meeting Data 2023-2024 (FS-2024-0744). <em className="text-gray-900 font-semibold">University of Maryland Extension</em>, FS-2024-0744, Fact sheet. </span>
                <a href="https://go.umd.edu/FS-2024-0744" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200 break-all">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  View Fact Sheet
                </a>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Jackson-Smith, D., Fleuridor, L., Lyon, S., Woods, T., Brown, C., Haden, V.R., Kumar, H., Chiavegato, M., McMichael, R., Becker, F., Shah, A., & Timilsina, A.P. (2025). Soil Health and Integrated Livestock. <em className="text-gray-900 font-semibold">The Ohio State University</em>, eFields On-Farm Research.</span>
              </li>
            </ul>
          </div>

          {/* Extension Program Workshops and Talks */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Extension Program Workshops and Talks</h2>
            </div>
            <ul className="space-y-4 pl-6">
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Decision-Making for Variable Rate Application using Field and Aerial Measurements: Precision Nutrient Management Strategy. Nutrient Management Update Meeting, Maryland Department of Agriculture, Annapolis, Maryland. December 15.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Drone Application in Nitrogen Modeling. Nutrient Management Update Meeting, Maryland Department of Agriculture, New Midway, Maryland. December 4.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Drone Application in Agriculture. 2025 Southern Maryland Crops Conference. Brandywine, Maryland, December 02.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Clement, D. & Kumar, H. (2025). Sprayer Drone. Nursery Field Day. MNGLA, Raemelton Farm, Adamstown, Maryland. September 11.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Optimizing Precision Irrigation Management for Soybean Crop in Maryland. Agronomic Crops Field Day. Wye Research and Education Center, Queenstown, Maryland. August 27.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Introduction to Drones in Agronomic Crop Production. Agronomic Drone School, Waldorf, Charles County. August 26.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Introduction to Drones in Agronomic Crop Production. Agronomic Drone School, Street, Hartford County. August 21.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Smart Agricultural Water Management: Application of Digital Agriculture Technologies. Alleghany Services' Field Day, Greenwood, Delaware. March 28.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Remote Sensing Data: Processing and Interpretation for Crop Production. Advanced Drone School, CMREC-Clarksville. February 26-27.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Introduction of drones in cropping systems. Advanced Drone School, CMREC-Clarksville. February 26-27.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Panel Discussion: Precision Ag and Soil Health. Central Maryland 2025 Agronomy Update. February 19.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. & Sater, H. (2025). The Use of Drones on Watermelon. 2025 Eastern Shore Vegetable Growers Meeting. February 18.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. & Sater, H. (2025). Optimizing Watermelon Spraying and Assessing Drones for Effectiveness and Efficiency. 59th Annual Mar-Del Watermelon Convention. January 31.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. & Sater, H. (2025). Optimizing Drone Spraying in Watermelons. Lower Shore Agronomy Day. January 22.</span>
              </li>
            </ul>
          </div>

          {/* Demonstrations */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-4"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Demonstrations</h2>
            </div>
            <ul className="space-y-4 pl-6">
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Clement, D. & Kumar, H. (2025). Sprayer Drone demonstration with chemical deposition coverage. Nursery Field Day. MNGLA, Raemelton Farm, Adamstown, Maryland. September 11.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Sensor-Based irrigation scheduling in the field. Agronomy Field Day. Wye Research and Education Center, Queenstown, Maryland. August 27, 2025.</span>
              </li>
              <li className="relative pl-6 text-base sm:text-lg text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">
                <span className="break-words">Kumar, H. (2025). Irrigation Workshop and Field Demonstration. Central Maryland Research and Education Center, Upper Marlboro, Maryland. August 14, 2025.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
