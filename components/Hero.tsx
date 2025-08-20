
import React, { useState } from 'react';
import { SearchIcon } from './IconComponents';

interface HeroProps {
  onSearch: (location: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [location, setLocation] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location.trim());
    }
  };

  return (
    <div className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-secondary sm:text-5xl md:text-6xl">
            Find Help, <span className="text-primary">Instantly.</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Your connection to nearby hospitals, NGOs, and blood banks in an emergency.
          </p>
          <p className="mt-6 max-w-md mx-auto text-xl text-primary-dark font-semibold sm:text-2xl md:mt-8">
            “One Drop, A Second Chance at Life.”
          </p>
          <form onSubmit={handleSubmit} className="mt-8 sm:mt-12 sm:flex sm:justify-center">
            <div className="relative rounded-md shadow-sm w-full max-w-lg mx-auto">
                <input
                    type="text"
                    name="location"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="block w-full py-4 pl-5 pr-12 text-lg border-gray-300 rounded-full focus:ring-primary focus:border-primary"
                    placeholder="Enter your city or area"
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                    <button
                        type="submit"
                        className="inline-flex items-center px-6 rounded-full border border-transparent bg-primary text-base font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                    >
                        <SearchIcon className="h-5 w-5 mr-2" />
                        Search
                    </button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
