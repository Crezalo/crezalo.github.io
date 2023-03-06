import React from "react";
import config from "../config/index.json";

const careers = () => {
  const { careers } = config;
  const { title, summary1, summary2, openings, contact } = careers;
  return (
    <div>
      <div className="flex flex-wrap sm:gap-10 gap-8 items-center mt-4 h-12">
        <div key={title} className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
            {title}
          </p>
          <p className="mt-2 ml-16 text-base text-gray-600">{summary1}</p>
          <p className="mt-2 ml-16 text-base text-gray-500">{summary2}</p>
          <p className="mt-5 ml-16 text-lg leading-6 font-medium text-gray-800">
            Current Openings:
          </p>
        </div>
        {openings.map((opening, index) => (
          <div key={opening.title} className="relative">
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
              {index + 1 + ". " + opening.title}
            </p>
            <p className="mt-2 ml-16 text-base text-gray-500">
              {opening.summary}
            </p>
            <p className="mt-2 ml-16 text-base text-gray-500">Requirements:</p>
            {opening.requirements.map((req, index) => (
              <p className="mt-2 ml-20 text-base text-gray-500">
                {index + 1 + ". " + req}
              </p>
            ))}
          </div>
        ))}
        <div className="relative">
          <p className="mt-2 ml-16 text-base text-gray-500">{contact}</p>
        </div>
      </div>
    </div>
  );
};

export default careers;
