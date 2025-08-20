
import React, { useState } from 'react';

const DonorRegistration: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
      name: '',
      bloodGroup: 'A+',
      phone: '',
      email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd send this data to a server.
    console.log('Donor Registration Data:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">Thank You for Registering!</h2>
            <p className="mt-4 text-xl text-gray-600">
                You've taken a crucial step to save lives. We will contact you when there is a need.
            </p>
             <button
                onClick={() => setSubmitted(false)}
                className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
                Register Another Donor
            </button>
        </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">Become a Lifesaver</h2>
      <p className="mt-4 text-xl text-gray-600">
        Join our community of voluntary blood donors. Your contribution can save a life.
      </p>
      <form onSubmit={handleSubmit} className="mt-12 text-left sm:mx-auto sm:max-w-lg">
        <div className="grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="mt-1">
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md" placeholder="John Doe" />
            </div>
          </div>
          <div>
            <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">Blood Group</label>
            <div className="mt-1">
              <select id="bloodGroup" name="bloodGroup" required value={formData.bloodGroup} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md">
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="mt-1">
              <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md" placeholder="+1 (555) 987-6543" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <div className="mt-1">
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary focus:border-primary border-gray-300 rounded-md" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Register as Donor
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DonorRegistration;
