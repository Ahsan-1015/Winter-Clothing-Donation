import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './BannerSlide.css';

// Import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BannerSlide() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out', // Animation easing
      offset: 50, // Trigger animations 50px before elements appear
      once: true, // Animation occurs only once
    });
  }, []);

  return (
    <>
      <div className="h-[220px] lg:h-[550px] rounded-2xl">
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative">
              {/* Image with smooth blur */}
              <div className="relative">
                <img
                  className="rounded-2xl h-[550px] w-full object-cover"
                  src="https://media.gettyimages.com/id/596815111/photo/college-volunteers-hosting-a-food-drive-in-campus.jpg?s=612x612&w=0&k=20&c=CMO5aiWIOEyxdn0BaGjzGVf4c1niEcthk8zhGHhmauM="
                  alt="Slide 1"
                />

                {/* Smooth blur overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  style={{
                    filter: 'blur(4px) brightness(0.6)',
                    WebkitBackdropFilter: 'blur(4px)', // Left side 2px
                    backdropFilter: 'blur(4px)',
                    maskImage:
                      'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,1), rgba(0,0,0,0.5), rgba(0,0,0,0))',
                    WebkitMaskImage:
                      'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.7), rgba(0,0,0,0.25), rgba(0,0,0,0))',
                  }}
                ></div>
              </div>

              {/* Text Content */}
              <div
                data-aos="fade-right"
                className="absolute w-11/12 lg:w-1/2 top-10 lg:top-64 left-5 lg:left-20 text-white z-10"
              >
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  CLOTHES DONATION
                </h1>
                <p className="mt-4 text-sm lg:text-base text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, dolor nulla dolores incidunt quaerat enim tenetur velit
                  perferendis, placeat laudantium expedita architecto maxime
                  minima dolorum magni unde consequatur officiis accusamus.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative rounded-2xl ">
              {/* Image with backdrop blur and brightness */}
              <img
                className="rounded-2xl h-[550px] w-full object-cover bg-white/40"
                style={{
                  filter: 'blur(2px) brightness(0.6)', // Fallback if Tailwind doesn't work
                  WebkitBackdropFilter: 'blur(4px) brightness(0.6)', // Safari support
                  backdropFilter: 'blur(4px) brightness(0.6)',
                }}
                src="https://plus.unsplash.com/premium_photo-1661963855053-eb37e5ce9e2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGglMjBkb25hdGUlMjBwb29yJTIwY2hpbGQlMjB3aW50ZXJ8ZW58MHx8MHx8fDA%3D"
                alt="Slide 1"
              />

              {/* Text Content with AOS Animation */}
              <div
                data-aos="fade-right"
                className="absolute w-11/12 lg:w-1/2 top-10 lg:top-64 left-5 lg:left-20 text-white"
              >
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  CLOTHES DONATION
                </h1>
                <p className="mt-4 text-sm lg:text-base text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, dolor nulla dolores incidunt quaerat enim tenetur velit
                  perferendis, placeat laudantium expedita architecto maxime
                  minima dolorum magni unde consequatur officiis accusamus.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative rounded-2xl ">
              {/* Image with backdrop blur and brightness */}
              <img
                className="rounded-2xl h-[550px] w-full object-cover bg-white/40"
                style={{
                  filter: 'blur(2px) brightness(0.6)', // Fallback if Tailwind doesn't work
                  WebkitBackdropFilter: 'blur(4px) brightness(0.6)', // Safari support
                  backdropFilter: 'blur(4px) brightness(0.6)',
                }}
                src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2015/12/soundofhope-600x400.jpg"
                alt="Slide 1"
              />

              {/* Text Content with AOS Animation */}
              <div
                data-aos="fade-right"
                className="absolute w-11/12 lg:w-1/2 top-10 lg:top-64 left-5 lg:left-20 text-white"
              >
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  CLOTHES DONATION
                </h1>
                <p className="mt-4 text-sm lg:text-base text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, dolor nulla dolores incidunt quaerat enim tenetur velit
                  perferendis, placeat laudantium expedita architecto maxime
                  minima dolorum magni unde consequatur officiis accusamus.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
