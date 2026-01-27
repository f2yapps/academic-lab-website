"use client";

import { useState } from "react";
import Image from "next/image";

const EXT_IMAGES_PROGRAM1 = [
  "Ext1.jpg", "Ext2.jpg", "Ext3.jpg", "Ext4.jpg", "Ext5.jpg", "Ext6.jpg",
  "Ext7.jpg", "Ext9.JPEG", "Ext10.JPG", "Ext11.jpg", "Ext12.jpg", "Ext13.jpg",
];
const EXT_IMAGES_PROGRAM2 = [
  "Ext15.jpg", "Ext17.jpg", "Ext18.jpg", "Ext19.jpg", "Ext20.jpg", "Ext21.jpg",
  "Ext22.jpg", "Ext23.JPEG", "Ext25.JPEG", "Ext26.JPG", "Ext28.JPG", "Ext29.JPG", "Ext30.jpg", "Ext32.jpg",
];

function SectionCard({
  icon,
  title,
  children,
  gradient,
  border,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  gradient: string;
  border: string;
}) {
  return (
    <div className={`rounded-2xl shadow-lg border p-6 sm:p-8 hover:shadow-xl transition-all duration-300 ${gradient} ${border}`}>
      <div className="flex items-center mb-5">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-4 shadow-md text-white">
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-4">
      {items.map((item, i) => (
        <li key={i} className="relative pl-5 text-base text-gray-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
          <span className="break-words">{item}</span>
        </li>
      ))}
    </ul>
  );
}

type ExtTab = "program1" | "program2" | "teaching";

export default function Page() {
  const [activeProgram, setActiveProgram] = useState<ExtTab>("program1");

  const sliderStyle =
    activeProgram === "program1"
      ? { left: "0.5rem", width: "calc((100% - 1rem) / 3)" }
      : activeProgram === "program2"
        ? { left: "calc((100% - 1rem) / 3 + 0.5rem)", width: "calc((100% - 1rem) / 3)" }
        : { left: "calc(2 * (100% - 1rem) / 3 + 0.5rem)", width: "calc((100% - 1rem) / 3)" };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Extension
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Tab Navigation - 3 tabs */}
        <div className="mb-10">
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100/50 p-2 sm:p-3 max-w-5xl mx-auto">
            <div className="relative flex gap-1">
              <div
                className="absolute top-2 bottom-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg transition-all duration-300 ease-in-out"
                style={sliderStyle}
              />
              <button
                type="button"
                onClick={() => setActiveProgram("program1")}
                className={`relative z-10 flex-1 px-2 sm:px-4 py-3 sm:py-4 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${
                  activeProgram === "program1" ? "text-white" : "text-blue-600 hover:text-blue-700"
                }`}
              >
                <span className="hidden sm:inline">Extension Program 1</span>
                <span className="sm:hidden">Program 1</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveProgram("program2")}
                className={`relative z-10 flex-1 px-2 sm:px-4 py-3 sm:py-4 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${
                  activeProgram === "program2" ? "text-white" : "text-blue-600 hover:text-blue-700"
                }`}
              >
                <span className="hidden sm:inline">Extension Program 2</span>
                <span className="sm:hidden">Program 2</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveProgram("teaching")}
                className={`relative z-10 flex-1 px-2 sm:px-4 py-3 sm:py-4 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${
                  activeProgram === "teaching" ? "text-white" : "text-blue-600 hover:text-blue-700"
                }`}
              >
                <span className="hidden sm:inline">Extension Teaching Activities</span>
                <span className="sm:hidden">Teaching</span>
              </button>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 max-w-5xl mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-blue-500" />
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-blue-300 to-blue-500" />
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {activeProgram === "program1" && (
            <div className="animate-fadeIn space-y-6 sm:space-y-8">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
                  Precision Agricultural Water Management
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mt-2" />
              </div>

              <SectionCard
                gradient="bg-gradient-to-br from-sky-50 to-blue-50"
                border="border-sky-200/50"
                title="Situation Statement"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                }
              >
                <p className="text-gray-700 leading-relaxed">
                  The United States stands at a critical juncture in the escalating smart irrigation and drainage industry, forecasted to surge from $1.44 billion in 2020 to an estimated $5.56 billion by 2030. However, pressing challenges related to population growth, exacerbated by climate change, are anticipated to intensify freshwater demands. Presently, more than 40% of the global population faces water scarcity issues, with a substantial 70% or greater of freshwater withdrawals earmarked for agricultural irrigation to meet food demands.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  According to the USDA ERS 2025 report, the US irrigated acreage is increasing in the Eastern U.S over time, including Maryland, reflecting producers&apos; responses to variable rainfall, commodity markets, and water access conditions. In humid climate regions like Maryland, where non-uniform rainfall distribution and climate shifts pose significant challenges, this program becomes essential for fostering sustainable agriculture, conserving finite water resources, and addressing the pressing need for advanced water management strategies.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  According to the NASS report, most of the irrigation is scheduled based on visible stress (78% in the nation and 89% in MD) and feel of the soil (40% in the nation and 52% in MD). Similarly, drainage water management (DWM), despite its proven advantages, the adoption of such practices in the Delmarva region, particularly in Maryland&apos;s Chesapeake Bay watershed, has been slower than anticipated. By 2017, only 4,836 acres had implemented DWM, falling short of the targeted 23,292 acres by 2025 set in Maryland&apos;s Phase III Watershed Implementation Plan. The humid climate regions, such as Maryland, stress the urgency for innovations in climate-smart water management practices to conserve finite water resources and foster sustainable agriculture, particularly in regions experiencing non-uniform rainfall distribution and climate shift in the region.
                </p>
              </SectionCard>

              <SectionCard
                gradient="bg-gradient-to-br from-teal-50 to-cyan-50"
                border="border-teal-200/50"
                title="Objective"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
              >
                <p className="text-gray-700 leading-relaxed">
                  To enhance the knowledge of climate-smart precision water management practices, focusing on advanced irrigation and DWM systems with research and Extension.
                </p>
              </SectionCard>

              <SectionCard
                gradient="bg-gradient-to-br from-emerald-50 to-green-50"
                border="border-emerald-200/50"
                title="Output"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                }
              >
                <p className="text-gray-700 leading-relaxed">
                  The output includes findings from research experiments on climate-smart precision water management practices in my lab or fellows nationally and internationally. Educational programs, workshops, and extension services disseminate knowledge among farmers, stakeholders, and agricultural communities, fostering a deep understanding of these practices. Additionally, field demonstrations and pilot projects showcase the practical application and benefits of these advancements, while a suite of educational resources and materials ensures accessible information on implementing climate-smart water management practices.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Since 2023, specialists have conducted multiple studies (1) irrigation scheduling using soil moisture sensors for corn and soybean in two different climate zones in Maryland, and (2) water management using automated and manual control drainage structures. Total funds of approx. $147,000 have been secured for this program through grants in 2025. A farmer&apos;s field has been installed with manual and automated drainage structures in the Mid-Atlantic region to study the water and nutrient flow from the field to streams. There is a collaborative project in Ohio on a similar setup since drainage water management is a common practice in midwestern states. In 2025, one peer-reviewed paper and one peer-reviewed factsheet were published. To this program, work has been presented at five international conferences with 2 supervised students&apos; presentations; 7 invited extension talks, organized and instructed Irrigation Workshop and Field Day, two Roots in Research articles, 1 book editor, four students&apos; poster presentations at an organized irrigation Workshop and Field Day, 3 student&apos;s poster presentations at Cornerstone event, 1 demonstration session on field day. Based on all these formats of communication, this program has reached a total of ~4,255 participants in 2025 and 4,727 since August 2023 (virtually and in-person).
                </p>
              </SectionCard>

              <SectionCard
                gradient="bg-gradient-to-br from-amber-50 to-yellow-50"
                border="border-amber-200/50"
                title="Impacts"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
              >
                <p className="text-gray-700 leading-relaxed">
                  The impact assessment focuses on evaluating the efficacy of smart water management practices in the agricultural sector. By utilizing resources available through the program, the impact measurement gauges farmers&apos; decision-making processes—specifically, the adoption of advanced irrigation management, such as sensor-based irrigation and subsurface tile drainage systems; whether farmers incorporate site-specific conditions for irrigation scheduling/management derived from their field data; and a shift from conventional irrigation methods towards science-based approaches in water management decisions. The program also tracks impact on crop production over time through the implementation of smart water management knowledge.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Based on the survey conducted in winter meetings during 2023–2024, out of the total (388) participants, 44% desire &quot;moderate&quot; to &quot;a lot&quot; research and education on irrigation water management and over half (55%) do not use irrigation in their operations. Two postdoctoral researchers, two graduate students, and 5 undergraduate students are working on this program. Two master&apos;s students graduated from this program, and one is currently employed in California. Specialist-conducted studies have shown that irrigated fields consistently produce higher yields than rainfed systems across corn and soybean crops. Optimized irrigation stabilizes yields, mitigates losses during drought, and maximizes crop growth potential.
                </p>
              </SectionCard>

              <SectionCard
                gradient="bg-gradient-to-br from-indigo-50 to-violet-50"
                border="border-indigo-200/50"
                title="Extension Program Workshops and Talks"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                }
              >
                <BulletList items={[
                  "Kumar, H. (2025). Decision-Making for Variable Rate Application using Field and Aerial Measurements: Precision Nutrient Management Strategy. Nutrient Management Update Meeting, Maryland Department of Agriculture, Annapolis, Maryland. December 15.",
                  "Kumar, H. (2025). Within-Field Nutrient Variability During Growing Season. Kent County Agronomy Breakfast. Chestertown, Maryland, December 10.",
                  "Kumar, H. (2025). Optimizing Precision Irrigation Management for Soybean Crop in Maryland. Agronomic Crops Field Day. Wye Research and Education Center, Queenstown, Maryland. August 27.",
                  "Kumar, H. (2025). Optimizing Precision Irrigation for Soybean: Integrating Soil Physics into Neural Networks. Commodity Classic. July 24.",
                  "Kumar, H. (2025). Smart Agricultural Water Management: Application of Digital Agriculture Technologies. Alleghany Services' Field Day, Greenwood, Delaware. March 28.",
                  "Kumar, H. (2025). Introduction of Drones in Cropping Systems. Advanced Drone School, CMREC-Clarksville. February 26-27.",
                  "Kumar, H. (2025). Panel Discussion: Precision Ag and Soil Health. Central Maryland 2025 Agronomy Update. Frederick, February 19.",
                  "Kumar, H. (2024). Application of Digital Agriculture Technologies for Agricultural Water Management. Rajiv Gandhi University, Rono Hills, Arunachal Pradesh, India. December 13-16.",
                  "Kumar, H. (2024). Organized conference “Cultivating Innovation in Maryland's Agriculture and Technology,” December 12, 2024.",
                  "Kumar, H. (2024). Precision Agriculture Lab: Application of Digital Agricultural Technologies for Climate Smart Agricultural Management. Sri Sri University, Cuttak, Odissa, India. December 9-11.",
                  "Kumar, H. (2024). Precision Agriculture Research at the University of Maryland. Society of Agriculture, Allied Sciences and Technology, Bhubaneshwar, Odissa, India. November 24-26.",
                  "Kumar, H. (2024). Training On Modern Agricultural Technologies and Practices. Underserved Farmers Webinar Series: Invited as a panelist for a webinar organized by Network for Developing Conscious Communities NDCC for underserved communities. October 23, 2024.",
                  "Kumar, H. (2024). Optimizing Precision Irrigation Management for Soybean Crop in Maryland. Soybean Research Field Day. Wye Research and Education Center, Queenstown, Maryland. August 20, 2024.",
                  "Kumar, H. (2024). Precision irrigation management: B to A. Lower Shore Agronomy Day, Princess Anne, MD. January 26, 2024.",
                  "Kumar, H. (2023). Importance of the edge of the field and smart drainage water management for water and nutrients in agricultural fields. BMP Field Day, Wooster, Ohio. Sponsored by USDA NIFA. This Field Day was eligible for 4.5 CLM and 5.5 CCA credits.",
                ]} />
              </SectionCard>

              {/* Extension Pictures - Program 1 */}
              <section className="pt-6 border-t border-blue-200/50">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900">Extension in Action</h3>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base">Precision Agricultural Water Management — field days, irrigation workshops, and outreach.</p>
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mt-3" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                  {EXT_IMAGES_PROGRAM1.map((name, i) => (
                    <div
                      key={name}
                      className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gray-100"
                    >
                      <Image
                        src={`/Extpictures/${name}`}
                        alt={`Precision water management activity ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeProgram === "program2" && (
            <div className="animate-fadeIn space-y-6 sm:space-y-8">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
                  Digital Agricultural Technology: Development and Applications
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mt-2" />
              </div>

              <SectionCard
                gradient="bg-gradient-to-br from-sky-50 to-blue-50"
                border="border-sky-200/50"
                title="Situation Statement"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                }
              >
                <p className="text-gray-700 leading-relaxed">
                  Emerging Digital Agricultural Technologies are rapidly transforming the landscape of farming, influencing agriculture from ground-based agricultural tech to cutting-edge remote sensing applications. The projected size of the global Digital Agricultural Technologies is expected to surge from ~$16 billion in 2023 to ~$25 billion by 2028. Remote-sensing and drones equipped with high-resolution cameras and specialized sensors are revolutionizing farming practices by offering multifaceted applications such as mapping, scouting, conducting stand counts, measuring plant height, and assessing field variability, for precise management zone delineation.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Moreover, these drones facilitate cover crop seeding and enable targeted spraying in agronomic and horticultural crops, revolutionizing pest and disease management strategies. Concurrently, precision planting techniques optimize farming efficiency by managing downforce, allowing for replanting based on accurate stand count data acquired through drone scouting. Additionally, the integration of drone-assisted crop scouting and precision planting enables informed decisions on planter calibration, ensuring precise seed placement and optimal crop establishment. This amalgamation of drone technology and precision planting signifies a paradigm shift in agriculture, empowering farmers with data-driven insights to enhance productivity, optimize resource allocation, and foster sustainable farming practices.
                </p>
              </SectionCard>

              <SectionCard
                gradient="bg-gradient-to-br from-teal-50 to-cyan-50"
                border="border-teal-200/50"
                title="Objective"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
              >
                <p className="text-gray-700 leading-relaxed">
                  To develop and implement an integrated system utilizing drone technology and precision planting to revolutionize farming practices, enhancing productivity, optimizing resource allocation, and fostering sustainability within Digital Agricultural Technologies.
                </p>
              </SectionCard>

              <SectionCard
                gradient="bg-gradient-to-br from-emerald-50 to-green-50"
                border="border-emerald-200/50"
                title="Output"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                }
              >
                <p className="text-gray-700 leading-relaxed">
                  This program aims to develop research and educational material leveraging remote-sensing technology and specialized sensors on drones for mapping, scouting, conducting stand counts, water and nutrient stress (row crops and horticulture and ornamental productions), and assessing field variability. Additionally, the program focuses on establishing protocols for cover crop seeding and targeted spraying in agronomic and horticultural crops, enhancing pest and disease management strategies. Moreover, the optimization of precision planting techniques to manage downforce and facilitate replanting based on precise stand count data obtained through drone scouting. Furthermore, the integration of drone-assisted crop scouting and precision planting will lead to calibrated protocols ensuring accurate seed placement and optimal crop establishment.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Since 2023, research using unmanned aerial vehicles (drones) for row crops (corn and soybean), horticulture and ornamental crops, and fruit and vegetables has been started. Funds have been secured from UMD&apos;s Maryland Agriculture and Experiment Station&apos;s equipment grants, NIFA&apos;s New Technologies for Ag Extension Program, and Mar-Del Watermelon Association. Total funds of approx. $160,268 have been secured through competitive grants. The specialist has passed the Federal Aviation Administration (FAA) part 107 exam and is a licensed pilot to use drones in research and education. There is a collaborative project using drones for aerial spray on watermelons and another study on drone usage for mapping to understand water and nutrient stress. Drones are also used for irrigated and rainfed soybean for estimating water stress, crop growth, and leaf area index using AI and machine learning. Since 2023, one peer-reviewed journal article, one factsheet, and one patent in India for a paddy nursery cutter have been published. In 2025, work has been presented at 7 international conferences with 2 supervised students&apos; presentations; invited as keynote speaker in one international conference, 14 invited extension talks (regional, national, and international), 4 panels, organized and instructed Irrigation Workshop and Field Day, two Roots in Research articles, 1 book editor, four students&apos; poster presentations at an organized irrigation Workshop and Field Day, 3 student&apos;s poster presentations at Cornerstone event, 2 demonstration sessions in field days. Based on all these formats of communication, this program has reached a total of ~4,648 participants in 2025 and 5,310 since August 2023 (virtually and in-person).
                </p>
              </SectionCard>

              <SectionCard
                gradient="bg-gradient-to-br from-amber-50 to-yellow-50"
                border="border-amber-200/50"
                title="Impact"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
              >
                <p className="text-gray-700 leading-relaxed">
                  The impact of the Digital Agricultural Technology program is evaluated across various dimensions: Adoption rate, measuring the integration of drone technology and development and applications; Productivity increase, assessing yield improvements; sustainability, quantifying reductions in pesticide and fertilizer usage, alongside enhancements in soil health; farmer engagement, tracking participation and feedback in educational initiatives; and economic impact, analyzing cost savings and increased profits from implementing these technologies.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Based on the survey conducted in winter meetings during 2023–2024, out of the total (383) participants, 65% desire &quot;moderate&quot; to &quot;a lot&quot; research and education on precision agriculture. One postdoc, 4 graduate students, and one undergraduate student are currently working on this program. Two master&apos;s students graduated under supervision in 2025. In 2025, this program delivered measurable impacts by translating data-driven insights into actionable management decisions. Using sensor- and analytics-based evaluations, the program demonstrated that optimizing planter downforce increased corn yields by 10 bu/acre. In soybeans, AI-enabled analysis of drone imagery and big-data workflows identified early-season stand issues, guiding timely replanting of 4 acres, resulting in an additional 180 bushels of soybean yield (based on a 45 bu/acre average). Collectively, these outcomes highlight how integrating AI, remote sensing, and precision equipment optimization improves decision-making, boosts productivity, and enhances the return on investment for producers.
                </p>
              </SectionCard>

              <SectionCard
                gradient="bg-gradient-to-br from-indigo-50 to-violet-50"
                border="border-indigo-200/50"
                title="Extension Program Workshops and Talks"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                }
              >
                <BulletList items={[
                  "Kumar, H. (2025). Decision-Making for Variable Rate Application using Field and Aerial Measurements: Precision Nutrient Management Strategy. Nutrient Management Update Meeting, Maryland Department of Agriculture, Annapolis, Maryland. December 15.",
                  "Kumar, H. (2025). Drone Application in Nitrogen Modeling. Nutrient Management Update Meeting, Maryland Department of Agriculture, New Midway, Maryland. December 4.",
                  "Kumar, H. (2025). Drone Application in Agriculture. 2025 Southern Maryland Crops Conference. Brandywine, Maryland, December 02.",
                  "Clement, D. & Kumar, H. (2025). Sprayer Drone. Nursery Field Day. MNGLA, Raemelton Farm, Adamstown, Maryland. September 11.",
                  "Kumar, H. (2025). Optimizing Precision Irrigation Management for Soybean Crop in Maryland. Agronomic Crops Field Day. Wye Research and Education Center, Queenstown, Maryland. August 27.",
                  "Kumar, H. (2025). Introduction to Drones in Agronomic Crop Production. Agronomic Drone School, Waldorf, Charles County. August 26.",
                  "Kumar, H. (2025). Introduction to Drones in Agronomic Crop Production. Agronomic Drone School, Street, Hartford County. August 21.",
                  "Kumar, H. (2025). Smart Agricultural Water Management: Application of Digital Agriculture Technologies. Alleghany Services' Field Day, Greenwood, Delaware. March 28.",
                  "Kumar, H. (2025). Remote Sensing Data: Processing and Interpretation for Crop Production. Advanced Drone School, CMREC-Clarksville. February 26-27.",
                  "Kumar, H. (2025). Introduction of drones in cropping systems. Advanced Drone School, CMREC-Clarksville. February 26-27.",
                  "Kumar, H. (2025). Panel Discussion: Precision Ag and Soil Health. Central Maryland 2025 Agronomy Update. February 19.",
                  "Kumar, H. & Sater, H. (2025). The Use of Drones on Watermelon. 2025 Eastern Shore Vegetable Growers Meeting. February 18.",
                  "Kumar, H. & Sater, H. (2025). Optimizing Watermelon Spraying and Assessing Drones for Effectiveness and Efficiency. 59th Annual Mar-Del Watermelon Convention. January 31.",
                  "Kumar, H. & Sater, H. (2025). Optimizing Drone Spraying in Watermelons. Lower Shore Agronomy Day. January 22.",
                  "Kumar, H. (2024). Application of Digital Agriculture Technologies for Agricultural Water Management. Rajiv Gandhi University, Rono Hills, Arunachal Pradesh, India. December 13-16.",
                  "Kumar, H. (2024). Organized conference “Cultivating Innovation in Maryland's Agriculture and Technology.” December 12, 2024.",
                  "Kumar, H. (2024). Precision Agriculture Lab: Application of Digital Agricultural Technologies for Climate Smart Agricultural Management. Sri Sri University, Cuttak, Odissa, India. December 9-11.",
                  "Kumar, H. (2024). Precision Agriculture Research at University of Maryland. Society of Agriculture, Allied Sciences and Technology, Bhubaneshwar, Odissa, India. November 24-26.",
                  "Kumar, H. (2024). Training On Modern Agricultural Technologies and Practices. Underserved Farmers Webinar Series: Invited as a panelist for webinar organized by Network for Developing Conscious Communities (NDCC) for underserved communities. October 23, 2024.",
                  "Gill, S., Clement, D., Ristvey, A., & Kumar, H. (2024). Drone School for Beginners. Central Maryland Research and Education Center, Howard County, Maryland. August 05-08, 2024.",
                  "Kumar, H. (2024). Introduction to drones in agronomic production systems. Agronomic Drone School. Queenstown, Maryland. August 01, 2024.",
                  "Kumar, H. (2024). Drone mapping. University of Maryland Eastern Shore Drone Program by A. Ristvey. Salisbury, Maryland. July 24-25, 2024.",
                  "Gill, S., Clement, D., Kumar, H., & Ristvey, A. (2024). Organized and instructed “Technology for the Commercial Horticulture Industry in Maryland.” Montgomery County, Maryland. June 20, 2024.",
                  "Kumar, H. (2024). Application of Precision Agriculture Technologies. Central Maryland 2024 Agronomy Update, Frederick, Maryland. February 21, 2024.",
                  "Kumar, H. (2024). Drone School for Mapping. Central Maryland Research and Education Center, Howard County, Maryland. February 20-21, 2024.",
                  "Kumar, H. (2024). Emerging Precision Technologies in Agriculture. 2024 Maryland Agricultural Pesticide Conference, Frederick, Maryland. February 06, 2024.",
                  "Kumar, H. (2024). Opportunities and Challenges of New Application Technologies. 2024 Carroll County Mid-Winter Meeting, University of Maryland Extension, Carroll County, Maryland. January 11, 2024.",
                ]} />
              </SectionCard>

              <SectionCard
                gradient="bg-gradient-to-br from-rose-50 to-pink-50"
                border="border-rose-200/50"
                title="Guest Lectures"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                }
              >
                <p className="text-gray-700 leading-relaxed">
                  2023: Field demonstration to students, researchers, farmers, and Extension agents for smart drainage water management during the BMP Field Day organized with the collaboration of The Ohio State University, Virginia Tech, USDA-ARS ATRU, and NIFA.
                </p>
              </SectionCard>

              <SectionCard
                gradient="bg-gradient-to-br from-slate-50 to-gray-50"
                border="border-slate-200/50"
                title="Extension Publications"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                }
              >
                <ul className="space-y-3">
                  <li className="text-gray-700 leading-relaxed">
                    Shah, K.*, Peterson, C., & Kumar, H. (2025). Evapotranspiration and Its Significance in Precision Irrigation Water Management. University of Maryland Extension, Fact sheet.{" "}
                    <a href="https://go.umd.edu/FS-2025-0792" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">https://go.umd.edu/FS-2025-0792</a>
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Dill, S., Hirsch, S., Newton, S., Kumar, H., Vollmer, K., Fiorellino, N., & Kness, A. (2025). University of Maryland Extension Winter Meeting Data 2023-2024 (FS-2024-0744). University of Maryland Extension, Fact sheet.{" "}
                    <a href="https://go.umd.edu/FS-2024-0744" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">https://go.umd.edu/FS-2024-0744</a>
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Jackson-Smith, D., Fleuridor, L., Lyon, S., Woods, T., Brown, C., Haden, V.R., Kumar, H., Chiavegato, M., McMichael, R., Becker, F., Shah, A., & Timilsina, A.P. (2025). Soil Health and Integrated Livestock. The Ohio State University, eFields On-Farm Research.
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Kumar, H. & Sriram, A*. (2024). An Overview of Drones in Agriculture. University of Maryland Extension. FS-2024-0705.{" "}
                    <a href="https://go.umd.edu/FS-2024-0705" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">https://go.umd.edu/FS-2024-0705</a>
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Jackson-Smith, D., Lyon, S., Woods, T., Brown, C., Haden, V.R., Kumar, H., Chiavegato, M., Ribeiro, R., McMichael, R., Becker, F., Shah, A., & Timilsina, A.P. (2024). Soil Health and Integrated Livestock. The Ohio State University, eFields On-Farm Research.
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Ortiz, B.V., Morata, G., Kumar, H., Lamba, J., Lena, B.P., Bondesan, L., Sangha, L., Srivastava, P., Duzy, L., Raper, T., & Davis, D. (2021). Increasing Adoption of Climate- & Water-Smart Irrigation Practices Among Tennessee Valley Farmers in Alabama & Tennessee: Findings and Lessons Learned (2017-2021). Alabama Cooperative Extension System, ANR-2777.{" "}
                    <a href="https://www.aces.edu/wp-content/uploads/2021/11/ANR-2777_OverviewofOutputsfrom20172021NRCS_110821L-G.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Interactive summary</a>
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Ortiz, B.V., Morata, G., Kumar, H., Lamba, J., Lena, B.P., Bondesan, L., Sangha, L., Srivastava, P., Duzy, L., Raper, T., & Davis, D. (2021). Increasing Adoption of Climate- & Water-Smart Irrigation Practices Among Tennessee Valley Farmers in Alabama & Tennessee: Findings and Lessons Learned (2017-2021). Alabama Cooperative Extension System, ANR-2776.{" "}
                    <a href="https://www.aces.edu/wp-content/uploads/2021/11/ANR-2776-Increasing-Adoption-of-Climate-Smart-Water-Irrigation_111021L-G.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">PDF</a>
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Lena, B.P., Bondesan, L., Ortiz, B.V., Morata, G., & Kumar, H. (2021). Irrigation Scheduling Using Soil Water Tension Sensors. Alabama Cooperative Extension System, ANR-2774.{" "}
                    <a href="https://www.aces.edu/blog/topics/crop-production/irrigation-scheduling-using-soil-water-tension-sensors/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Link</a>
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Sangha, L., Lamba, J., Kumar, H., Srivastava, P., Prasad, R., Ortiz, B.V., & Dougherty, M. (2021). ENSO Forecasts to Plan Water Withdrawals for Irrigation. Alabama Cooperative Extension System, ANR-2832.{" "}
                    <a href="https://www.aces.edu/blog/topics/crop-production/enso-forecasts-to-plan-water-withdrawals-for-irrigation/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Link</a>
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Ortiz, B.V., Bondesan, L., Morata, G., McClendon, P., & Kumar, H. (2021). Maintaining water application uniformity in irrigation systems. Alabama Cooperative Extension System, ANR-2773.{" "}
                    <a href="https://www.aces.edu/wp-content/uploads/2021/07/ANR-2773_MaintainingWaterApplicationUniformity_072921L-G.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">PDF</a>. 2 citations
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Ortiz, B.V., Lena, B.P., Morata, G., Bondesan, L., Oliveira, L.P., Oldag, J., Jimenez-Lopez, A.F., Kumar, H., Balkcom, K., Pate, G., & Sanz-Saez, A. (2021). DigitalAg@Farms: Efforts to put digital technologies and site-specific crop management practices in the hands of farmers, ANR-2712.{" "}
                    <a href="https://www.aces.edu/wp-content/uploads/2021/01/ANR-2712_Digital-Ag_012121L-A.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">PDF</a>
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Kumar, H. & Sengar, A. (2025). Integrating Real-Time Sensing for Smart Irrigation Strategies. Roots in Research, Central Maryland Research and Education Center, Upper Marlboro, Maryland, USA.
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Kumar, H. & Murphy, D. (2025). Effect of Downforce and Irrigation Management on Corn. Roots in Research, Central Maryland Research and Education Center, Upper Marlboro, Maryland, USA.
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Millet-Williams, N., Grant, K., & Kumar, H. (2024). Data Privacy. Fact sheet. University of Maryland Extension.
                  </li>
                </ul>
              </SectionCard>

              <SectionCard
                gradient="bg-gradient-to-br from-lime-50 to-green-50"
                border="border-lime-200/50"
                title="Demonstrations"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                }
              >
                <BulletList items={[
                  "Clement, D. & Kumar, H. (2025). Sprayer Drone demonstration with chemical deposition coverage. Nursery Field Day. MNGLA, Raemelton Farm, Adamstown, Maryland. September 11.",
                  "Kumar, H. (2025). Sensor-Based irrigation scheduling in the field. Agronomy Field Day. Wye Research and Education Center, Queenstown, Maryland. August 27, 2025.",
                  "Kumar, H. (2025). Irrigation Workshop and Field Demonstration. Central Maryland Research and Education Center, Upper Marlboro, Maryland. August 14, 2025.",
                  "Kumar, H. (2024). Sensor-Based irrigation scheduling in the field. Soybean Research Field Day. Wye Research and Education Center, Princess Anne, Maryland. August 8, 2024.",
                  "Kumar, H. (2023). Demonstration of the smart drainage water management system. BMP Field Day, Wooster, Ohio. Sponsored by USDA NIFA.",
                ]} />
              </SectionCard>

              {/* Extension Pictures - Program 2 */}
              <section className="pt-6 border-t border-blue-200/50">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900">Extension in Action</h3>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base">Digital Agricultural Technology — drone schools, field days, and technology demonstrations.</p>
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mt-3" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                  {EXT_IMAGES_PROGRAM2.map((name, i) => (
                    <div
                      key={name}
                      className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gray-100"
                    >
                      <Image
                        src={`/Extpictures/${name}`}
                        alt={`Digital ag technology activity ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeProgram === "teaching" && (
            <div className="animate-fadeIn space-y-6 sm:space-y-8">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
                  Extension Teaching Activities
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mt-2" />
              </div>

              <SectionCard
                gradient="bg-gradient-to-br from-sky-50 to-blue-50"
                border="border-sky-200/50"
                title="Mid-Atlantic Crop Management School (2023-present)"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                }
              >
                <p className="text-gray-700 leading-relaxed">
                  Kumar joined the Mid-Atlantic Crop Management School in 2023 as a moderator. Since 2024, Kumar has joined alternative sessions (Fifth session) as a committee member, chaired by Andrew Kness.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Kumar works to provide the speaker for the session and serves as a moderator at the school. This committee is made up of five individuals from UMD and the University of Delaware who are responsible for developing a content theme for each year and inviting and coordinating all nine speakers for the session. University faculty from all over the United States are solicited as speakers. The committee also helps plan the overall format for the entire meeting in collaboration with the other committees.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  In 2025, Kumar invited Dr. Heather Preisendanz from Penn State University as a speaker to this alternative session.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  In 2024, Kumar invited Dr. Brenda Ortiz from Auburn University as a speaker to this alternative session.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  The International Certified Crop Adviser (CCA) Certification Program is a voluntary program offered by the American Society of Agronomy that provides a benchmark for practicing agronomy professionals. There are currently &gt;300 active CCAs in the Mid-Atlantic Region (DE, MD, NJ, VA, and WV) that must complete continuing education in the areas of agronomy, fruit/vegetable production, nutrient management, soil/water quality, pesticide education, and professional development.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  The Mid-Atlantic Crop Management School provides an opportunity for regional agricultural clientele to receive continuing education for state-required certification programs and CCA credits.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Crop School is traditionally held the week before Thanksgiving in Ocean City, Maryland. Five concurrent sessions featuring speakers from across the country were offered on the latest research and implementation strategies related to nutrient management (10 talks), crop management (10 talks), integrated pest management (7 talks), soil and water management (9 talks), and an alternative session on specialty, vegetable, and fruit crops (9 talks).
                </p>
              </SectionCard>

              <SectionCard
                gradient="bg-gradient-to-br from-teal-50 to-cyan-50"
                border="border-teal-200/50"
                title="Other Teaching Activities"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                }
              >
                <BulletList items={[
                  "2023: Farmers' meeting to deliver the outcomes of Environmental and Economic Tradeoffs Associated with Integrating Livestock into Cash Grain Cropping Systems in Eastern Ohio.",
                  "2023: Farmers' meeting to deliver the outcomes of Environmental and Economic Tradeoffs Associated with Integrating Livestock into Cash Grain Cropping Systems in Western Ohio.",
                  "2022: Discussed designing more climate resilient agroecosystems in Ohio with farmers, stakeholders, and Extension agents during 16th Stinner Summit.",
                  "2019: Field Day for farmers and stakeholders in North Alabama about precision agriculture and smart irrigation practices on June 26, 2019.",
                  "2018: Different aspects of precision agriculture to Alabama farmers. (Presented outcomes to Alabama farmers of the research conducted in agricultural fields).",
                ]} />
              </SectionCard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
