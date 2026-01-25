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
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* First Window: Advising and Services */}
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
                      <span className="font-semibold">04/25-present</span> Affiliate Faculty, Department of Plant Science and Landscape Architecture, University of Maryland
                    </li>
                    <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <span className="font-semibold">01/25-present</span> Affiliate Faculty, Artificial Intelligence Interdisciplinary Institute at Maryland, University of Maryland
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

          {/* Second Window: Research Project and Publication */}
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

                {/* Edited Book */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Edited Book</h3>
                  <ul className="space-y-3 pl-4">
                    <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Himanshu, S.K., Kumar, H., Gupta, P.K., & Palmate, S. S. (under-review). <em className="text-gray-900 font-semibold">Precision Technologies for digital agriculture: Harnessing IoT, big data, crop modeling, and AI for agricultural production</em>. Elsevier.
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
                  </ul>
                </div>

                {/* Refereed Research Articles */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Refereed Research Articles</h3>
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
                  </ul>
                </div>

                {/* Refereed Presentations */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Refereed Presentations</h3>
                  <ul className="space-y-3 pl-4">
                    <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Palli, A.* & Kumar, H. (2025). Leaf Area Index (LAI) estimation using deep learning and drone imagery. Northeast Agricultural/Biological Engineering Conference (NABEC), August 3-6, 2025.
                    </li>
                    <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Sengar, A.* & Kumar, H. (2025). Leveraging deep learning techniques for irrigation prescription by soil matric potential analysis. Northeast Agricultural/Biological Engineering Conference (NABEC), August 3-6, 2025.
                    </li>
                  </ul>
                </div>

                {/* Refereed Abstracts */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Refereed Abstracts</h3>
                  <ul className="space-y-3 pl-4">
                    <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Kumar, H. (2025). Data-Driven Irrigation Water Management: Integrating Soil Physics from Measurements to Models for Precision Irrigation. CANVAS 2025, ASA-CSSA-SSSA. November 9-12, 2025.{" "}
                      <a href="https://scisoc.confex.com/scisoc/2025am/meetingapp.cgi/Paper/169008" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:shadow-sm transition-all duration-200">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        View Abstract
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Refereed Posters */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Refereed Posters</h3>
                  <ul className="space-y-3 pl-4">
                    <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Gadde, N.*, Peterson, C., & Kumar, H. (2025). Forecasting Soil Matric Potential Using ML Ensemble Approach. Cornerstone Event, College of Agriculture and Natural Resources, University of Maryland. October 23, 2025.
                    </li>
                    <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Sengar, A.*, Peterson, C., & Kumar, H. (2025). AI-Driven Smart Irrigation Scheduling Using Deep Learning. Cornerstone Event, College of Agriculture and Natural Resources, University of Maryland. October 23, 2025.
                    </li>
                    <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Allala, S.C.*, Chen, N.*, Peterson, C., & Kumar, H. (2025). Real-Time Crop Water Stress and Irrigation Mapping Using Multispectral Imagery. Cornerstone Event, College of Agriculture and Natural Resources, University of Maryland. October 23, 2025.
                    </li>
                  </ul>
                </div>

                {/* Refereed Panels */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Refereed Panels</h3>
                  <ul className="space-y-3 pl-4">
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

                {/* Keynotes */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Keynotes</h3>
                  <ul className="space-y-3 pl-4">
                    <li className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      Kumar, H. (2025). Is Agricultural Intelligence Replacing Other Precision Agriculture Technologies? Keynote Speaker and International Advisor to "International Conference on Modern Agriculture & Allied Sciences (ICMAAS-2025)." December 21-22, 2025
                    </li>
                  </ul>
                </div>

                {/* Invited Talks */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Invited Talks</h3>
                  <ul className="space-y-3 pl-4">
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
                      Kumar, H. (2025). Use of Imaging Software for Decision Making with High-Resolution UAV Data. International IPM Symposium. March 3-6, 2025.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
