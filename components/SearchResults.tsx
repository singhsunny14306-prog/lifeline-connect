
import React from 'react';
import type { Organization } from '../types';
import { OrganizationType } from '../types';
import { HospitalIcon, NGOIcon, BloodBankIcon, PhoneIcon, MessageIcon } from './IconComponents';

interface SearchResultsProps {
  results: Organization[];
  isLoading: boolean;
  error: string | null;
  hasSearched: boolean;
}

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center py-10">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const OrganizationCard: React.FC<{ org: Organization }> = ({ org }) => {
  const getIcon = () => {
    switch (org.type) {
      case OrganizationType.HOSPITAL:
        return <HospitalIcon className="h-8 w-8 text-primary" />;
      case OrganizationType.NGO:
        return <NGOIcon className="h-8 w-8 text-primary" />;
      case OrganizationType.BLOOD_BANK:
        return <BloodBankIcon className="h-8 w-8 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-3">
                {getIcon()}
                <h3 className="text-xl font-bold text-secondary">{org.name}</h3>
            </div>
            <p className="mt-1 text-sm font-semibold text-primary">{org.type}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600">{org.address}</p>
        <p className="mt-2 text-gray-800 font-medium">{org.phone}</p>
        <div className="mt-6 flex items-center space-x-3">
          {(org.contact_method === 'call' || org.contact_method === 'both') && (
            <a href={`tel:${org.phone}`} className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call Now
            </a>
          )}
          {(org.contact_method === 'message' || org.contact_method === 'both') && (
            <a href={`sms:${org.phone}`} className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-secondary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light">
               <MessageIcon className="h-5 w-5 mr-2" />
               Message
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


const SearchResults: React.FC<SearchResultsProps> = ({ results, isLoading, error, hasSearched }) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-primary-dark">An Error Occurred</h2>
        <p className="mt-4 text-lg text-gray-500">{error}</p>
      </div>
    );
  }

  if (!hasSearched) {
      return (
        <div className="text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-secondary">Ready When You Are</h2>
            <p className="mt-4 text-lg text-gray-500">Use the search bar above to find emergency services in your area.</p>
        </div>
      )
  }

  if (results.length === 0) {
    return (
      <div className="text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-secondary">No Results Found</h2>
        <p className="mt-4 text-lg text-gray-500">We couldn't find any organizations for the specified location. Please try a different search term.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-secondary text-center">Available Services</h2>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {results.map((org, index) => (
          <OrganizationCard key={`${org.name}-${index}`} org={org} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
