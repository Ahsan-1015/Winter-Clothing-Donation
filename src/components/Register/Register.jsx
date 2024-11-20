// import React, { useContext, useState } from 'react';
// import { authContext } from '../AuthProvider/AuthProvider';
// import { Link } from 'react-router-dom';

// const Register = () => {
//   const { handleRegister, manageProfile } = useContext(authContext);
//   const [error, setError] = useState('');
//   const handleSubmit = e => {
//     e.preventDefault();
//     setError('');
//     const name = e.target.name.value;
//     const image = e.target.image.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const conPassword = e.target.conPassword.value;
//     if (password.length < 6) {
//       setError('Password must contain at least 6 characters');
//       return;
//     }
//     if (password !== conPassword) {
//       setError("Passwords didn't match");
//       return;
//     }
//     if (!/[a-z]/.test(password)) {
//       setError('Password must contain at least one lowercase letter');
//       return;
//     }
//     if (!/[A-Z]/.test(password)) {
//       setError('Password must contain at least one uppercase letter');
//       return;
//     }
//     console.log(name, image, email, password, conPassword);

//     handleRegister(email, password).then(res => {
//       manageProfile(name, image);
//     });
//   };
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <div>
//           Name{' '}
//           <input
//             type="text"
//             placeholder="Type here"
//             className="input input-bordered input-error w-full max-w-xs"
//             name="name"
//             required
//           />
//         </div>
//         <div>
//           Image
//           <input
//             type="text"
//             placeholder="Type here"
//             className="input input-bordered input-error w-full max-w-xs"
//             name="image"
//             required
//           />
//         </div>
//         <div>
//           Email{' '}
//           <input
//             type="text"
//             placeholder="Type here"
//             className="input input-bordered input-error w-full max-w-xs"
//             name="email"
//             required
//           />
//         </div>
//         <div>
//           Password{' '}
//           <input
//             type="text"
//             placeholder="Type here"
//             className="input input-bordered input-error w-full max-w-xs"
//             name="password"
//             required
//           />
//         </div>
//         <div>
//           Confirm Password
//           <input
//             type="text"
//             placeholder="Type here"
//             className="input input-bordered input-error w-full max-w-xs"
//             name="conPassword"
//             required
//           />
//         </div>
//         <button type="submit">Register</button>
//         <Link to="/login">
//           <button className="btn">login</button>
//         </Link>
//       </form>
//       {error && <p className="text-red-500">{error}</p>}
//     </div>
//   );
// };

// export default Register;
import { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {
  const { handleRegister, manageProfile, handleGoogleLogin } =
    useContext(authContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;

    // Password validation
    if (password.length < 6) {
      setError('Password must contain at least 6 characters');
      return;
    }
    if (password !== conPassword) {
      setError("Passwords didn't match");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError('Password must contain at least one lowercase letter');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError('Password must contain at least one uppercase letter');
      return;
    }

    // Registration and navigation
    handleRegister(email, password)
      .then(() => {
        manageProfile(name, image);
        navigate('/'); // Redirect to home page
      })
      .catch(err => {
        setError(err.message);
      });
  };

  const googleLoginHandler = () => {
    handleGoogleLogin().then(() => {
      navigate('/');
    });
  };

  return (
    <div className="flex justify-center items-center py-2 md:py-10  ">
      <div className="card bg-gradient-to-r from-blue-100  to-purple-100 shadow-xl shadow-orange-300  hover:shadow-2xl hover:shadow-emerald-600 hover:ease-in-out duration-300 hover:scale-105  rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg  font-semibold text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-md font-semibold text-gray-600">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-md font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-md font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-md font-semibold text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              name="conPassword"
              placeholder="Confirm Password"
              className="input input-bordered w-full"
              required
            />
          </div>
          {error && <p className="text-red-500 text-md mb-4">{error}</p>}
          <button
            type="submit"
            className="btn btn-primary w-full bg-gray-700 hover:bg-black text-white text-lg  transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-base text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
        <div
          onClick={googleLoginHandler}
          className="mt-6 cursor-pointer animate__animated animate__backInLeft"
        >
          <div className="flex gap-2 bg-red-500 hover:bg-red-600 w-full items-center justify-center py-2 text-white font-semibold rounded-lg transition duration-300">
            <FaGoogle className="text-2xl font-extrabold" />
            <button>Log In with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
