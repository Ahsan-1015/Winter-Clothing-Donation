import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const MyProfile = () => {
  const { user, handleLogout } = useContext(authContext); // Access user and handleLogout
  const navigate = useNavigate();

  const handleUpdateProfile = () => {
    navigate('/update-profile'); // Navigate to the update profile page
  };

  return (
    <div>
      <h2>My Profile</h2>
      <div>
        <p>Name: {user?.displayName || 'N/A'}</p>
        <p>Email: {user?.email || 'N/A'}</p>
        <img src={user?.photoURL || 'default.jpg'} alt="User" />
        <button onClick={handleUpdateProfile}>Update Profile</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default MyProfile;
