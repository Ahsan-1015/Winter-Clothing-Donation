import { useEffect } from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';

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

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  return (
    <div className="mt-10 relative">
      {/* Snowflake Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="snowflakes">
          {Array(50) // Increased number of snowflakes for better effect
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="snowflake"
                style={{
                  '--i': i,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${5 + Math.random() * 10}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  fontSize: `${Math.random() * 15 + 10}px`, // Random sizes
                }}
              >
                ❄️
              </div>
            ))}
        </div>
      </div>
      {/* Snowfall CSS */}
      <style>{`
        .snowflakes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .snowflake {
          position: absolute;
          top: -10px;
          animation: snow linear infinite;
        }

        @keyframes snow {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>

      {/* Title */}
      <div className="flex justify-center gap-3 items-center relative z-10">
        <img
          className="w-10 md:w-14 h-10 md:h-14"
          src="https://img.icons8.com/?size=48&id=5LQkmPrq86xl&format=png"
          alt="Winter Icon"
        />
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-black animate__animated animate__fadeInDown"
          data-aos="fade-up"
        >
          How It Works
        </h2>
      </div>
      <p
        className="mt-4 text-xl text-center text-gray-600 animate__animated animate__fadeIn"
        data-aos="fade-up"
      >
        Follow these simple steps to make a difference and help those in need.
      </p>

      {/* Steps Grid */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
        {/* Step 1: Instructions for Donation */}
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
              Choose essential items to donate (e.g., jackets, blankets,
              gloves).
            </li>
            <li>Fill out the online donation form with your details.</li>
            <li>Schedule a collection time at your convenience.</li>
            <li>Our dedicated team will ensure delivery to those in need.</li>
            <li>
              Track the impact of your contribution through regular updates.
            </li>
          </ol>
        </div>

        {/* Step 2: Collection Points */}
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

        {/* Step 3: Supported Divisions */}
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
                className="bg-purple-50 text-purple-700 font-medium p-2 rounded-lg text-center transform transition hover:bg-purple-200 hover:scale-110 hover:shadow-lg"
                onClick={() =>
                  Toast.fire({
                    icon: 'info',
                    title: `Welcome to ${division}`,
                    text: `${division} is one of the supported divisions for this initiative.`,
                  })
                }
              >
                {division}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
