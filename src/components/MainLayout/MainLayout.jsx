import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Modal from '../Modal/Modal';
import Footer from '../Footer/Footer';

const MainLayout = () => {
  return (
    <div className="font-fontSora bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
      {/* Snowflake Background Effect */}
      {/* <div className="absolute inset-0 pointer-events-none top-20 2xl:top-16">
        <div className="snowflakes">
          {Array(100) // Increased number of snowflakes for better effect
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
      </div> */}

      {/* Snowfall CSS */}
      {/* <style>{`
        .snowflakes {
          position: absolute;
          top: 20;
          left: 0;
          width: full;
          height: full;
          z-index: 0;
          pointer-events: none;
        }

        .snowflake {
          position: absolute;
          top: -20px;
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
      `}</style> */}
      <Navbar></Navbar>
      <div className="w-11/12 2xl:w-10/12 mx-auto max-w-[2500px] mt-6 pb-9">
        <Outlet></Outlet>
        {/* <Modal></Modal> */}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
