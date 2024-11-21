import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  // State to store testimonials data
  const [testimonials, setTestimonials] = useState([]);

  // Fetch testimonials data
  useEffect(() => {
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

  // Initialize and re-initialize AOS for dynamic content
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Enable repeat on scroll
      mirror: true, // Trigger animations when scrolling back
      offset: 120, // Offset from the top of the viewport
    });

    // Re-initialize AOS whenever content updates
    AOS.refresh();
  }, [testimonials]);

  return (
    <section
      data-aos="zoom-out-up"
      className="animate__animated animate__zoomInUp py-16 bg-gradient-to-b from-blue-100 via-white to-blue-100 my-20 rounded-2xl"
    >
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-bold text-teal-700 mb-8">
          What People Are Saying ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(
            ({ id, name, role, message, image, rating, date }) => (
              <div
                data-aos="flip-left"
                data-aos-duration="1500"
                data-aos-delay="200"
                data-aos-offset="300"
                key={id}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-orange-400"
                style={{
                  backgroundImage:
                    'url("https://www.transparenttextures.com/patterns/light-wool.png"), linear-gradient(to bottom, #e0f7fa, #ffffff)',
                  backgroundSize: 'cover',
                }}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-20 h-20 rounded-full border-2 mb-4 object-cover border-teal-600"
                />
                <h3 className="text-xl font-semibold text-teal-700">{name}</h3>
                <p className="text-gray-500 text-sm mb-2">{role}</p>
                <p className="text-gray-700 italic">{`"${message}"`}</p>
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
