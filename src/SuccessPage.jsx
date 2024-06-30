import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">Thank you for your message!</h1>
      <div className="flex space-x-4">
        <Link to="/" className="bg-blue-500 text-white px-6 py-2 rounded">
          Go to Home
        </Link>
        <Link
          to="/gallery"
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          View Gallery
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
