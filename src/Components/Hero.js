import wordImage from '../Assets/word.png';
import Gimg from '../Assets/Girl_img.png';
import DownArrow from '../Assets/DownArrow.png';
import UpArrow from '../Assets/UpArrow.png';
import plant from '../Assets/plant.png';
import Enroll from '../Assets/Enrow_now.png';
import ytube from '../Assets/utube_icon.png';



// import categorie from '../Assets/categorie-icon.png';
// import categorie2 from '../Assets/categorie-icon1.png';
import corss from '../Assets/corss.png';
import corss1 from '../Assets/corss1.png';
import corss4 from '../Assets/corss4.png';
import corss5 from '../Assets/corss5.png';
import brand1 from '../Assets/brand1.png';
import Marquee from 'react-fast-marquee';


import start from '../Assets/start.png'; // This is for the start image



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
import Percent from '../Assets/percent.png';
import Compass from '../Assets/compass.png';
import Alarm from '../Assets/alarm.png';
import Group from '../Assets/Group.png';



import Start_arrow from '../Assets/Start_arrow.png'

// import pathBg from '../Assets/path_bg.png';                // Import the background image
// import bg_dm from '../Assets/bg_dm.png';
// import bg_js from '../Assets/bg_js.png';
// import allimg from '../Assets/allimg.png';

import Instructors from './Instructors';




const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Hero() {
      return (

            <section >
                  <section className=" ">

                        <div className="w-full overflow-hidden bg-gray-100 py-4">
                              <Marquee gradient={false} direction="left" speed={50}>
                                    <div className="flex space-x-4 items-center ml-5">
                                          {/* <img src={categorie} alt="Categorie" className="w-auto h-12" />
                                          <button className="w-auto border border-slate-400 rounded-lg px-4 py-2">Front-end Development</button>
                                          <button className="w-auto border border-slate-400 rounded-lg px-4 py-2">Back-end Development</button>
                                          <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">Full-Stack Development</button> */}
                                          <img src={corss} alt="Categorie" className="w-auto h-auto " />
                                          <img src={corss1} alt="Categorie" className="w-auto h-auto " />
                                          <img src={brand1} alt="Categorie 2" className="w-auto h-auto " />

                                          <img src={corss4} alt="Categorie" className="w-auto h-auto " />
                                          <img src={corss5} alt="Categorie" className="w-auto h-auto " />
                                          
                                          {/* <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">UI & UX</button>
                                          <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">Graphic Designing</button>
                                          <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">Adv Graphic Designing</button>
                                          // <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">Video Graphics</button>
                                          // <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">Video Editing</button>
                                          // <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">Business Management</button>
                                          // <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">Digital Marketing</button>
                                          <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">Communication</button>
                                          <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">Placement Training</button> */}
                                    </div>
                              </Marquee>
                        </div>


                        {/* Main container for the content */}
                        <div className="mx-4 lg:mx-24 min-w-fit flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between relative">
                             
                              {/* Image container, first in mobile view */}
                              <div className="w-full lg:w-1/2 flex justify-center relative mb-0 md:mb-8 lg:mb-0">
                                    <div className="relative w-full h-auto z-0">
                                          <img className="w-full object-cover " src={Gimg} alt="" />
                                          {/* DownArrow and plant images */}
                                          <img className="absolute top-64 left-8  md:top-44 md:left-2 h-auto object-cover z-10 hidden lg:block" src={DownArrow} alt="" />
                                          <img className="absolute md:bottom-32 md:-left-24 h-auto object-cover z-10 hidden lg:block" src={plant} alt="" />
                                          {/* UpArrow image, hidden on mobile */}
                                          <img className="absolute md:bottom-16 md:-left-[10%] h-auto object-cover z-10 hidden lg:block" src={UpArrow} alt="" />
                                    </div>
                              </div>

                              {/* Text content container */}
                              <div className="w-full lg:w-1/2 mt-0 md:mt-6 lg:mt-0 lg:relative ">
                                    <img src={wordImage} alt="Word Image" className="w-full" />
                                    {/* <p className="font-semibold text-2xl mt-6">Take up to 5 days to evaluate your purchase.</p> */}
                                    <p className="text-gray-800 font-semibold text-lg mt-5 leading-relaxed">
                                          Education is not just about gaining knowledge, it’s
                                          about unlocking your potential.
                                    </p>
                                    <div className="flex mt-12 items-center w-full">
                                          <div className='w-2/3 flex'>
                                          <div className='w-2/4'><img className="mr-2  md:mr-4 w-48 h-auto md:w-auto md:h-auto order-1 md:order-1 " src={Enroll} alt="Enroll Now" /></div>
                                          <div className='w-1/4'><img className="mr-3 h-10 md:mr-0 md:h-20 mx-6 order-3 md:order-2 " src={ytube} alt="YouTube Icon" /></div>
                                          <div className='w-1/4 mr-7 text-nowrap items-end'><a className="h-10 w-28 mt-3 ml-10 font-bold underline block lg:hidden order-2" href="#">Watch Our Story</a></div>
                                          </div>
                                          <div className='w-1/3 mr-5 items-start'>
                                             <a className="h-20 mt-5 w-40   font-bold underline hidden lg:block md:order-3" href="#">Play Video</a>
                                          </div>
                                          
                                          
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section className='mt-0 h-auto' >
                        <div className="relative">
                              {/* Foreground Section */}
                              <div className="flex justify-center items-center relative z-10 ">
                                    <img className=" absolute right-64 md:left-1/3 w-10 h-10  md:w-auto md:h-auto mt-3" src={fire} alt="Fire Icon" />
                                    <h1 className="font-bold sm:text-2xl  md:text-4xl text-center mt-5">Trending Course's</h1>
                              </div>

                              {/* Slider with Background Image */}
                              <div className="slider-container w-full h-auto relative">
                                    {/* Background Image */}
                                    <div className="background-image-container  absolute w-[80%] md:w-[100%] h-auto rounded-xl -z-10 top-[20vh]  ">
                                          <img
                                                className="background-image  object-cover absolute w-[100%]  md:mt-10 "
                                                src={background_img}
                                                alt="Background"
                                          />
                                    </div>

                                    {/* Swiper Slider */}
                                    <Swiper
                                          spaceBetween={2}  // Gap between images
                                          centeredSlides={true}
                                          // pagination={{ clickable: true }}
                                          loop={true}
                                          autoplay={{ delay: 2000 }}  // Move every 2 seconds
                                          modules={[ Autoplay]}  // Register modules
                                          breakpoints={{
                                                // Mobile view: 1 slide per view, centered
                                                480: {
                                                      slidesPerView: 1,
                                                      centeredSlides: true,  // This ensures the slide is centered on mobile view

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
                                          className=" relative  bottom-9 md:w-auto md:h-auto z-10 overflow-visible md:bottom-10 "
                                    >
                                          {images.map((image, index) => (
                                                <SwiperSlide key={index} className="flex justify-center items-center h-80  md:mt-20 ">
                                                      <img src={image} alt={`Slide ${index}`} className="w-96 h-72  p-10    md:w-full md:h-[480px]  md:items-center md:object-cover md:mb-10  " />
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                        </div>

                        {/* Additional Images Section */}

                        <div className="relative  z-0 block md:hidden  ">
                              {/* Display Percent Icon based on screen size */}
                              <img
                                    className="absolute  w-auto h-10 bottom-40 left-72  object-cover z-10  "
                                    src={Percent}
                                    alt="Percent Icon"
                              /> 
                              {/* Display Compass Icon based on screen size */}
                              <img
                                    className="absolute h-10 w-10 bottom-60 left-64  object-cover z-10  "
                                    src={Compass}
                                    alt="Compass Icon"
                              />
                              {/* Display Alarm Icon based on screen size */}
                              <img
                                    className="absolute  h-16 w-16 -bottom-6 left-72    object-cover z-10   "
                                    src={Alarm}
                                    alt="Alarm Icon"
                              />
                              {/* Display Group Icon based on screen size */}
                              <img
                                    className="absolute w-10 h-12 bottom-48 left-10  object-cover z-10  "
                                    src={Group}
                                    alt="Group Icon"
                              />
                        </div>
                        <div className="relative  z-0 hidden md:block">
                              {/* Display Percent Icon based on screen size */}
                              <img
                                    className="absolute   md:bottom-72 md:right-28 md:h-auto object-cover z-10  hidden md:block "
                                    src={Percent}
                                    alt="Percent Icon"
                              />
                              {/* Display Compass Icon based on screen size */}
                              <img
                                    className="absolute  md:bottom-96 md:right-20 md:h-auto object-cover z-10 hidden md:block "
                                    src={Compass}
                                    alt="Compass Icon"
                              />
                              {/* Display Alarm Icon based on screen size */}
                              <img
                                    className="absolute    h-40 w-40 object-cover z-10  bottom-5 -right-1 hidden md:block "
                                    src={Alarm}
                                    alt="Alarm Icon"
                              />
                              {/* Display Group Icon based on screen size */}
                              <img
                                    className="absolute  md:bottom-80 md:left-10 md:h-auto md:w-16 object-cover z-10 hidden md:block "
                                    src={Group}
                                    alt="Group Icon"
                              />
                        </div>
                  </section>

                  <div className="mt-0 ">
                        {/* Header Section with Start Image */}
                        <div className="flex flex-col justify-center items-center relative">
                              <div className='hidden md:block'>
                                    <img className="items-center absolute md:h-52 md:ml-52 md:top-14" src={Start_arrow} alt="Start_arrow" />

                              </div>
                              <div className='block md:hidden'>
                                    <img className="items-center absolute h-36 top-10" src={Start_arrow} alt="Start_arrow" />

                              </div>
                              <img
                                    className="absolute w-40 h-12"
                                    src={start}
                                    alt="Start"
                              />
                              {/* Main Title */}
                              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-64 order-1">
                                    Our Expert Services for your Career Goals
                              </h1>
                              {/* Description with a <br> for line break */}
                              <p className=" text-gray-600 text-center mt-10 font-serif text-sm md:text-xl lg:text-xl order-2">
                                    Learn on a dynamic platform with high-quality content, live sessions & mentoring
                                    <br />
                                    from leading industry experts to achieve your desired goal.
                              </p>
                              
                        </div>

                        {/* Background Image Section */}
                        <div
                              className="mt-20 w-full h-screen bg-contain bg-center bg-no-repeat"
                              style={{ backgroundImage: `url(${require('../Assets/flowchart.png')})` }}
                        >
                              {/* Content over the background image can go here */}
                        </div>

                        



                  </div>

                  <Instructors />
            </section>





      );
}
