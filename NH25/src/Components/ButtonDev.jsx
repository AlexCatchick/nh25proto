import React from "react";
import devfolioIcon from '../assets/Devfolio_Logo.png';
const RegisterButton = () => {
    return (
        <button
          className="z-100 flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <img
            src={devfolioIcon}
            alt="Logo"
            className="w-6 h-6 mr-2"
          />
          <span className="text-sm font-medium">Register here</span>
        </button>
      );
    };

export default RegisterButton;
