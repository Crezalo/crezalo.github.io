import React from "react";
import config from "../config/index.json";

const team = () => {
  const { team } = config;
  const { title, summary, closinglines, roles } = team;
  return (
    <div>
      <div className="flex flex-wrap sm:gap-10 gap-8 items-center mt-4 h-12">
        <div key={title} className="relative">
          <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
            {title}
          </p>
          <p className="mt-2 ml-16 text-base text-gray-600">{summary}</p>
        </div>
        {roles.map((role) => (
          <div key={role.title} className="relative">
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
              {role.name + " - " + role.title}
            </p>
            <p className="mt-2 ml-16 text-base text-gray-500">{role.passage}</p>
          </div>
        ))}
        <p className="ml-16 text-base text-gray-500">{closinglines}</p>
      </div>
    </div>
  );
};

export default team;
