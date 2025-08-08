import React from "react";

const UserProfile = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto text-center transition-shadow duration-300 ease-in-out hover:shadow-xl">
      <img
        className="rounded-full mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36 transition-transform duration-300 ease-in-out hover:scale-110"
        src="https://via.placeholder.com/150"
        alt="User Avatar"
      />
      <h1 className="mt-4 text-lg sm:text-lg md:text-xl font-bold text-gray-800 transition-colors duration-300 ease-in-out hover:text-blue-500">
        John Doe
      </h1>
      <p className="mt-2 text-sm sm:text-sm md:text-base text-gray-600">
        Frontend Developer at Example Corp. Passionate about crafting beautiful
        and functional web experiences.
      </p>
    </div>
  );
};

export default UserProfile;