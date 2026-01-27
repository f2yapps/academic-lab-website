export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-6 sm:mb-10">News</h1>
        
        {/* News Section */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
            Lab to Host 2026 Precision Agriculture Technology Conference
          </h2>
          
          <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Our lab, led by Principal Investigator <strong>Dr. Hemendra Kumar</strong>, is excited to announce the 2026 Precision Agriculture Technology Conference, taking place on <strong>Thursday, February 26, 2026</strong>, from <strong>9:00 AM to 4:30 PM</strong> at the <strong>Crowne Plaza, 173 Jennifer Rd, Annapolis</strong>.
            </p>
            
            <p className="mb-4">
              The conference will bring together researchers, industry experts, and practitioners to explore the latest innovations in precision agriculture technologies. Attendees will have the opportunity to participate in engaging presentations, panel discussions, and networking sessions focused on enhancing efficiency, sustainability, and productivity in modern agriculture.
            </p>
            
            <p>
              Don't miss this chance to connect with leaders in the field and discover cutting-edge solutions shaping the future of agriculture.
            </p>
          </div>
        </div>

        {/* Media and News Articles Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-6 sm:p-8 mb-6 sm:mb-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-4"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Media and News Articles</h2>
          </div>
          
          <div className="space-y-6">
            {/* YouTube Videos Section */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">YouTube Videos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/79s0bXQguig"
                    title="Dr. Hemendra Kumar: Precision Irrigation in Action"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Research Podcast Section */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Research Podcast</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-semibold text-gray-900">Dr. Hemendra Kumar: Precision Irrigation in Action | Ep. 74</h4>
                  <p className="text-gray-700 text-sm mb-3">The Crop Science Podcast Show - Dr. Hemendra Kumar explores the latest advancements in irrigation management, discussing optimizing water use through precision irrigation, automated drainage systems, and data-driven decision-making.</p>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://open.spotify.com/episode/0drhYU5URbLsnxFoAEfmSO?si=UTDTM0HXRJSxQJqCwTD11g&nd=1&dlsi=cd5e209eeab44cd3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.299.18-.599.479-.719 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.56.3z"/>
                      </svg>
                      Listen on Spotify
                    </a>
                    <a 
                      href="https://podcasts.apple.com/br/podcast/dr-hemendra-kumar-precision-irrigation-in-action-ep-74/id1720782615?i=1000708311353" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-2.24-1.16-3.37-1.93-3.37-3.72V4.72c0-1.58 1.05-2.23 2.5-1.45l8.78 4.03c1.5.69 2.47 1.18 2.47 2.68 0 .5-.08 1.01-.25 1.5l-.14.4c-.35 1.07-1.14 2.03-2.37 2.03zm-1.02-1.76c.25-.25.44-.55.57-.88.05-.15.08-.31.08-.47 0-.66-.36-1.19-1.03-1.45l-9.2-4.22c-.4-.18-.7.05-.7.5v9.4c0 .95.46 1.56 1.48 2.09.9.47 1.8.9 2.8 1.36.2.09.4.18.6.26.4.15.8.28 1.2.4.2.07.4.12.6.15.3.05.6.05.9 0 .3-.05.6-.12.88-.23.28-.1.54-.25.75-.45z"/>
                      </svg>
                      Listen on Apple Podcasts
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Published: May 13, 2025 • Duration: 28 min</p>
                </div>
              </div>
            </div>

            {/* Research Grant Awarded Section */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Research Grant Awards</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-semibold text-gray-900">UME Researcher Receives $1.4M Grant</h4>
                  <p className="text-gray-700">To Develop Data Driven Science-Based Irrigation Recommendations</p>
                  <a 
                    href="https://www.morningagclips.com/ume-researcher-receives-1-4m-grant/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
                  >
                    Read Article →
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Published: February 12, 2025</p>
                </div>
              </div>
            </div>

            {/* Other Media Section */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Other Media</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Extension researcher using science-based studies for site-specific smart irrigation on farmland</h4>
                    <p className="text-gray-700 text-sm">Bay to Bay News article covering Dr. Kumar's work on science-based irrigation management.</p>
                    <a 
                      href="https://baytobaynews.com/stories/extension-researcher-using-science-based-studies-for-site-specific-smart-irrigation-on-farmland,215832" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm mt-1 inline-block"
                    >
                      Read Article →
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lower Shore Agronomy Day exposes farmers to new technology, research advancements</h4>
                    <p className="text-gray-700 text-sm">WMDT 47abc coverage of the Lower Shore Agronomy Day event featuring Dr. Hemendra Kumar's work on precision agriculture and water management.</p>
                    <a 
                      href="https://www.wmdt.com/2024/01/lower-shore-agronomy-day-exposes-farmers-to-new-technology-research-advancements/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm mt-1 inline-block"
                    >
                      Read Article →
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Precision Agriculture Technology Conference Features Innovations for Producers</h4>
                    <p className="text-gray-700 text-sm">Morning Ag Clips article about the 2nd annual Precision Agriculture Technology Conference organized by Dr. Hemendra Kumar.</p>
                    <a 
                      href="https://www.morningagclips.com/precision-agriculture-technology-conference-features-innovations-for-producers/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm mt-1 inline-block"
                    >
                      Read Article →
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Kumar out to offer a more strategic use of water</h4>
                    <p className="text-gray-700 text-sm">The Delmarva Farmer article covering Dr. Hemendra Kumar's $1.4M grant to develop science-based irrigation management strategies for Maryland farmers.</p>
                    <a 
                      href="https://americanfarm.com/articles/delmarvafarmer/kumar-out-to-offer-a-more-strategic-use-of-water/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm mt-1 inline-block"
                    >
                      Read Article →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Networks Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-4"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Social Networks</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Twitter/X */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-200 group"
            >
              <svg className="w-8 h-8 text-gray-600 group-hover:text-blue-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">Twitter/X</span>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-200 group"
            >
              <svg className="w-8 h-8 text-gray-600 group-hover:text-blue-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">LinkedIn</span>
            </a>

            {/* YouTube */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-200 group"
            >
              <svg className="w-8 h-8 text-gray-600 group-hover:text-red-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-sm font-medium text-gray-700 group-hover:text-red-700">YouTube</span>
            </a>

            {/* Facebook */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-200 group"
            >
              <svg className="w-8 h-8 text-gray-600 group-hover:text-blue-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">Facebook</span>
            </a>

            {/* Instagram */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-200 group"
            >
              <svg className="w-8 h-8 text-gray-600 group-hover:text-pink-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-sm font-medium text-gray-700 group-hover:text-pink-700">Instagram</span>
            </a>

            {/* ResearchGate */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-200 group"
            >
              <svg className="w-8 h-8 text-gray-600 group-hover:text-green-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.5 0h-15A4.5 4.5 0 0 0 0 4.5v15A4.5 4.5 0 0 0 4.5 24h15a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 19.5 0zm-8.25 19.5H4.5V9.75h6.75v9.75zm-3.375-11.063a3.938 3.938 0 1 1 0-7.875 3.938 3.938 0 0 1 0 7.875zM19.5 19.5h-6.75v-5.625c0-1.418-.026-3.244-1.977-3.244-1.978 0-2.28 1.545-2.28 3.141v5.728H4.5V9.75h6.477v1.35h.094c.41-.777 1.41-1.595 2.903-1.595 3.105 0 3.676 2.044 3.676 4.705v5.29z"/>
              </svg>
              <span className="text-sm font-medium text-gray-700 group-hover:text-green-700">ResearchGate</span>
            </a>

            {/* GitHub */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-200 group"
            >
              <svg className="w-8 h-8 text-gray-600 group-hover:text-gray-900 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">GitHub</span>
            </a>

            {/* Add more social networks as needed */}
          </div>
          
          <p className="text-sm text-gray-500 mt-6 italic">Click on any platform to visit our lab's social media page. Links will be updated with actual URLs.</p>
        </div>
      </div>
    </div>
  );
}
