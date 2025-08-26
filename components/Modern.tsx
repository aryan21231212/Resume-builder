import React from "react";

interface Experience {
  role: string;
  company: string;
  years: string;
  details: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface ResumeData {
  name?: string;
  email?: string;
  phone?: string;
  experience?: Experience[];
  education?: Education[];
  skills?: string[];
}

const ModernTemplate = ({ data = {} as ResumeData }: { data?: ResumeData }) => {
  return (
    <div className="flex flex-col lg:flex-row font-sans bg-gray-100 w-full max-w-[210mm] min-h-[297mm] mx-auto shadow-lg">

      {/* Left Sidebar - Blue Section */}
      <div className="w-full lg:w-1/3 bg-blue-600 text-white p-4 sm:p-5 md:p-6 lg:p-8">
        <div className="lg:sticky lg:top-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold break-words mb-2">
            {data?.name || "Your Name"}
          </h1>
          
          <div className="space-y-1 mb-6 text-sm sm:text-base">
            {data?.email && (
              <p className="break-words">{data.email}</p>
            )}
            {data?.phone && (
              <p>{data.phone}</p>
            )}
            {(!data?.email && !data?.phone) && (
              <>
                <p>your.email@example.com</p>
                <p>123-456-7890</p>
              </>
            )}
          </div>

          {/* Skills Section */}
          <div className="mt-6 lg:mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 border-b border-blue-500 pb-2">
              Skills
            </h2>
            {data?.skills?.length ? (
              <div className="space-y-2">
                {data.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="bg-blue-500 px-3 py-2 rounded-lg text-sm sm:text-base break-words"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-blue-200 text-sm sm:text-base">No skills added</p>
            )}
          </div>

          {/* Additional Info for larger screens */}
          <div className="hidden lg:block mt-8 pt-6 border-t border-blue-500">
            <h3 className="font-semibold mb-2">Availability</h3>
            <p className="text-blue-200 text-sm">Open to new opportunities</p>
          </div>
        </div>
      </div>

      {/* Right Content Section - White Section */}
      <div className="w-full lg:w-2/3 p-4 sm:p-5 md:p-6 lg:p-8 overflow-y-auto">
        {/* Experience Section */}
        <section className="mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-black font-bold border-b-2 border-gray-300 pb-2 mb-4">
            Experience
          </h2>
          {data?.experience?.length ? (
            <div className="space-y-4 sm:space-y-5">
              {data.experience.map((exp, i) => (
                <div key={i} className="pb-4 border-b border-gray-200 last:border-b-0">
                  <h3 className="font-bold text-black text-lg sm:text-xl break-words mb-1">
                    {exp.role || "Role not specified"}
                  </h3>
                  <p className="italic text-gray-700 text-sm sm:text-base break-words mb-2">
                    {exp.company || "Company not specified"} — {exp.years || "Years not specified"}
                  </p>
                  <p className="text-gray-800 text-sm sm:text-base break-words leading-relaxed">
                    {exp.details || "No details provided"}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm sm:text-base">No experience added</p>
          )}
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-black font-bold border-b-2 border-gray-300 pb-2 mb-4">
            Education
          </h2>
          {data?.education?.length ? (
            <div className="space-y-3 sm:space-y-4">
              {data.education.map((edu, i) => (
                <div key={i} className="break-words">
                  <p className="font-semibold text-black text-lg sm:text-xl">
                    {edu.degree || "Degree not specified"}
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {edu.institution || "Institution not specified"} • 
                    <span className="text-gray-600"> {edu.year || "Year not specified"}</span>
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm sm:text-base">No education added</p>
          )}
        </section>


        <div className="lg:hidden mt-8 pt-6 border-t border-gray-300">
          <h3 className="font-semibold text-black mb-2">Availability</h3>
          <p className="text-gray-600 text-sm">Open to new opportunities</p>
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;