import { useEffect } from 'react';
import 'animate.css'; // Animation library for additional effects
import AOS from 'aos'; // AOS for scroll-based animations
import 'aos/dist/aos.css'; // AOS styles for smooth animations

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="relative my-10 rounded-2xl bg-gradient-to-b from-blue-200 via-white to-blue-100 py-16 overflow-hidden">
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
    </div>
  );
};

export default About;
