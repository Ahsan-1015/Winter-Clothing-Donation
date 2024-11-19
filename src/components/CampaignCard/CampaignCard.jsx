// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const CampaignCard = ({ campaign }) => {
//   const { id, title, image, description, status, contactInfo, division } =
//     campaign;

//   return (
//     <div className="card bg-base-100 shadow-xl">
//       <figure>
//         <img src={image} alt={title} className="h-48 w-full object-cover" />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title text-lg font-bold">{title}</h2>
//         <p className="text-sm text-gray-600" title={description}>
//           {description}
//         </p>
//         <div className="flex flex-wrap gap-2 mt-4">
//           <span className="badge badge-secondary">{status}</span>
//           <span className="badge badge-outline">{division}</span>
//         </div>
//         <div className="card-actions justify-between items-center mt-4">
//           <span className="text-sm font-medium text-gray-500">
//             Contact: {contactInfo}
//           </span>
//           <NavLink to={`/details/${id}`}>
//             <button className="btn btn-primary">Checkout More</button>
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CampaignCard;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const CampaignCard = ({ campaign }) => {
//   const { id, title, image, description, status, contactInfo, division } =
//     campaign;

//   return (
//     <motion.div
//       className="card bg-base-100 shadow-xl transform hover:scale-105 transition-transform duration-300"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <figure>
//         <img
//           src={image}
//           alt={title}
//           className="h-48 w-full object-cover rounded-lg"
//         />
//       </figure>
//       <div className="card-body p-4">
//         <h2 className="card-title text-xl font-bold text-blue-800">{title}</h2>
//         <p className="text-sm text-gray-600" title={description}>
//           {description}
//         </p>
//         <div className="flex flex-wrap gap-2 mt-4">
//           <span className="badge badge-secondary">{status}</span>
//           <span className="badge badge-outline">{division}</span>
//         </div>
//         <div className="card-actions justify-between items-center mt-4">
//           <span className="text-sm font-medium text-gray-500">
//             Contact: {contactInfo}
//           </span>
//           <NavLink to={`/details/${id}`}>
//             <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 transition duration-300">
//               Checkout More
//             </button>
//           </NavLink>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

import { NavLink } from 'react-router-dom';
import 'animate.css'; // Import animate.css

const CampaignCard = ({ campaign }) => {
  return (
    <div
      data-aos="zoom-in-down"
      className="animate__animated animate__fadeIn animate__delay-1s"
    >
      <div
        key={campaign.id}
        className="card bg-base-100 shadow-xl transform hover:scale-105 transition-transform duration-300 relative overflow-hidden"
      >
        <figure>
          {campaign.image ? (
            <img
              src={campaign.image}
              alt={campaign.title}
              className="h-48 w-full object-cover rounded-t-lg"
            />
          ) : (
            <div className="h-48 w-full bg-gray-300 flex items-center justify-center text-xl text-gray-700 rounded-t-lg">
              No Image Available
            </div>
          )}
        </figure>

        {/* Winter Snowfall Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center winter-bg">
          <div className="snowfall absolute inset-0 w-full h-full animate__animated animate__fadeIn animate__delay-2s"></div>
        </div>

        <div className="card-body p-4 relative z-10">
          <h2 className="card-title text-xl font-bold text-blue-800">
            {campaign.title}
          </h2>
          <p className="text-sm text-gray-600" title={campaign.description}>
            {campaign.description}
          </p>

          {/* Displaying campaign status in a badge-style */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="badge badge-secondary">{campaign.division}</span>
            <span
              className={`badge ${
                campaign.status === 'Active'
                  ? 'bg-green-500'
                  : campaign.status === 'Completed'
                  ? 'bg-blue-500'
                  : 'bg-yellow-500'
              }`}
            >
              {campaign.status}
            </span>
          </div>

          <div className="card-actions justify-between items-center mt-4">
            <span className="text-sm font-medium text-gray-500">
              Contact: {campaign.contactInfo}
            </span>
            <NavLink to={`/details/${campaign.id}`}>
              <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 transition duration-300">
                Donate Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
