import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const HowToHelp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 text-white flex flex-col justify-center items-center px-4 md:px-20">
      <h1
        className="text-4xl font-bold text-center animate__animated animate__fadeInDown"
        data-aos="fade-up"
      >
        How You Can Help
      </h1>
      <p
        className="text-lg text-center mt-4 animate__animated animate__fadeInUp"
        data-aos="fade-up"
      >
        Your small contribution can bring warmth to someone this winter. Here's
        how you can help.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
        {/* Left Section */}
        <div
          className="md:w-1/2 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
          data-aos="fade-right"
        >
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">
            Steps to Donate:
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">1.</span> Sort through
              your wardrobe for warm clothes.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">2.</span> Ensure
              they're clean and in good condition.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">3.</span> Pack them for
              donation.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">4.</span> Drop them off
              or schedule a pickup.
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div
          className="md:w-1/2 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">
            Fill in Your Details:
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full bg-transparent text-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full bg-transparent text-white"
              required
            />
            <textarea
              placeholder="Message (optional)"
              className="textarea textarea-bordered w-full bg-transparent text-white"
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary w-full bg-yellow-500 hover:bg-yellow-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;
