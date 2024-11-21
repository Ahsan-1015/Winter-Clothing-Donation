import { useContext, useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const DonationDetails = () => {
  const campaign = useLoaderData();
  const { title, description, image, division, status, contactInfo } = campaign;

  const { user, loading } = useContext(authContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    quantity: '',
    itemType: '',
    pickupLocation: '',
    notes: '',
  });

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

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

      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
      },
    });
    setForm({
      quantity: '',
      itemType: '',
      pickupLocation: '',
      notes: '',
    });
  };

  if (!loading && !user) {
    navigate('/login');
    return null;
  }

  // Status Badge Colors
  const statusBadge = {
    Active: 'badge-success',
    Completed: 'badge-info',
    Pending: 'badge-warning',
  };

  return (
    <div className="min-h-screen flex justify-center items-center  py-10">
      {/* Galaxy Star Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="stars">
          {Array(100) // Adjust the number of stars for density
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="star"
                style={{
                  '--i': i,
                  left: `${Math.random() * 100}%`, // Random horizontal positioning
                  top: `${Math.random() * 100}%`, // Random vertical positioning
                  animationDuration: `${2 + Math.random() * 3}s`, // Random twinkling speed
                  animationDelay: `${Math.random() * 5}s`, // Random animation start
                  width: `${Math.random() * 3 + 2}px`, // Random star size
                  height: `${Math.random() * 3 + 2}px`,
                }}
              ></div>
            ))}
        </div>
      </div>

      {/* Galaxy Star CSS */}
      <style>{`
  .stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
  }

  .star {
    position: absolute;
    background-color: white; /* Star color */
    border-radius: 50%; /* Makes the stars circular */
    animation: fadeInOut linear infinite; /* Apply fade-in-out animation */
    opacity: 0; /* Initially hidden */
  }

  @keyframes fadeInOut {
    0%, 100% {
      opacity: 10; /* Fully invisible */
    }
    50% {
      opacity: 10; /* Fully visible */
    }
  }
`}</style>

      <div className=" grid xl:grid-cols-2 gap-6 items-center">
        {/* Left Side - Campaign Details */}
        <div
          className="relative  md:h-[600px] xl:h-[700px] rounded-lg overflow-hidden shadow-lg"
          data-aos="fade-right"
        >
          {/* Blurred Image Background */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full  object-cover blur-0  "
          />
          <div className="absolute inset-0  bg-opacity-40"></div>
          {/* Centered Text Content */}
          <div className="relative flex flex-col items-center justify-center h-full text-center text-white p-6 space-y-4 backdrop-blur-sm bg-transparent">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-lg">{description}</p>
            <div className="flex gap-4">
              <span className={`badge ${statusBadge[status]} text-lg`}>
                {status}
              </span>
              <span className="badge badge-secondary text-lg">{division}</span>
            </div>
            <p className="mt-4 text-sm">
              <strong>Contact:</strong> {contactInfo}
            </p>
          </div>
        </div>

        {/* Right Side - Donation Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white md:h-[600px] xl:h-[700px] bg-gradient-to-r from-blue-50 via-white to-purple-50 p-6 rounded-lg shadow-lg space-y-4"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Donation Form
          </h2>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium">Quantity</label>
            <select
              name="quantity"
              value={form.quantity}
              onChange={e =>
                setForm({
                  ...form,
                  quantity: e.target.value,
                  customQuantity: e.target.value === 'Custom' ? '' : null, // Show or remove custom input
                })
              }
              className="select select-bordered w-full"
              required
            >
              <option value="" disabled>
                Select quantity
              </option>
              <option value="1 Blanket">1 Blanket</option>
              <option value="2 Blankets">2 Blankets</option>
              <option value="3 Jackets">3 Jackets</option>
              <option value="5 Sweaters">5 Sweaters</option>
              <option value="Custom">Custom Quantity</option>
            </select>
            {form.customQuantity !== null && (
              <input
                type="text"
                name="customQuantity"
                placeholder="Enter custom quantity (e.g., 7 scarves)"
                value={form.customQuantity}
                onChange={e =>
                  setForm({
                    ...form,
                    quantity: e.target.value,
                    customQuantity: e.target.value,
                  })
                }
                className="input input-bordered w-full mt-2"
                required
              />
            )}
          </div>

          {/* Item Type */}
          <div>
            <label className="block text-sm font-medium">Item Type</label>
            <select
              name="itemType"
              value={form.itemType}
              onChange={e =>
                setForm({
                  ...form,
                  itemType: e.target.value,
                  customItemType: e.target.value === 'Custom' ? '' : null, // Show or remove custom input
                })
              }
              className="select select-bordered w-full"
              required
            >
              <option value="" disabled>
                Select item type
              </option>
              <option value="Sweater">Sweater</option>
              <option value="Blanket">Blanket</option>
              <option value="Jacket">Jacket</option>
              <option value="Custom">Custom Item</option>
            </select>
            {form.customItemType !== null && (
              <input
                type="text"
                name="customItemType"
                placeholder="Enter custom item type"
                value={form.customItemType}
                onChange={e =>
                  setForm({
                    ...form,
                    itemType: e.target.value,
                    customItemType: e.target.value,
                  })
                }
                className="input input-bordered w-full mt-2"
                required
              />
            )}
          </div>

          {/* Pickup Location */}
          <div>
            <label className="block text-sm font-medium">Pickup Location</label>
            <select
              name="pickupLocation"
              value={form.pickupLocation}
              onChange={e =>
                setForm({
                  ...form,
                  pickupLocation: e.target.value,
                  customPickupLocation: e.target.value === 'Custom' ? '' : null, // Show or remove custom input
                })
              }
              className="select select-bordered w-full"
              required
            >
              <option value="" disabled>
                Select location
              </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Khulna">Khulna</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Custom">Custom Location</option>
            </select>
            {form.customPickupLocation !== null && (
              <input
                type="text"
                name="customPickupLocation"
                placeholder="Enter custom location"
                value={form.customPickupLocation}
                onChange={e =>
                  setForm({
                    ...form,
                    pickupLocation: e.target.value,
                    customPickupLocation: e.target.value,
                  })
                }
                className="input input-bordered w-full mt-2"
                required
              />
            )}
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
          <button
            type="submit"
            className="btn btn-primary w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationDetails;
