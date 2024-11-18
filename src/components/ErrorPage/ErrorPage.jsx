import { useLocation } from 'react-router-dom';

const ErrorPage = () => {
  const location = useLocation();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">
          404 - Page Not Found
        </h1>
        <p className="text-lg mt-4">
          Sorry, we couldn't find the page <strong>{location.pathname}</strong>.
        </p>
        <a href="/" className="text-blue-500 underline mt-6">
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
