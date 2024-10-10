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
// import Compass from '../Assets/compass.png';
// import Group from '../Assets/Group.png';
// import Alarm from '../Assets/alarm.png';
// import Percent from '../Assets/percent.png';
import background_img from '../Assets/background_img.svg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function Courses() {
  return (
    <section>
      {/* Foreground Section */}
      <div className="flex justify-center mt-8 items-center relative z-10 left-20">
        <img className="fire-image" src={fire} alt="Fire Icon" />
        <h1 className="font-bold text-4xl">Trending Courses</h1>
      </div>

      {/* Slider with Background Image */}
      <div className="slider-container relative">
        {/* Background Image */}
        <div className="background-image-container">
          <img className="background-image" src={background_img} alt="Background" />
          
        </div>
        {/* <img className="absolute top-20 right-0 h-auto object-cover z-10 hidden lg:block" src={Percent} alt="" />
          <img className="absolute bottom-20 left-80 h-auto object-cover z-10 hidden lg:block" src={Compass} alt="" />
          <img className="absolute bottom-20 left-80 h-auto object-cover z-10 hidden lg:block" src={Alarm} alt="" />
         
          <img className="absolute bottom-7 right-1/3 h-auto object-cover z-10 hidden lg:block" src={Group} alt="" /> */}



        {/* Swiper Slider */}
        <Swiper
          spaceBetween={30}  // Gap between images
          centeredSlides={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 2000 }}  // Move every 2 seconds
          modules={[Pagination, Autoplay]}  // Register modules
          breakpoints={{
            // Desktop view: 3 slides per view
            1024: {
              slidesPerView: 3,
            },
            // Tablet view: 2 slides per view
            768: {
              slidesPerView: 2,
            },
            // Mobile view: 1 slide per view
            480: {
              slidesPerView: 1,
            },
          }}
          className="swiper-container"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="slide">
              <img src={image} alt={`Slide ${index}`} className="slide-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="w-full lg:w-1/2 flex justify-center relative mb-8 lg:mb-0">
        <div className="relative w-full h-auto z-0">
          <img className="w-full object-cover background-image " src={background_img} alt="" />
        
          <img className="absolute top-60 left-10 h-auto object-cover z-10 hidden lg:block" src={Percent} alt="" />
          <img className="absolute bottom-20 left-80 h-auto object-cover z-10 hidden lg:block" src={Compass} alt="" />
          <img className="absolute bottom-20 left-80 h-auto object-cover z-10 hidden lg:block" src={Alarm} alt="" />
         
          <img className="absolute bottom-7 right-1/3 h-auto object-cover z-10 hidden lg:block" src={Group} alt="" />
        </div>
      </div> */}
    </section>
  );
}

export default Courses;
