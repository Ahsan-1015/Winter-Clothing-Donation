import React, { useEffect } from 'react';
import 'animate.css'; // Animation library for additional effects
import AOS from 'aos'; // AOS for scroll-based animations
import 'aos/dist/aos.css'; // AOS styles for smooth animations

const About = () => {
  // Initialize AOS (scroll-based animations)
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-blue-200 via-white to-blue-100 py-16 overflow-hidden">
      {/* Snowflake Background Effect */}
      <div className="absolute inset-0">
        <div className="snowflakes" aria-hidden="true">
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="snowflake text-white text-opacity-70 text-2xl animate__animated animate__fadeIn"
                style={{ '--i': i }}
              >
                ❄️
              </div>
            ))}
        </div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 z-10">
        {/* Title */}
        <h2
          className="text-5xl font-extrabold text-center text-blue-700 animate__animated animate__fadeInDown"
          data-aos="fade-down"
        >
          About Us
        </h2>
        <p
          className="mt-4 text-lg text-center text-gray-700 animate__animated animate__fadeIn"
          data-aos="fade-down"
        >
          Spreading warmth and joy this winter, one donation at a time.
        </p>

        {/* Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission Statement */}
          <div
            className="p-8 bg-white rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
            data-aos="fade-right"
          >
            <div
              className="bg-blue-700 text-white w-16 h-16 flex items-center justify-center rounded-full text-3xl mb-6 animate__animated animate__zoomIn"
              data-aos="zoom-in"
            >
              💙
            </div>
            <h3 className="text-3xl font-semibold text-blue-700 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to ensure everyone stays warm during the cold
              months. Through your generous donations, we provide jackets,
              blankets, and winter essentials to those in need.
            </p>
          </div>

          {/* How Users Can Contribute */}
          <div
            className="p-8 bg-white rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
            data-aos="fade-left"
          >
            <div
              className="bg-blue-700 text-white w-16 h-16 flex items-center justify-center rounded-full text-3xl mb-6 animate__animated animate__zoomIn"
              data-aos="zoom-in"
            >
              ❄️
            </div>
            <h3 className="text-3xl font-semibold text-blue-700 mb-4">
              How You Can Help
            </h3>
            <p className="text-gray-700 leading-relaxed">
              It’s easy to contribute:
            </p>
            <ul className="list-disc list-inside space-y-3 mt-4 text-gray-700">
              <li>Donate warm clothing, blankets, or winter essentials.</li>
              <li>Schedule a pickup or visit a collection point near you.</li>
              <li>Spread the word to inspire others to help.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            className="animate__animated animate__pulse text-xl text-blue-700 font-semibold bg-blue-50 inline-block py-4 px-8 rounded-lg shadow-md border-2 border-blue-300"
            data-aos="zoom-in"
          >
            Together, let’s make this winter warmer for everyone. 🌨️
          </div>
        </div>
      </div>

      {/* Snowfall CSS */}
      <style jsx>{`
        .snowflakes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .snowflake {
          position: absolute;
          top: -10px;
          color: white;
          font-size: 20px;
          opacity: 0.8;
          animation: snow 10s linear infinite;
        }

        /* Snowflakes from top-left */
        .snowflake:nth-child(1),
        .snowflake:nth-child(2),
        .snowflake:nth-child(3),
        .snowflake:nth-child(4) {
          left: calc(
            10% * var(--i)
          ); /* Distribute snowflakes across the left */
          animation-duration: calc(
            8s + 5 * (var(--i) + 1)
          ); /* Varying speeds */
          font-size: calc(15px + 10 * var(--i)); /* Varying sizes */
        }

        /* Snowflakes from top-right */
        .snowflake:nth-child(5),
        .snowflake:nth-child(6),
        .snowflake:nth-child(7),
        .snowflake:nth-child(8) {
          right: calc(
            10% * var(--i)
          ); /* Distribute snowflakes across the right */
          animation-duration: calc(
            8s + 5 * (var(--i) + 1)
          ); /* Varying speeds */
          font-size: calc(15px + 10 * var(--i)); /* Varying sizes */
        }

        @keyframes snow {
          0% {
            transform: translateY(-10px); /* Start from top */
          }
          100% {
            transform: translateY(100vh); /* End at the bottom */
          }
        }
      `}</style>
    </div>
    
  );
};

export default About;
