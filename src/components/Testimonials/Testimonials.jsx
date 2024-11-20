import { useState, useEffect } from 'react';

const Testimonials = () => {
  // State to store testimonials data
  const [testimonials, setTestimonials] = useState([]);

  // Simulate fetching JSON data
  useEffect(() => {
    // Fetch data from local JSON file
    const fetchData = async () => {
      try {
        const response = await fetch('testimonials.json');
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-200 to-white my-20 rounded-2xl">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-8">
          What People Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(
            ({ id, name, role, message, image, rating, date }) => (
              <div
                key={id}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-orange-400"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-20 h-20 rounded-full border-2 mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-blue-700">{name}</h3>
                <p className="text-gray-500 text-sm mb-2">{role}</p>
                <p className="text-gray-700 italic">"{message}"</p>
                <p className="mt-2 text-gray-500 text-sm">⭐ {rating} / 5</p>
                <p className="text-gray-400 text-xs">
                  {new Date(date).toDateString()}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
