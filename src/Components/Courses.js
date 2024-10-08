import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper core and required modules
import { Pagination, Autoplay } from 'swiper/modules'; // Import core modules from 'swiper/modules'
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Import Pagination styles

// Import your images
import img1 from '../Assets/img1.svg';
import img2 from '../Assets/img2.svg';
import img3 from '../Assets/img3.svg';
import img4 from '../Assets/img4.svg';
import img5 from '../Assets/img5.svg';
import img6 from '../Assets/img6.svg';
import img7 from '../Assets/img7.svg';
import img8 from '../Assets/img8.svg';

import img9 from '../Assets/img9.svg';
import fire from '../Assets/fire.png';
import background_img from '../Assets/background_img.svg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function Courses() {
  return (
    <section>
      {/* Foreground Section */}
      <div className="flex justify-center mt-8 items-center relative z-10">
        <img className="fire-image" src={fire} alt="Fire Icon" />
        <h1 className="font-bold text-4xl">Trending Courses</h1>
      </div>

      {/* Slider with Background Image */}
      <div className="slider-container relative">
        {/* Background Image */}
        <div className="background-image-container">
          <img className="background-image" src={background_img} alt="Background" />
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={30}  // Gap between images
          slidesPerView={3}  // Show 3 slides at a time
          centeredSlides={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 2000 }}  // Move every 2 seconds
          modules={[Pagination, Autoplay]}  // Register modules
          className="swiper-container"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="slide">
              <img src={image} alt={`Slide ${index}`} className="slide-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Courses;
