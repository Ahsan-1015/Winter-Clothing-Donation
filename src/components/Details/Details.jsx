// import React, { useContext } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import Modal from '../Modal/Modal';
// import { authContext } from '../AuthProvider/AuthProvider';

// const Details = () => {
//   const { cost, treatment, description, image } = useLoaderData();
//   const contextValue = useContext(authContext);
//   console.log(contextValue);

//   return (
//     <div
//       className="hero min-h-screen"
//       style={{
//         backgroundImage: `url(${image})`,
//       }}
//     >
//       <div className="hero-overlay bg-opacity-60"></div>
//       <div className="hero-content text-neutral-content text-center">
//         <div className="max-w-md">
//           <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
//           <p className="mb-5">{description}</p>
//           <button
//             onClick={() => document.getElementById('my_modal_5').showModal()}
//             className="btn btn-primary"
//           >
//             Book Appoinment
//           </button>
//         </div>
//       </div>
//       <Modal treatment={treatment}></Modal>
//     </div>
//   );
// };

// export default Details;

import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const DonationDetails = () => {
  const campaign = useLoaderData(); // Fetching campaign data from loader
  const { title, description, image, division, status, contactInfo } = campaign;

  const { user, loading } = useContext(authContext); // Auth context
  const navigate = useNavigate(); // Navigation for redirect

  const [form, setForm] = useState({
    quantity: '',
    itemType: '',
    pickupLocation: '',
    notes: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Thank you! We will reach your destination soon.',
      showConfirmButton: false,
      timer: 1500,
    });

    // toast.success('Thank you! We will reach your destination soon.', {
    //   position: 'top-right',
    //   autoClose: 3000,
    // });
    setForm({
      quantity: '',
      itemType: '',
      pickupLocation: '',
      notes: '',
    });
  };

  // Redirect if not authenticated
  if (!loading && !user) {
    toast.error('You need to log in to access the donation form.', {
      position: 'top-right',
    });
    navigate('/login');
    return null; // Prevent rendering the page
  }

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{description}</p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <span className="badge badge-primary">{status}</span>
              <span className="badge badge-secondary">{division}</span>
            </div>
            <p className="mt-4 text-sm">
              <strong>Contact:</strong> {contactInfo}
            </p>
          </div>
        </div>
      </div>

      {/* Donation Form Section */}
      <div className="container mx-auto p-4">
        {user && (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md space-y-4"
          >
            <h2 className="text-2xl font-semibold text-center">
              Donation Form
            </h2>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium">Quantity</label>
              <input
                type="text"
                name="quantity"
                value={form.quantity}
                onChange={handleInputChange}
                placeholder="e.g., 2 jackets, 3 blankets"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Item Type */}
            <div>
              <label className="block text-sm font-medium">Item Type</label>
              <input
                type="text"
                name="itemType"
                value={form.itemType}
                onChange={handleInputChange}
                placeholder="e.g., blanket, jacket, sweater"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Pickup Location */}
            <div>
              <label className="block text-sm font-medium">
                Pickup Location
              </label>
              <input
                type="text"
                name="pickupLocation"
                value={form.pickupLocation}
                onChange={handleInputChange}
                placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-medium">
                Additional Notes
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleInputChange}
                placeholder="Optional"
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default DonationDetails;
