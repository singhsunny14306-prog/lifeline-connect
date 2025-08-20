
import React from 'react';
import { HeartbeatIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <HeartbeatIcon className="h-8 w-8 text-primary" />
          <span className="ml-2 text-2xl font-bold tracking-tight">
            Lifeline Connect
          </span>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} Lifeline Connect. All rights reserved.
        </p>
        <p className="mt-2 text-center text-sm text-gray-500">
          This is a conceptual application. In a real emergency, please call your local emergency number.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
