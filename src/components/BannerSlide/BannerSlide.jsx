import { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BannerSlide() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle slide change
  const handleSlideChange = index => {
    setActiveIndex(index);
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out', // Animation easing
      offset: 50, // Trigger animations 50px before elements appear
      once: true, // Animation occurs only once
    });
  }, []);

  const slides = [
    {
      image:
        'https://media.gettyimages.com/id/596815111/photo/college-volunteers-hosting-a-food-drive-in-campus.jpg?s=612x612&w=0&k=20&c=CMO5aiWIOEyxdn0BaGjzGVf4c1niEcthk8zhGHhmauM=',
      title: 'CLOTHES DONATION DRIVE',
      description:
        'Join our initiative to provide clothes to those in need. Your donation can bring warmth and hope to many.',
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1661963855053-eb37e5ce9e2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGglMjBkb25hdGUlMjBwb29yJTIwY2hpbGQlMjB3aW50ZXJ8ZW58MHx8MHx8fDA%3D',
      title: 'MAKE A DIFFERENCE',
      description:
        "Your donation helps provide warmth to those suffering from the cold. Every item counts in making someone's day better.",
    },
    {
      image:
        'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2015/12/soundofhope-600x400.jpg',
      title: 'GIVE WITH A PURPOSE',
      description:
        'Help us spread kindness and generosity. Your donation provides much-needed support to individuals and families.',
    },
  ];

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        autoplay={{
          delay: 3000, // Automatically change slide every 3 seconds
          disableOnInteraction: false, // Keep autoplay running even if the user interacts with the slider
        }}
        pagination={{
          clickable: true,
        }}
        onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
        modules={[EffectFade, Navigation, Pagination, Autoplay]} // Add Autoplay module
        className="mySwiper"
      >
        {/* Dynamic Slides */}
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative cursor-pointer"
              onClick={() => handleSlideChange(index)} // Change slide when clicked
            >
              <img
                className="rounded-2xl h-[550px] w-full object-cover"
                src={slide.image}
                alt={`Slide ${index + 1}`}
              />
              <div
                data-aos="fade-right"
                className="absolute w-11/12 lg:w-1/2 top-10 lg:top-64 left-5 lg:left-20 text-white z-10"
              >
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  {slide.title}
                </h1>
                <p className="mt-4 text-sm lg:text-base text-gray-300">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Profile images overlay - Positioned at bottom-right using flexbox */}
      <div
        className="absolute flex space-x-3 bottom-20 right-20 z-20 animate__pulse"
        style={{ transform: 'translateY(50%)' }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)} // Change slide on image click
            className={`cursor-pointer rounded-3xl border-t-8 border-l-8 border-b-4 ${
              activeIndex === index ? 'border-teal-400' : 'border-transparent'
            }`}
            style={{
              transition: 'all 0.3s ease',
              width: '100px', // Adjust width and height for profile images
              height: '100px',
            }}
          >
            <img
              className="w-full h-full rounded-3xl object-cover"
              src={slide.image}
              alt={`Profile ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
