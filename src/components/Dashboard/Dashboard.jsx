// import React, { useContext, useEffect, useState } from 'react';
// import { authContext } from '../AuthProvider/AuthProvider';

// const Dashboard = () => {
//   const { user } = useContext(authContext);
//   const [localSavedData, setLocalSavedData] = useState([]);
//   useEffect(() => {
//     const localData = localStorage.getItem('appoinments');
//     let savedData = [];
//     if (localData) {
//       savedData = JSON.parse(localData);
//     }
//     const userData = savedData.filter(data => data.email === user?.email);
//     console.log(userData);
//     setLocalSavedData(userData);
//   }, []);
//   return <div>Dashboard</div>;
// };

// export default Dashboard;

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const Dashboard = () => {
  const { user, loading } = useContext(authContext);
  const navigate = useNavigate();

  // Redirect if not authenticated
  if (!loading && !user) {
    navigate('/login');
    return null; // Prevent rendering the page
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
          <h1 className="text-3xl font-bold mb-4">
            Welcome, {user.displayName || 'User'}!
          </h1>
          <div className="space-y-4">
            {/* User Image */}
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-24 h-24 mx-auto rounded-full border border-gray-200"
              />
            ) : (
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">No Image</span>
              </div>
            )}

            {/* User Information */}
            <p className="text-sm text-gray-600">
              <strong>Name:</strong> {user.displayName || 'Not Provided'}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Email:</strong> {user.email || 'Not Provided'}
            </p>

            {/* Update Profile Button */}
            <button
              onClick={() => navigate('/update-profile')}
              className="btn btn-primary w-full"
            >
              Update Profile
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg font-semibold text-red-500">
            Loading user information...
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
