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

// import React from 'react';
import start from '../Assets/start.png'; // This is for the start image



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper core and required modules          
import { Pagination, Autoplay } from 'swiper/modules'; // Import core modules from 'swiper/modules'
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Import Pagination styles       
// import CareerJourney from '../Components/CareerJorney';

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

import Start_enroll from '../Assets/Start_enroll.png'
import Start_arrow from '../Assets/Start_arrow.png'

import pathBg from '../Assets/path_bg.png';                // Import the background image
import bg_dm from '../Assets/bg_dm.png';
import bg_js from '../Assets/bg_js.png';
import allimg from '../Assets/allimg.png';




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

                  <section className='mt-0' >
                        <div className="relative">
                              {/* Foreground Section */}
                              <div className="flex justify-center items-center relative z-10 ">
                                    <img className=" absolute right-64 md:left-1/3 " src={fire} alt="Fire Icon" />
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
                                          pagination={{ clickable: true }}
                                          loop={true}
                                          autoplay={{ delay: 2000 }}  // Move every 2 seconds
                                          modules={[Pagination, Autoplay]}  // Register modules
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
                  </section>

                  <div className="bg-red-400 ">
                        {/* Header Section with Start Image */}
                        <div className="flex flex-col justify-center items-center relative">
                              <div>
                                    <img className="items-center absolute" src={Start_arrow} alt="Start_arrow" />

                              </div>
                              <img
                                    className="absolute w-40 h-12"
                                    src={start}
                                    alt="Start"
                              />
                              {/* Description with a <br> for line break */}
                              <p className="absolute text-gray-600 text-center mt-28 md:mt-16 lg:mt-48 font-serif text-sm md:text-xl lg:text-xl">
                                    Learn on a dynamic platform with high-quality content, live sessions & mentoring
                                    <br />
                                    from leading industry experts to achieve your desired goal.
                              </p>
                              {/* Main Title */}
                              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-80">
                                    Our Expert Services for your Career Goals
                              </h1>
                        </div>

                        {/* Background Image Section */}
                        <div
                              className="mt-20 w-full h-screen bg-contain bg-center bg-no-repeat"
                              style={{ backgroundImage: `url(${require('../Assets/flowchart.png')})` }}
                        >
                              {/* Content over the background image can go here */}


                        </div>
                        {/* <img className=" absolute  md:ml-52 md:mt-4 md:w-auto md:h-auto  " src={Start_enroll} alt="Enroll" /> */}


                  </div>

                  {/* Skillled introduce page */}
                  <div className="relative w-full -z-10 h-screen bg-no-repeat bg-origin-border bg-contain" style={{ backgroundImage: `url(${pathBg})` }}>
                        {/* Button */}
                        <div className="absolute z-10 ml-[40%] mt-28 font-bold text-xls ">
                              <button className="flex flex-col items-center border border-gray-700 bg-slate-300 rounded-full w-52 p-2">
                                    Skilled Introduce
                              </button>
                        </div>

                        {/* Content Section */}
                        <div className="flex justify-center items-center h-full ">
                              <div className="text-center">
                                    <h2 className="text-3xl font-bold mt-3 ">Our Top Class & Professional  <br /> InstructorsIn One Place</h2>

                                    <div className="flex justify-center mt-6 space-x-12">
                                          {/* William Hope */}
                                          <div className='flex relative  '>
                                                <div className='flex relative -z-10 mt-20 '>
                                                      <img src={bg_dm} alt="bg_dm" className="h-[100%] w-full mx-auto" />
                                                </div>
                                                <div className="text-center absolute z-10 md:left-5">
                                                      <img src={allimg} alt="William Hope" className="md:h-96 md:w-72  mx-auto" />
                                                      <h3 className="text-2xl font-bold mt-4 mr-12">William Hope</h3>
                                                      <p className="text-yellow-500 font-bold mr-10">Digital Marketing</p>
                                                </div>

                                          </div>


                                          {/* Jay Selvan */}
                                          <div className='flex relative'>
                                                <div className='flex relative -z-10 mt-20 ml-10 '>
                                                      <img src={bg_dm} alt="bg_dm" className="h-[100%] w-full mx-auto" />
                                                </div>
                                                <div className="text-center absolute z-10 ">
                                                      <img src={allimg} alt="Jay Selvan" className="md:h-96 md:w-72 md:ml-14 mx-auto" />
                                                      <h3 className="text-2xl font-bold mt-4 ml-20">Jay Selvan</h3>
                                                      <p className="text-yellow-500 font-bold ml-24">Video Editor</p>
                                                </div>
                                          </div>

                                    </div>
                              </div>
                        </div>
                  </div>


            </section>





      );
}
