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
    <div className="flex font-sans bg-gray-100 w-[130mm] min-h-[150mm] max-h-[297mm] overflow-hidden">

      <div className="w-1/3 bg-blue-600 text-white p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold break-words">
          {data?.name || "Your Name"}
        </h1>
        <p className="break-words">{data?.email || "your.email@example.com"}</p>
        <p>{data?.phone || "123-456-7890"}</p>

        <h2 className="mt-6 text-xl font-semibold">Skills</h2>
        {data?.skills?.length ? (
          <ul className="list-disc list-inside space-y-1">
            {data.skills.map((skill, i) => (
              <li key={i} className="break-words">{skill}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-200">No skills added</p>
        )}
      </div>


      <div className="w-2/3 p-8 overflow-y-auto">

        <h2 className="text-2xl text-black font-bold border-b pb-2">Experience</h2>
        {data?.experience?.length ? (
          <div className="space-y-4">
            {data.experience.map((exp, i) => (
              <div key={i} className="mb-4">
                <h3 className="font-bold text-black text-lg break-words">
                  {exp.role || "Role not specified"}
                </h3>
                <p className="italic text-gray-700 break-words">
                  {exp.company || "Company not specified"} — {exp.years || "Years not specified"}
                </p>
                <p className="text-gray-800 break-words">
                  {exp.details || "No details provided"}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No experience added</p>
        )}


        <h2 className="text-2xl text-black font-bold border-b pb-2 mt-6">Education</h2>
        {data?.education?.length ? (
          <ul className="space-y-2">
            {data.education.map((edu, i) => (
              <li key={i} className="break-words">
                <span className="font-semibold text-black">{edu.degree || "Degree not specified"}</span>,{" "}
                {edu.institution || "Institution not specified"} (
                {edu.year || "Year not specified"})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No education added</p>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;
