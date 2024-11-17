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
      <div className="relative w-full mt-20 bg-no-repeat bg-contain font-hero-poppins bg-origin-border " style={{ backgroundImage: `url(${pathBg})` }}>
        <div className=" xl:ml-[43%] lg:ml-[40%] ml-[26%]  font-bold text-xls sm:ml-[40%] ">
          <button className="flex flex-col items-center p-2 font-bold font-hero-poppins text-black border border-gray-700 rounded-full bg-slate-300 w-52 2xl:w-[30%] 2xl:p-6 2xl:text-2xl ">
            Skilled Introduce
          </button>

        </div>
        <div className="flex items-center justify-center h-full mt-8 overflow-hidden">
          <div className="text-center lg:mt-5">
            <h2 className="text-2xl font-bold lg:text-2xl 2xl:text-5xl 2xl:leading-normal font-hero-poppins">
              Our Top Class & Professional <br /> Instructors In One Place
            </h2>
            <div className="flex justify-center space-x-12">
              <div className="flex flex-col overflow-hidden">
                <div className="flex space-x-10">
                  {instructors
                    .slice(currentIndex, currentIndex + (windowWidth < 768 ? 1 : 2))
                    .map((instructor, index) => (
                      <div key={index} className="flex flex-col items-center mt-10 ml-20">
                        <div className="relative mt-16 right-10">
                          <img
                            src={bg_dm}
                            alt="bg_dm"
                            className="w-full h-auto mb-16 2xl:mb-20"
                          />
                          <div className="absolute inset-0 flex flex-col items-center justify-end ">
                            <img
                              src={instructor.img}
                              alt={instructor.name}
                              className="mx-auto lg:h-96 lg:w-72"
                            />
                            <h3 className="text-2xl font-bold 2xl:text-2xl">{instructor.name}</h3>
                            <p className="font-bold text-yellow-500 2xl:text-2xl">{instructor.role}</p>
                          </div>

                        </div>

                      </div>

                    ))}

                </div>

                {/* Image scroll */}
                
              </div>
            </div>
          </div>

        </div>
        <div className="lg:w-[80%] xl:w-[100%] w-[50%] border border-slate-400 rounded-full   max-w-xl mx-auto relative bg-gray-200 mt-14 xl:p-6 2xl:py-10">
      
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
                    className="relative"
                  >
                    <SwiperSlide className="flex justify-center">
                      <img
                        src={Image1}
                        alt="Person 1"
                        className="object-cover h-20 border-2 border-transparent rounded-full w-14 2xl:w-24 2xl:h-24 "
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center">
                      <img
                        src={Image1

                        }
                        alt="Person 2"
                        className="object-cover h-20 border-2 border-transparent rounded-full w-14 2xl:w-24 2xl:h-24"
                      />
                    </SwiperSlide>
                    
                    <SwiperSlide className="flex justify-center">
                      <img
                        src={Image1}
                        alt="Person 3"
                        className="object-cover h-20 border-2 border-transparent rounded-full w-14 2xl:w-24 2xl:h-24"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center">
                      <img
                        src={Image1}
                        alt="Person 4"
                        className="object-cover h-20 border-2 border-transparent rounded-full w-14 2xl:w-24 2xl:h-24"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center">
                      <img
                        src={Image1}
                        alt="Person 5"
                        className="object-cover h-20 border-2 border-transparent rounded-full w-14 2xl:w-24 2xl:h-24"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center">
                      <img
                        src={Image1}
                        alt="Person 3"
                        className="object-cover h-20 border-2 border-transparent rounded-full w-14 2xl:w-24 2xl:h-24"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center">
                      <img
                        src={Image1}
                        alt="Person 4"
                        className="object-cover h-20 border-2 border-transparent rounded-full w-14 2xl:w-24 2xl:h-24"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center">
                      <img
                        src={Image1}
                        alt="Person 5"
                        className="object-cover h-20 border-2 border-transparent rounded-full w-14 2xl:w-24 2xl:h-24"
                      />
                    </SwiperSlide>
                  </Swiper>

                  {/* Custom Navigation Buttons */}
                  <button
                    ref={prevRef}
                    className="absolute z-10 p-1 text-white transform -translate-y-1/2 bg-black rounded-full swiper-button-prev -left-10 top-1/2 "
                  >
                    &larr;
                  </button>
                  <button
                    ref={nextRef}
                    className="absolute z-10 p-1 text-white transform -translate-y-1/2 bg-black rounded-full swiper-button-next -right-10 top-1/2"
                  >
                    &rarr;
                  </button>

                  
                </div>
      </div>
  


  )
}

export default Instructors;







