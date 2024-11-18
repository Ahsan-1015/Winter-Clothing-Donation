import { NavLink } from 'react-router-dom';
import SubscribeForm from './SubscribeForm';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 pt-20 ">
      <div className="flex flex-col gap-5 justify-center items-center ">
        <div>
          <img src="logo-footer.png" alt="" />
        </div>
        <div className="w-11/12 2xl:w-10/12 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="space-y-5">
            <h2 className="font-semibold text-lg mb-4">About Us</h2>
            <p className="text-gray-400">
              Spreading warmth, one kind gesture <br /> at a time—join us in
              bringing hope and <br /> comfort to those in need this winter.
            </p>

            <div>
              <h2 className="text-lg font-bold mb-2">Follow Us</h2>
              <div className="flex justify-center md:justify-start space-x-4 text-gray-400">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400"
                >
                  <i className="fab fa-facebook"></i> Facebook
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
            <ul
              className="space-y-2 text-gray-400"
              style={{ listStyleType: '"•  "' }}
            >
              <li>
                <NavLink to="/" className="hover:text-teal-400 underline">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/campaigns"
                  className="hover:text-teal-400 underline"
                >
                  Campaigns
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className="hover:text-teal-400 underline"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className="hover:text-teal-400 underline"
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="text-gray-400">
            <h2 className="text-lg font-bold text-white mb-2">Contact Us</h2>
            <p>Email: support@kindwinter.org</p>
            <p>Phone: +880-123-456789</p>
            <p>Address: Dhaka, Bangladesh</p>
          </div>

          {/* Subscribe */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Subscribe</h2>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <SubscribeForm></SubscribeForm>
          </div>
        </div>
      </div>

      <div className="text-center text-xl pt-7 lg:pt-0">
        <p className="text-gray-400">
          Made with ❤️ by the -
          <strong className="text-white">
            KIND <span className="text-yellow-500 ">WINTER </span>
          </strong>
          team.
        </p>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center gap-3 flex items-center justify-center text-gray-500 ">
        {/* <p>@2024 Your Company All Rights Reserved.</p> */}
        <h2 className="text-lg font-bold mb-2">Legal</h2>
        <p>&copy; {new Date().getFullYear()} KIND WINTER</p>
        <p>All Rights Reserved</p>
        <p>
          <a href="/privacy-policy" className="hover:text-teal-400 underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
