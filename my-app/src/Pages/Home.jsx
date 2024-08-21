import React from 'react';
import { Link } from 'react-router-dom';

const DesignPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-600 text-white">
      <div className="text-center px-8 py-16 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Welcome to Employe Chart</h1>
        <p className="text-xl mb-8">
          There are employees Accounts with creation Edit and Delete 
        </p>
        <Link to="/signup">
          <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md transition duration-300">
           Explore Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DesignPage;
