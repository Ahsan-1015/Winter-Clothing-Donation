import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebsae/firebase.config';

const UpdateProfile = () => {
  const { user } = useContext(authContext); // Get the current user info
  const navigate = useNavigate();

  // States for form inputs
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = async () => {
    if (!name || !photoURL) {
      setError('All fields are required');
      return;
    }

    try {
      setError('');
      setMessage('');

      // Update profile information in Firebase
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });

      // Show success message
      setMessage('Profile updated successfully!');

      // Navigate to the dashboard after 2 seconds
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center p-10">
      <div className="rounded-lg p-10 w-full max-w-sm bg-gradient-to-r from-blue-100 to-purple-100 shadow-xl shadow-orange-300">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Update Profile
        </h2>

        <div className="mb-4">
          <label className="block text-md font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-md font-semibold text-gray-700">
            Photo URL
          </label>
          <input
            type="text"
            value={photoURL}
            onChange={e => setPhotoURL(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter your photo URL"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {message && <p className="text-green-500 text-sm mb-4">{message}</p>}

        <button
          onClick={handleUpdate}
          className="btn btn-primary w-full bg-gray-700 hover:bg-black text-white font-semibold py-2 rounded-lg"
        >
          Update Information
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
