import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dashboard = () => {
  const { user, loading } = useContext(authContext);
  const navigate = useNavigate();

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Redirect if not authenticated
  if (!loading && !user) {
    navigate('/login');
    return null; // Prevent rendering the page
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200"
      style={{
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/light-wool.png"), linear-gradient(to bottom, #e0f7fa, #ffffff)',
        backgroundSize: 'cover',
      }}
    >
      {user ? (
        <div
          className="bg-white bg-opacity-80 shadow-xl rounded-lg p-10 w-full max-w-4xl flex flex-col md:flex-row items-center animate__animated animate__fadeIn bg-gradient-to-l to-blue-200 from-blue-50"
          data-aos="fade-up"
        >
          {/* User Image Section */}
          <div className="md:w-1/3 flex flex-col items-center">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-56 h-56 rounded-full border-4 border-teal-400 shadow-lg shadow-teal-400 "
                data-aos="zoom-in"
              />
            ) : (
              <div
                className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center shadow-lg"
                data-aos="zoom-in"
              >
                <span className="text-gray-500">No Image</span>
              </div>
            )}
          </div>

          {/* Welcome Message and User Info */}
          <div
            className="md:w-2/3 md:pl-10 mt-6 md:mt-0 text-center md:text-left"
            data-aos="fade-left"
          >
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome,{' '}
              <span className="text-teal-600">
                {user.displayName || 'User'}
              </span>
              !
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              We&apos;re glad to have you back!
            </p>

            {/* User Info */}
            <div className="mt-6 space-y-4">
              <p className="text-md text-gray-700">
                <strong>Name:</strong> {user.displayName || 'Not Provided'}
              </p>
              <p className="text-md text-gray-700">
                <strong>Email:</strong> {user.email || 'Not Provided'}
              </p>
            </div>

            {/* Update Profile Button */}
            <button
              onClick={() => navigate('/update-profile')}
              className="mt-6 btn btn-primary bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-teal-600 transform transition-all duration-300 animate__animated animate__pulse animate__infinite"
              data-aos="zoom-in"
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
