export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-10">Research Facilities</h1>
        
        <div className="space-y-10">
          {/* Field Research Facilities */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Field Research Facilities</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our lab conducts field experiments at the Central Maryland Research and Education Center, providing access to diverse agricultural landscapes for precision agriculture research. The facility enables us to test and validate innovative irrigation systems, soil moisture monitoring technologies, and variable rate application strategies under real-world conditions.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
              <li>Irrigation system testing and optimization platforms</li>
              <li>Variable Rate Irrigation (VRI) systems</li>
              <li>Automated drainage water management systems</li>
              <li>Weather monitoring stations</li>
              <li>Soil moisture and nutrient sensing networks</li>
            </ul>
          </div>

          {/* Laboratory Facilities */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Laboratory Facilities</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our laboratory is equipped with advanced instrumentation for soil and water analysis, supporting the field-lab-modeling framework that characterizes our research approach.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
              <li>Soil hydraulic property characterization equipment</li>
              <li>Soil and water quality analysis instruments</li>
              <li>Nutrient analysis capabilities</li>
              <li>Laboratory-scale irrigation and drainage systems</li>
            </ul>
          </div>

          {/* Remote Sensing and GIS Capabilities */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Remote Sensing and GIS Capabilities</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We leverage cutting-edge spatial technologies to monitor crop health, assess field variability, and support site-specific management decisions.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
              <li>Unmanned Aerial Vehicle (UAV) systems for crop monitoring</li>
              <li>Multispectral and hyperspectral imaging capabilities</li>
              <li>Geographic Information Systems (GIS) software and databases</li>
              <li>Satellite imagery processing and analysis tools</li>
              <li>Spatial data analysis and mapping resources</li>
            </ul>
          </div>

          {/* IoT and Sensor Technologies */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">IoT and Sensor Technologies</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our lab integrates Internet of Things (IoT) devices and sensor networks to collect real-time data for precision agriculture applications.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
              <li>Wireless sensor networks for soil moisture monitoring</li>
              <li>IoT-enabled irrigation control systems</li>
              <li>Real-time data acquisition and telemetry systems</li>
              <li>Sensor calibration and maintenance equipment</li>
            </ul>
          </div>

          {/* Computational and Modeling Resources */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Computational and Modeling Resources</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We utilize advanced computational tools and process-based models to integrate field observations, laboratory data, and predictive analytics.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
              <li>HYDRUS and other process-based modeling software</li>
              <li>Machine learning and AI development environments</li>
              <li>Big data processing and analysis capabilities</li>
              <li>Cloud computing resources for large-scale simulations</li>
              <li>Statistical analysis and data visualization tools</li>
            </ul>
          </div>

          {/* Location */}
          <div className="bg-gray-100 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Location</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Central Maryland Research and Education Center</strong><br />
              2005 Largo Road<br />
              Upper Marlboro, MD 20774-8508
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
