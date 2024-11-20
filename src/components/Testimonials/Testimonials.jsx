import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Donor',
    message:
      'It feels amazing to know my contribution helped keep families warm this winter!',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    name: 'Ahmed Hossain',
    role: 'Beneficiary',
    message:
      'The winter jackets and blankets we received have made a huge difference for my family. Thank you!',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 3,
    name: 'Emily Carter',
    role: 'Donor',
    message:
      'This platform is so easy to use, and it’s fulfilling to see the impact of my donations.',
    image: 'https://via.placeholder.com/100',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-200 to-white my-20 rounded-2xl ">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-8">
          What People Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, role, message, image }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={image}
                alt={name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700">{name}</h3>
              <p className="text-gray-500 text-sm mb-4">{role}</p>
              <p className="text-gray-700 italic">"{message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
