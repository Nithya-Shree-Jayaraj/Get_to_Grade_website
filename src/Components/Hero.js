import wordImage from '../Assets/word.png';
import Gimg from '../Assets/Girl_img.png';
import DownArrow from '../Assets/DownArrow.png';
import UpArrow from '../Assets/UpArrow.png';
import plant from '../Assets/plant.png';
import Enroll from '../Assets/Enrow_now.png';
import ytube from '../Assets/utube_icon.png';
// import HorizontalScroll from './HorizontalScroll';


import categorie from '../Assets/categorie-icon.png';
import categorie2 from '../Assets/categorie-icon1.png';
import Marquee from 'react-fast-marquee';


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper core and required modules          
import { Pagination, Autoplay } from 'swiper/modules'; // Import core modules from 'swiper/modules'
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Import Pagination styles       
import CareerJourney from '../Components/CareerJorney';

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
import Percent from '../Assets/percent.png';
import Compass from '../Assets/compass.png';
import Alarm from '../Assets/alarm.png';
import Group from '../Assets/Group.png';



const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Hero() {
      return (

            <section >
                  <section className=" bg-red-500">

                        <div className="w-full overflow-hidden bg-gray-100 py-4">
                              <Marquee gradient={false} direction="right" speed={50}>
                                    <div className="flex space-x-4 items-center">
                                          <img src={categorie} alt="Categorie" className="w-auto h-12" />
                                          <button className="w-auto border border-slate-400 rounded-lg px-4 py-2">Front-end Development</button>
                                          <button className="w-auto border border-slate-400 rounded-lg px-4 py-2">Back-end Development</button>
                                          <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">Full-Stack Development</button>
                                          <img src={categorie2} alt="Categorie 2" className="w-auto h-12" />
                                          <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">UI & UX</button>
                                          <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">Graphic Designing</button>
                                          <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">Adv Graphic Designing</button>
                                          <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">Video Graphics</button>
                                          <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">Video Editing</button>
                                          <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">Business Management</button>
                                          <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">Digital Marketing</button>
                                          <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">Communication</button>
                                          <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">Placement Training</button>
                                    </div>
                              </Marquee>
                        </div>

                        {/* Main container for the content */}
                        <div className="mx-4 lg:mx-24 min-w-fit flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between relative">

                              {/* Image container, first in mobile view */}
                              <div className="w-full lg:w-1/2 flex justify-center relative mb-8 lg:mb-0">
                                    <div className="relative w-full h-auto z-0">
                                          <img className="w-full object-cover " src={Gimg} alt="" />
                                          {/* DownArrow and plant images */}
                                          <img className="absolute top-64 left-8  md:top-52 md:left-2 h-auto object-cover z-10 hidden lg:block" src={DownArrow} alt="" />
                                          <img className="absolute md:bottom-36 md:-left-32 h-auto object-cover z-10 hidden lg:block" src={plant} alt="" />
                                          {/* UpArrow image, hidden on mobile */}
                                          <img className="absolute md:bottom-20 md:right-2/3 h-auto object-cover z-10 hidden lg:block" src={UpArrow} alt="" />
                                    </div>
                              </div>

                              {/* Text content container */}
                              <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:relative">
                                    <img src={wordImage} alt="Word Image" className="w-full" />
                                    {/* <p className="font-semibold text-2xl mt-6">Take up to 5 days to evaluate your purchase.</p> */}
                                    <p className="text-gray-800 font-semibold text-lg mt-5 leading-relaxed">
                                          Education is not just about gaining knowledge, it’s
                                          about unlocking your potential.
                                    </p>
                                    <div className="flex mt-12 items-center">
                                          <img className="mr-4" src={Enroll} alt="Enroll Now" />
                                          <img className="h-20 mx-6 hidden lg:block" src={ytube} alt="YouTube Icon" />
                                          <a className="h-20 mt-5 font-bold underline hidden lg:block" href="#">Play Video</a>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section className="relative ">
                        <div className="relative">
                              {/* Foreground Section */}
                              <div className="flex justify-center items-center relative z-10 ">
                                    <img className=" absolute right-64 md:left-1/3 " src={fire} alt="Fire Icon" />
                                    <h1 className="font-bold sm:text-2xl  md:text-4xl text-center mt-5">Trending Course's</h1>
                              </div>

                              {/* Slider with Background Image */}
                              <div className="slider-container w-full h-screen relative">
                                    {/* Background Image */}
                                    <div className="background-image-container  absolute w-[100%] h-96 rounded-xl -z-10 top-[20vh] ">
                                          <img
                                                className="background-image  object-cover absolute w-[100%]  md:mt-20 "
                                                src={background_img}
                                                alt="Background"
                                          />
                                    </div>

                                    {/* Swiper Slider */}
                                    <Swiper
                                          spaceBetween={2}  // Gap between images
                                          centeredSlides={true}
                                          pagination={{ clickable: true }}
                                          loop={true}
                                          autoplay={{ delay: 2000 }}  // Move every 2 seconds
                                          modules={[Pagination, Autoplay]}  // Register modules
                                          breakpoints={{
                                                // Mobile view: 1 slide per view, centered
                                                480: {
                                                      slidesPerView: 1,
                                                      centeredSlides: true,  // This ensures the slide is centered on mobile view
                                                      pagination: false,
                                                },
                                                // Tablet view: 2 slides per view
                                                768: {
                                                      slidesPerView: 2,
                                                },
                                                // Desktop view: 3 slides per view
                                                1024: {
                                                      slidesPerView: 3,
                                                },
                                          }}
                                          className=" relative  bottom-44 md:w-auto md:h-auto z-10 overflow-visible md:bottom-40 "
                                    >
                                          {images.map((image, index) => (
                                                <SwiperSlide key={index} className="flex justify-center items-center h-80 ">
                                                      <img src={image} alt={`Slide ${index}`} className="w-96 h-80 mb-72 p-10 justify-center items-center  md:w-full md:h-[480px]  md:items-center md:object-cover md:mb-10  " />
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                        </div>

                        {/* Additional Images Section */}

                        <div className="relative  z-0 ">
                              {/* Display Percent Icon based on screen size */}
                              <img
                                    className="absolute bottom-80 right-60 h-auto object-cover z-10 hidden md:block "
                                    src={Percent}
                                    alt="Percent Icon"
                              />
                              {/* Display Compass Icon based on screen size */}
                              <img
                                    className="absolute bottom-96 right-32 h-auto object-cover z-10 hidden md:block "
                                    src={Compass}
                                    alt="Compass Icon"
                              />
                              {/* Display Alarm Icon based on screen size */}
                              <img
                                    // className="absolute md:top-10 right-44 h-40 w-40 object-cover z-10 sm:right-0 " 
                                    className="absolute  h-40 w-40 object-cover z-10  md:bottom-96 md:right-28 hidden md:block"
                                    src={Alarm}
                                    alt="Alarm Icon"
                              />
                              {/* Display Group Icon based on screen size */}
                              <img
                                    className="absolute bottom-80 left-60 h-auto w-16 object-cover z-10 hidden md:block "
                                    src={Group}
                                    alt="Group Icon"
                              />
                        </div>

                        <CareerJourney />

                  </section>


            </section>





      );
}
