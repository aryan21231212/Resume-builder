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
    <div className="w-[130mm] min-h-[150mm] bg-white font-sans shadow-lg mx-auto overflow-hidden">

      <div className="bg-gradient-to-r from-[#9333ea] to-[#ec4899] text-white p-10 break-words">
        <h1 className="text-5xl font-bold break-words">{data.name || "Your Name"}</h1>
        <p className="mt-2 text-lg opacity-90 break-words">
          {data.email || "your@email.com"} | {data.phone || "123-456-7890"}
        </p>
      </div>


      <div className="grid grid-cols-2 gap-10 p-10">

        <div>
          <h2 className="text-2xl font-semibold text-purple-600 border-b-2 border-purple-200 pb-2 mb-4">
            Experience
          </h2>
          {data.experience && data.experience.length > 0 ? (
            data.experience.map((exp, i) => (
              <div key={i} className="mb-6 break-words">
                <h3 className="text-lg font-bold text-black">{exp.role}</h3>
                <p className="text-black">
                  {exp.company} • {exp.years}
                </p>
                <p className="text-black mt-2 leading-relaxed whitespace-pre-wrap">
                  {exp.details}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">No experience added yet.</p>
          )}
        </div>


        <div>
          <h2 className="text-2xl font-semibold text-pink-600 border-b-2 border-pink-200 pb-2 mb-4">
            Education
          </h2>
          {data.education && data.education.length > 0 ? (
            <ul className="space-y-4">
              {data.education.map((edu, i) => (
                <li key={i} className="break-words">
                  <p className="text-lg text-black font-semibold">{edu.degree}</p>
                  <p className="text-black">
                    {edu.institution} • {edu.year}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">No education added yet.</p>
          )}

          <h2 className="text-2xl font-semibold text-pink-600 border-b-2 border-pink-200 pb-2 mt-8 mb-4">
            Skills
          </h2>
          {data.skills && data.skills.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {data.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-pink-100 text-black px-3 py-1 rounded-lg text-sm shadow-sm break-words"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No skills listed yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
