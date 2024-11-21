import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import 'animate.css';

const CampaignCard = ({ campaign }) => {
  const { id, title, image, description, status, contactInfo, division } =
    campaign || {};

  return (
    <div
      data-aos="zoom-in-down"
      className="animate__animated animate__fadeIn animate__delay-1s"
    >
      <div
        key={id}
        className="card lg:h-[550px] xl:h-[500px]  bg-base-100 shadow-xl hover:shadow-blue-300 transform hover:scale-105 transition-transform duration-300 relative overflow-hidden"
      >
        <div className=" h-56">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover rounded-t-lg"
            />
          ) : (
            <div className="h-full w-full bg-gray-300 flex items-center justify-center text-xl text-gray-700 rounded-t-lg">
              No Image Available
            </div>
          )}
        </div>

        <div className="card-body p-4 relative z-10">
          <h2 className="card-title text-xl font-bold text-blue-800">
            {title}
          </h2>
          <p className="text-sm text-gray-600" title={description}>
            {description}
          </p>

          {/* Displaying campaign status in a badge-style */}
          <div className="flex flex-wrap gap-2 ">
            <span className="badge text-md bg-orange-200 p-4">{division}</span>
            <span
              className={`badge p-4 text-md ${
                status === 'Active'
                  ? 'bg-green-400'
                  : status === 'Completed'
                  ? 'bg-blue-400'
                  : 'bg-yellow-400'
              }`}
            >
              {status}
            </span>
          </div>

          <div className="card-actions justify-between items-center ">
            <span className=" lg:text-md font-medium text-gray-500">
              Contact: {contactInfo}
            </span>
            <NavLink to={`/details/${id}`}>
              <button className="rounded-lg px-4 py-3 border-2 border-blue-300 hover:border-black transition duration-300 hover:scale-90 text-sm lg:text-lg text-gray-700 hover:text-black font-semibold hover:bg-blue-200">
                Donate Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define PropTypes
CampaignCard.propTypes = {
  campaign: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
    contactInfo: PropTypes.string,
    division: PropTypes.string,
  }),
};

// Define default props for missing optional values
CampaignCard.defaultProps = {
  campaign: {
    image: '',
    description: 'No description available.',
    contactInfo: 'Not provided',
    division: 'Unknown',
  },
};

export default CampaignCard;
