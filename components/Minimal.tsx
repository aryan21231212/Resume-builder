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
    <div className="p-10 font-sans bg-white text-black w-[130mm] h-[140mm] overflow-y-auto">

      <div className="mb-6">
        <h1 className="text-4xl font-bold break-words">
          {data?.name || "Your Name"}
        </h1>
        <p className="text-gray-600 text-lg break-words">
          {data?.email || "your.email@example.com"} | {data?.phone || "123-456-7890"}
        </p>
      </div>

      <hr className="border-gray-300 mb-6" />


      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        {data?.experience?.length ? (
          <div className="space-y-4">
            {data.experience.map((exp, i) => (
              <div key={i}>
                <h3 className="font-bold text-lg">{exp.role}</h3>
                <p className="text-gray-700 italic">
                  {exp.company} • {exp.years}
                </p>
                <p className="text-gray-800 break-words line-clamp-4">
                  {exp.details}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No experience added</p>
        )}
      </section>


      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        {data?.education?.length ? (
          <ul className="space-y-2">
            {data.education.map((edu, i) => (
              <li key={i} className="text-gray-800 break-words">
                <span className="font-semibold">{edu.degree}</span>, {edu.institution}{" "}
                <span className="text-gray-600">({edu.year})</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No education added</p>
        )}
      </section>


      <section>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        {data?.skills?.length ? (
          <div className="flex flex-wrap gap-2 break-words">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-gray-100 px-3 py-1 rounded-md text-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No skills added</p>
        )}
      </section>
    </div>
  );
};

export default MinimalTemplate;
