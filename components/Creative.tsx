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
  name: string;
  email: string;
  phone: string;
  experience?: Experience[];
  education?: Education[];
  skills?: string[];
}

const CreativeTemplate = ({ data }: { data?: ResumeData }) => {
  if (!data) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-500">
        <p>No resume data provided</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[210mm] min-h-[297mm] bg-white font-sans shadow-lg mx-auto overflow-hidden flex flex-col md:flex-row">

      {/* Left Sidebar - For larger screens */}
      <div className="w-full md:w-1/3 bg-gradient-to-b md:bg-gradient-to-r from-[#9333ea] to-[#ec4899] text-white p-6 md:p-8 break-words">
        <div className="md:sticky md:top-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold break-words mb-4">
            {data.name || "Your Name"}
          </h1>
          
          <div className="space-y-3 mb-8">
            {data.email && (
              <div className="flex items-center">
                <span className="mr-2">📧</span>
                <span className="text-sm md:text-base break-words">{data.email}</span>
              </div>
            )}
            
            {data.phone && (
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <span className="text-sm md:text-base break-words">{data.phone}</span>
              </div>
            )}
          </div>

          {/* Skills in sidebar for larger screens */}
          {data.skills && data.skills.length > 0 && (
            <div className="hidden md:block">
              <h2 className="text-xl font-semibold mb-4 border-b border-white/30 pb-2">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white/20 text-white px-3 py-1 rounded-lg text-xs md:text-sm break-words"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-2/3 p-6 md:p-8">
        {/* Experience Section */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 border-b-2 border-purple-200 pb-2 mb-4">
            Experience
          </h2>
          {data.experience && data.experience.length > 0 ? (
            <div className="space-y-6">
              {data.experience.map((exp, i) => (
                <div key={i} className="break-words">
                  <h3 className="text-lg md:text-xl font-bold text-black">
                    {exp.role}
                  </h3>
                  <p className="text-black text-sm md:text-base">
                    {exp.company} • {exp.years}
                  </p>
                  <p className="text-black mt-2 leading-relaxed whitespace-pre-wrap text-sm md:text-base">
                    {exp.details}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No experience added yet.</p>
          )}
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 border-b-2 border-pink-200 pb-2 mb-4">
            Education
          </h2>
          {data.education && data.education.length > 0 ? (
            <div className="space-y-4">
              {data.education.map((edu, i) => (
                <div key={i} className="break-words">
                  <p className="text-lg md:text-xl text-black font-semibold">
                    {edu.degree}
                  </p>
                  <p className="text-black text-sm md:text-base">
                    {edu.institution} • {edu.year}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No education added yet.</p>
          )}
        </section>

        {/* Skills Section - Only shown on mobile */}
        {data.skills && data.skills.length > 0 && (
          <section className="md:hidden">
            <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 border-b-2 border-pink-200 pb-2 mb-4">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-pink-100 text-black px-3 py-1 rounded-lg text-sm shadow-sm break-words"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CreativeTemplate;