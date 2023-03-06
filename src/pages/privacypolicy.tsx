import React from "react";
import config from "../config/index.json";

const PrivacyPolicy = () => {
  const { privacy } = config;
  const { title, effectiveDate, summary, sections } = privacy;
  return (
    <div>
      <div className="flex flex-wrap sm:gap-10 gap-8 items-center mt-4 h-12">
        <div key={title} className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
            {title}
          </p>
          <p className="mt-2 ml-16 text-base text-gray-600">{effectiveDate}</p>
          <p className="mt-2 ml-16 text-base text-gray-500">{summary}</p>
        </div>
        {sections.map((section, index) => (
          <div key={section.title} className="relative">
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
              {index + 1 + ". " + section.title}
            </p>
            <p className="mt-2 ml-16 text-base text-gray-500">
              {section.passage}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
