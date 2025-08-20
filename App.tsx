
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DonorRegistration from './components/DonorRegistration';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import { findOrganizations } from './services/geminiService';
import type { Organization } from './types';

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Organization[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const handleSearch = async (location: string) => {
    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    try {
      const results = await findOrganizations(location);
      setSearchResults(results);
    } catch (err) {
      setError('Failed to fetch results. Please check your API key and try again.');
      console.error(err);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-secondary">
      <Header />
      <main className="flex-grow">
        <Hero onSearch={handleSearch} />
        <div id="results" className="py-12 md:py-20 bg-white">
          <SearchResults 
            results={searchResults} 
            isLoading={isLoading} 
            error={error} 
            hasSearched={hasSearched}
          />
        </div>
        <div id="donor-registration" className="py-12 md:py-20 bg-light">
          <DonorRegistration />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
