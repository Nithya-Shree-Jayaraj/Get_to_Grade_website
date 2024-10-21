import React, { useState, useEffect, useRef } from "react";
import pathBg from '../Assets/path_bg.png';
import bg_dm from '../Assets/bg_dm.png';
import allimg from '../Assets/allimg.png';

// import ImageSlider from "./ImageSlider";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import your images
import Image1 from '../Assets/Image1.png'

const instructors = [
  { name: 'William Hope', role: 'Digital Marketing', img: allimg },
  { name: 'Jay Selvan', role: 'Video Editor', img: allimg },
  { name: 'William Hope', role: 'ADV GD ', img: allimg },
  { name: 'Jay Selvan', role: 'Graphic Designer', img: allimg },
  { name: 'William Hope', role: 'Full stack', img: allimg },
  { name: 'Jay Selvan', role: 'Front-end ', img: allimg },
  { name: 'William Hope', role: 'Back-end', img: allimg },
  { name: 'Jay Selvan', role: 'Business', img: allimg },
  { name: 'William Hope', role: 'Data science', img: allimg },
  { name: 'Jay Selvan', role: 'Photograghy', img: allimg },
  { name: 'William Hope', role: 'cloud', img: allimg },
  { name: 'Jay Selvan', role: 'UI & UX', img: allimg },

];

const Instructors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Refs for the custom navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const updateIndex = () => {
    const increment = windowWidth < 768 ? 1 : 2;
    setCurrentIndex((prevIndex) => (prevIndex + increment) % instructors.length);
  };

  useEffect(() => {
    const interval = setInterval(updateIndex, 1000);
    return () => clearInterval(interval);
  }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // Set up custom navigation buttons after component is mounted
  useEffect(() => {
    // Assign the buttons after the first render
    if (prevRef.current && nextRef.current) {
      prevRef.current.classList.add('swiper-button-prev-custom');
      nextRef.current.classList.add('swiper-button-next-custom');
    }
  }, []);

  return (

    <div className="relative w-full h-screen bg-no-repeat bg-origin-border bg-contain  mt-12 " style={{ backgroundImage: `url(${pathBg})` }}>
      {/* Start_enroll Image - Positioned Below the Flowchart */}
      {/* <div className=" justify-center  ">
        <img
          className="w-auto h-auto "
          src={Start_enroll}
          alt="Enroll Now"
        />
      </div> */}
      <div className="absolute z-10 lg:ml-[45%] md:ml-[60%] ml-20   font-bold text-xls">
        <button className="flex flex-col items-center border border-gray-700 bg-slate-300 rounded-full w-52 p-2 font-bold text-black">
          Skilled Introduce
        </button>
       
      </div>
      <div className="flex justify-center items-center h-full overflow-hidden">
        <div className="text-center mt-0 md:mt-0 lg:mt-0">
          <h2 className="text-2xl md:text-3xl font-bold md:mt-5 lg:-mt-64 mt-10">
            Our Top Class & Professional <br /> Instructors In One Place
          </h2>
          <div className="flex justify-center  space-x-12">
            <div className="flex flex-col overflow-hidden">
              <div className="flex  space-x-10">
                {instructors
                  .slice(currentIndex, currentIndex + (windowWidth < 768 ? 1 : 2))
                  .map((instructor, index) => (
                    <div key={index} className="flex flex-col items-center mt-10 ml-20">
                      <div className="relative mt-20">
                        <img
                          src={bg_dm}
                          alt="bg_dm"
                          className="w-full h-auto mb-16"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-end ">
                          <img
                            src={instructor.img}
                            alt={instructor.name}
                            className="md:h-96 md:w-72 mx-auto"
                          />
                          <h3 className="text-2xl font-bold ">{instructor.name}</h3>
                          <p className="text-yellow-500 font-bold">{instructor.role}</p>
                        </div>

                      </div>

                    </div>

                  ))}
                
              </div>

              {/* Image scroll */}
              <div className="md:w-[80%] lg:w-[100%] w-[50%] border border-slate-400 rounded-full  mt-16 max-w-lg mx-auto relative">
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                      prevEl: prevRef.current,
                      nextEl: nextRef.current,
                    }}
                    onInit={(swiper) => {
                      // Link swiper navigation to the button refs
                      swiper.params.navigation.prevEl = prevRef.current;
                      swiper.params.navigation.nextEl = nextRef.current;
                      swiper.navigation.update();
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }} // 3s autoplay
                    spaceBetween={10}
                    loop={true}
                    breakpoints={{
                      // Mobile view: 3 slides per view
                      0: {
                        slidesPerView: 3,
                      },
                      // Tablet view: 5 slides per view
                      768: {
                        slidesPerView: 5,
                      },
                    }}
                    className="relative "
                  >
                    <SwiperSlide className="flex justify-center">
                      <img
                        src={Image1}
                        alt="Person 1"
                        className="w-20 h-20 rounded-full object-cover border-2 border-transparent hover:border-purple-600"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center">
                      <img
                        src={Image1

                        }
                        alt="Person 2"
                        className="w-20 h-20 rounded-full object-cover border-2 border-transparent hover:border-purple-600"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center">
                      <img
                        src={Image1}
                        alt="Person 3"
                        className="w-20 h-20 rounded-full object-cover border-2 border-transparent hover:border-purple-600"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center">
                      <img
                        src={Image1}
                        alt="Person 4"
                        className="w-20 h-20 rounded-full object-cover border-2 border-transparent hover:border-purple-600"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center">
                      <img
                        src={Image1}
                        alt="Person 5"
                        className="w-20 h-20 rounded-full object-cover border-2 border-transparent hover:border-purple-600"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center">
                      <img
                        src={Image1}
                        alt="Person 3"
                        className="w-20 h-20 rounded-full object-cover border-2 border-transparent hover:border-purple-600"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center">
                      <img
                        src={Image1}
                        alt="Person 4"
                        className="w-20 h-20 rounded-full object-cover border-2 border-transparent hover:border-purple-600"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center">
                      <img
                        src={Image1}
                        alt="Person 5"
                        className="w-20 h-20 rounded-full object-cover border-2 border-transparent hover:border-purple-600"
                      />
                    </SwiperSlide>
                  </Swiper>

                  {/* Custom Navigation Buttons */}
                  <button
                    ref={prevRef}
                    className="swiper-button-prev absolute -left-10 top-1/2 transform -translate-y-1/2 bg-black p-1 rounded-full text-white z-10"
                  >
                    &larr;
                  </button>
                  <button
                    ref={nextRef}
                    className="swiper-button-next absolute -right-10 top-1/2 transform -translate-y-1/2 bg-black p-1 rounded-full text-white z-10"
                  >
                    &rarr;
                  </button>
                  

                </div>
            </div>
          </div>
        </div>

      </div>



      

      



    </div>

  )
}

export default Instructors;







