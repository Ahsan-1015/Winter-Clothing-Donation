import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import { Navigation, Thumbs, EffectFade, Autoplay } from 'swiper/modules';

const Slider = () => {
  const [activeThumb, setActiveThumb] = React.useState(null);

  // Example slides array
  const slides = [
    {
      id: 1,
      title: 'House 1',
      description: 'White and brown concrete building.',
      image: 'https://via.placeholder.com/1000x600/222222/ffffff?text=House+1',
      thumb: 'https://via.placeholder.com/150x100/222222/ffffff?text=1',
    },
    {
      id: 2,
      title: 'House 2',
      description: 'Modern villa with pool.',
      image: 'https://via.placeholder.com/1000x600/555555/ffffff?text=House+2',
      thumb: 'https://via.placeholder.com/150x100/555555/ffffff?text=2',
    },
    {
      id: 3,
      title: 'House 3',
      description: 'Luxurious glass-front house.',
      image: 'https://via.placeholder.com/1000x600/888888/ffffff?text=House+3',
      thumb: 'https://via.placeholder.com/150x100/888888/ffffff?text=3',
    },
    {
      id: 4,
      title: 'House 4',
      description: 'Scenic countryside house.',
      image: 'https://via.placeholder.com/1000x600/444444/ffffff?text=House+4',
      thumb: 'https://via.placeholder.com/150x100/444444/ffffff?text=4',
    },
  ];

  return (
    <div className="relative">
      {/* Main Slider */}
      <Swiper
        modules={[Navigation, Thumbs, EffectFade, Autoplay]}
        effect="fade"
        spaceBetween={10}
        navigation
        autoplay={{ delay: 3000 }}
        thumbs={{ swiper: activeThumb }}
        className="w-full h-[600px] rounded-lg overflow-hidden"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Text Content */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent text-white p-8 flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Navigation */}
      <div className="absolute inset-y-0 right-4 flex flex-col space-y-2 z-10">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setActiveThumb}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress
          direction="vertical"
          className="h-[400px]"
        >
          {slides.map(slide => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.thumb}
                alt={`Thumbnail ${slide.id}`}
                className="cursor-pointer rounded-md border border-gray-300 hover:border-white"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
