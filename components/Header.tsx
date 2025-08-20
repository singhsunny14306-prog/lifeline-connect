
import React from 'react';
import { HeartbeatIcon } from './IconComponents';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <HeartbeatIcon className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-bold text-primary tracking-tight">
              Lifeline Connect
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#results" className="text-gray-600 hover:text-primary transition-colors duration-200">Find Help</a>
            <a href="#donor-registration" className="text-gray-600 hover:text-primary transition-colors duration-200">Become a Donor</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
