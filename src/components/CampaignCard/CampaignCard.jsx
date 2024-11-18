import React from 'react';
import { NavLink } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
  const { id, title, image, description, status, contactInfo, division } =
    campaign;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-600" title={description}>
          {description.slice(0, 100)}...
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="badge badge-secondary">{status}</span>
          <span className="badge badge-outline">{division}</span>
        </div>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm font-medium text-gray-500">
            Contact: {contactInfo}
          </span>
          <NavLink to={`/details/${id}`}>
            <button className="btn btn-primary">Checkout More</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
