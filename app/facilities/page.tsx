export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Page Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Facilities
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Field Research Facilities */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg border border-emerald-200/50 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mr-4 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M12 12a2 2 0 104 0 2 2 0 00-4 0z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Field Research Facilities</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Our lab conducts field experiments at the Central Maryland Research and Education Center, providing access to diverse agricultural landscapes for precision agriculture research. The facility enables us to test and validate innovative irrigation systems, soil moisture monitoring technologies, and variable rate application strategies under real-world conditions.
            </p>
            <ul className="list-none space-y-2 pl-0">
              {["Irrigation system testing and optimization platforms", "Variable Rate Irrigation (VRI) systems", "Automated drainage water management systems", "Weather monitoring stations", "Soil moisture and nutrient sensing networks"].map((item) => (
                <li key={item} className="text-base sm:text-lg text-gray-700 leading-relaxed flex items-start gap-2">
                  <span className="text-emerald-500 mt-1.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Laboratory Facilities */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg border border-blue-200/50 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-4 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Laboratory Facilities</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Our laboratory is equipped with advanced instrumentation for soil and water analysis, supporting the field-lab-modeling framework that characterizes our research approach.
            </p>
            <ul className="list-none space-y-2 pl-0">
              {["Soil hydraulic property characterization equipment", "Soil and water quality analysis instruments", "Nutrient analysis capabilities", "Laboratory-scale irrigation and drainage systems"].map((item) => (
                <li key={item} className="text-base sm:text-lg text-gray-700 leading-relaxed flex items-start gap-2">
                  <span className="text-blue-500 mt-1.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Remote Sensing and GIS Capabilities */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg border border-cyan-200/50 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mr-4 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Remote Sensing and GIS Capabilities</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              We leverage cutting-edge spatial technologies to monitor crop health, assess field variability, and support site-specific management decisions.
            </p>
            <ul className="list-none space-y-2 pl-0">
              {["Unmanned Aerial Vehicle (UAV) systems for crop monitoring", "Multispectral and hyperspectral imaging capabilities", "Geographic Information Systems (GIS) software and databases", "Satellite imagery processing and analysis tools", "Spatial data analysis and mapping resources"].map((item) => (
                <li key={item} className="text-base sm:text-lg text-gray-700 leading-relaxed flex items-start gap-2">
                  <span className="text-cyan-500 mt-1.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* IoT and Sensor Technologies */}
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl shadow-lg border border-violet-200/50 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mr-4 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">IoT and Sensor Technologies</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Our lab integrates Internet of Things (IoT) devices and sensor networks to collect real-time data for precision agriculture applications.
            </p>
            <ul className="list-none space-y-2 pl-0">
              {["Wireless sensor networks for soil moisture monitoring", "IoT-enabled irrigation control systems", "Real-time data acquisition and telemetry systems", "Sensor calibration and maintenance equipment"].map((item) => (
                <li key={item} className="text-base sm:text-lg text-gray-700 leading-relaxed flex items-start gap-2">
                  <span className="text-violet-500 mt-1.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Computational and Modeling Resources */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg border border-amber-200/50 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mr-4 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Computational and Modeling Resources</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              We utilize advanced computational tools and process-based models to integrate field observations, laboratory data, and predictive analytics.
            </p>
            <ul className="list-none space-y-2 pl-0">
              {["HYDRUS and other process-based modeling software", "Machine learning and AI development environments", "Big data processing and analysis capabilities", "Cloud computing resources for large-scale simulations", "Statistical analysis and data visualization tools"].map((item) => (
                <li key={item} className="text-base sm:text-lg text-gray-700 leading-relaxed flex items-start gap-2">
                  <span className="text-amber-500 mt-1.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl shadow-lg border border-slate-200/50 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500 to-gray-600 flex items-center justify-center mr-4 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Location</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Central Maryland Research and Education Center</strong>
              <br />
              2005 Largo Road
              <br />
              Upper Marlboro, MD 20774-8508
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
