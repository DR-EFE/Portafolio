import React from 'react';
import { technologies } from '../data/content';
import SectionWrapper from '../components/SectionWrapper';

const Technologies: React.FC = () => {
  return (
    <SectionWrapper id="technologies" title="My Environment, Tools & Technologies">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <i className={`${tech.icon} text-4xl mb-2 text-primary`}></i>
            <span className="text-center text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Technologies;
