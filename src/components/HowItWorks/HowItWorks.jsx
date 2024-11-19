import React, { useEffect } from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowItWorks = () => {
  const divisions = [
    'Dhaka',
    'Chattogram',
    'Rajshahi',
    'Khulna',
    'Sylhet',
    'Barishal',
    'Mymensingh',
    'Rangpur',
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration
      easing: 'ease-out-cubic', // Smooth easing for animations
      once: true, // Animation triggers only once
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200 min-h-screen py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <h2
          className="text-5xl font-extrabold text-center text-blue-700 animate__animated animate__fadeInDown"
          data-aos="fade-up"
        >
          How It Works
        </h2>
        <p
          className="mt-4 text-lg text-center text-gray-600 animate__animated animate__fadeIn"
          data-aos="fade-up"
        >
          Follow these simple steps to make a difference and help those in need.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Instructions for Donation */}
          <div
            className="bg-white p-8 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
            data-aos="fade-right"
          >
            <div
              className="bg-blue-100 text-blue-700 w-16 h-16 flex items-center justify-center rounded-full text-3xl mb-6 animate__animated animate__zoomIn"
              data-aos="zoom-in"
            >
              1
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Instructions for Donation
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>
                Choose items you want to donate (e.g., jackets, blankets).
              </li>
              <li>Fill out the donation form with your contact details.</li>
              <li>Our team will collect the items from your location.</li>
              <li>We’ll distribute items to those in need.</li>
            </ol>
          </div>

          {/* Information about Collection Points */}
          <div
            className="bg-white p-8 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
            data-aos="zoom-in"
          >
            <div
              className="bg-green-100 text-green-700 w-16 h-16 flex items-center justify-center rounded-full text-3xl mb-6 animate__animated animate__zoomIn"
              data-aos="zoom-in"
            >
              2
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-green-700">
              Collection Points
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Dhaka:</strong> House 12, Road 5, Dhanmondi.
              </li>
              <li>
                <strong>Chattogram:</strong> 22/A Agrabad Commercial Area.
              </li>
              <li>
                <strong>Rajshahi:</strong> Station Road, Talaimari.
              </li>
              <li>
                <strong>Khulna:</strong> Khulna City Corporation Office.
              </li>
            </ul>
          </div>

          {/* Supported Divisions */}
          <div
            className="bg-white p-8 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
            data-aos="fade-left"
          >
            <div
              className="bg-purple-100 text-purple-700 w-16 h-16 flex items-center justify-center rounded-full text-3xl mb-6 animate__animated animate__zoomIn"
              data-aos="zoom-in"
            >
              3
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">
              Supported Divisions
            </h3>
            <ul className="grid grid-cols-2 gap-4 text-gray-700">
              {divisions.map((division, index) => (
                <li
                  key={index}
                  className="bg-purple-50 text-purple-700 font-medium p-2 rounded-lg text-center animate__animated animate__flipInX"
                  data-aos="flip-up"
                >
                  {division}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
