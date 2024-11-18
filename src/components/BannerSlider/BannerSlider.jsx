import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BannerContent = [
  {
    id: 1,
    title: 'Winter Wonderland',
    subtitle: 'Feel the chill of winter',
    text: 'Experience the serene beauty of snow-covered landscapes and crisp winter air.',
    image:
      'https://media.gettyimages.com/id/1804173462/photo/team-selfie-at-football-training.jpg?s=612x612&w=0&k=20&c=6LzdfoJ6-I6f1w7hWzSGeq7_UUEyWnVwxhYwga_yUSM=',
  },
  {
    id: 2,
    title: 'Cozy Evenings',
    subtitle: 'Warm up this winter',
    text: 'Curl up by the fireplace with a hot drink and enjoy the cozy moments.',
    image:
      'https://media.gettyimages.com/id/1206426896/photo/cozy-winter-evening.jpg?s=612x612&w=0&k=20&c=3m2HCICUkYPLNkUOUx10v2Lz9sqQLalaxY5avExH6Bw=',
  },
  {
    id: 3,
    title: 'Adventure Awaits',
    subtitle: 'Explore the snowy outdoors',
    text: 'Grab your gear and head out for some fun in the snow.',
    image:
      'https://media.gettyimages.com/id/184893211/photo/snowy-adventure.jpg?s=612x612&w=0&k=20&c=qxF3Z1_90Lf7IjFMmFP6LkFb8jqR23ka1D9GyTCLuaU=',
  },
];

const BannerSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      {BannerContent.map(slide => (
        <SwiperSlide key={slide.id}>
          <div className=" h- md:h-[540px] w-full relative border-2  rounded-2xl">
            <img
              className="w-full h-full object-cover rounded-2xl border-2 "
              src={slide.image}
              alt={slide.title}
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white text-center">
              <h2
                className="text-3xl font-bold mb-2"
                data-swiper-parallax="-300"
              >
                {slide.title}
              </h2>
              <h3
                className="text-xl font-medium mb-4"
                data-swiper-parallax="-200"
              >
                {slide.subtitle}
              </h3>
              <p className="max-w-md" data-swiper-parallax="-100">
                {slide.text}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
