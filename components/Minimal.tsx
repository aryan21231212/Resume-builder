import React from "react";

type ResumeData = {
  name?: string;
  email?: string;
  phone?: string;
  experience?: { role: string; company: string; years: string; details: string }[];
  education?: { degree: string; institution: string; year: string }[];
  skills?: string[];
};

const MinimalTemplate = ({ data = {} as ResumeData }: { data?: ResumeData }) => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 font-sans bg-white text-black w-full max-w-[210mm] min-h-[297mm] mx-auto">

      {/* Header Section */}
      <div className="mb-6 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold break-words mb-2">
          {data?.name || "Your Name"}
        </h1>
        <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start sm:gap-4 text-gray-600 text-sm sm:text-base md:text-lg break-words">
          {data?.email && <span>{data.email}</span>}
          {data?.phone && <span className="hidden sm:inline">|</span>}
          {data?.phone && <span>{data.phone}</span>}
        </div>
        {(!data?.email && !data?.phone) && (
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            your.email@example.com | 123-456-7890
          </p>
        )}
      </div>

      <hr className="border-gray-300 mb-6" />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Column - Experience and Education */}
        <div className="space-y-6">
          {/* Experience Section */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 border-b border-gray-300 pb-2">
              Experience
            </h2>
            {data?.experience?.length ? (
              <div className="space-y-4">
                {data.experience.map((exp, i) => (
                  <div key={i} className="break-words">
                    <h3 className="font-bold text-lg sm:text-xl">{exp.role}</h3>
                    <p className="text-gray-700 italic text-sm sm:text-base">
                      {exp.company} • {exp.years}
                    </p>
                    <p className="text-gray-800 mt-1 text-sm sm:text-base leading-relaxed">
                      {exp.details}
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
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 border-b border-gray-300 pb-2">
              Education
            </h2>
            {data?.education?.length ? (
              <ul className="space-y-3">
                {data.education.map((edu, i) => (
                  <li key={i} className="text-gray-800 break-words">
                    <p className="font-semibold text-sm sm:text-base">{edu.degree}</p>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {edu.institution} <span className="text-gray-600">({edu.year})</span>
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm sm:text-base">No education added</p>
            )}
          </section>
        </div>

        {/* Right Column - Skills and Additional Space */}
        <div>
          {/* Skills Section */}
          <section className="mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 border-b border-gray-300 pb-2">
              Skills
            </h2>
            {data?.skills?.length ? (
              <div className="flex flex-wrap gap-2 break-words">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 px-3 py-1 rounded-md text-xs sm:text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm sm:text-base">No skills added</p>
            )}
          </section>

          {/* Additional Space for Notes or Custom Content */}
          <section className="p-4 bg-gray-50 rounded-lg mt-4">
            <h3 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
              Additional Information
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Available for freelance work and new opportunities
            </p>
          </section>
        </div>
      </div>

      {/* Footer for very large screens */}
      <div className="mt-8 pt-6 border-t border-gray-200 hidden lg:block">
        <p className="text-gray-500 text-sm text-center">
          References available upon request
        </p>
      </div>
    </div>
  );
};

export default MinimalTemplate;