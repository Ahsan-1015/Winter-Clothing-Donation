const SubscribeForm = () => {
  return (
    <div className="flex items-center w-full ">
      <div className="flex items-center bg-white rounded-xl shadow-md overflow-hidden  w-full ">
        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow px-2 lg:px-4 py-2 text-sm md:text-base text-gray-600 outline-none rounded-l-full"
        />
        {/* Subscribe Button */}
        <button className=" px-6 py-4 bg-gradient-to-r from-yellow-300 via-teal-300 to-teal-500 text-black font-semibold rounded-r-xl">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeForm;
