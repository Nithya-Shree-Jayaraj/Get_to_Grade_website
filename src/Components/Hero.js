import wordImage from '../Assets/word.png';
import Gimg from '../Assets/Girl_img.png';
import DownArrow from '../Assets/DownArrow.png';
import UpArrow from '../Assets/UpArrow.png';
import plant from '../Assets/plant.png';
import Enroll from '../Assets/Enrow_now.png';
import ytube from '../Assets/utube_icon.png';
import flowchart from '../Assets/flowchart.png'



import categorie from '../Assets/categorie-icon.png';
// import categorie2 from '../Assets/categorie-icon1.png';
// import corss from '../Assets/corss.png';
// import corss1 from '../Assets/corss1.png';
// import corss4 from '../Assets/corss4.png';
// import corss5 from '../Assets/corss5.png';
// import brand1 from '../Assets/brand1.png';
import second from '../Assets/second.png'
import third from '../Assets/third.png'
import four from '../Assets/four.png'
import five from '../Assets/five.png'
import Marquee from 'react-fast-marquee';


import start from '../Assets/start.png'; // This is for the start image



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper core and required modules          
import { Autoplay } from 'swiper/modules'; // Import core modules from 'swiper/modules'
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
                  <section className="bg-red-500">

                        <div className="w-full px-6 pt-6 overflow-hidden md:px-24">
                              <Marquee gradient={false} direction="left" speed={50}>
                                    <div className="flex items-center ml-5 space-x-4 font-bold ">
                                          <img src={categorie} alt="Categorie" className="w-auto h-14" />
                                          <button className="w-auto px-4 py-2 bg-gray-200 border rounded-lg border-slate-100 h-14">Front-end Development</button>
                                          <button className="w-auto px-4 py-2 bg-gray-200 border rounded-lg border-slate-100 h-14">Back-end Development</button>
                                          <button className="w-56 px-4 py-2 bg-gray-200 border rounded-lg border-slate-100 h-14 ">Full-Stack Development</button>
                                          {/* <img src={corss} alt="Categorie" className="w-auto h-auto " />
                                          <img src={corss1} alt="Categorie" className="w-auto h-auto " />
                                          <img src={brand1} alt="Categorie 2" className="w-auto h-auto " />

                                          <img src={corss4} alt="Categorie" className="w-auto h-auto " />
                                          <img src={corss5} alt="Categorie" className="w-auto h-auto " /> */}
                                           <img src={second} alt="Categorie" className="w-auto h-14" />
                                          <button className="w-56 px-4 py-2 bg-gray-200 border rounded-lg border-slate-100 h-14">UI & UX</button>
                                          <button className="w-56 px-4 py-2 bg-gray-200 border rounded-lg border-slate-100 h-14">Graphic Designing</button>
                                          <button className="w-56 px-4 py-2 bg-gray-200 border rounded-lg border-slate-100 h-14">Adv Graphic Designing</button>

                                          <img src={third} alt="Categorie" className="w-auto h-14" />
                                          <button className="w-56 px-4 py-2 bg-gray-200 border rounded-lg border-slate-100 h-14">Digital Marketing</button>
                                          <button className="w-56 px-4 py-2 bg-gray-200 border rounded-lg border-slate-100 h-14">Business Management</button>
                                          
                                          <img src={four} alt="Categorie" className="w-auto h-14" />
                                           <button className="w-56 px-4 py-2 bg-gray-200 border rounded-lg border-slate-100 h-14">Photograghy</button>
                                           <button className="w-56 px-4 py-2 bg-gray-200 border rounded-lg border-slate-100 h-14">Videography</button>
                                           <button className="w-56 px-4 py-2 bg-gray-200 border rounded-lg border-slate-100 h-14">Video Editing</button>
                                     
                                           <img src={five} alt="Categorie" className="w-auto h-14" />
                                          <button className="w-56 px-4 py-2 bg-gray-200 border rounded-lg border-slate-100 h-14">Communication</button>
                                          <button className="w-56 px-4 py-2 bg-gray-200 border rounded-lg border-slate-100 h-14">Placement Training</button>
                                    </div>
                              </Marquee>
                        </div>


                        {/* Main container for the content */}
                        <div className="relative flex flex-col mx-4 mt-0 md:mx-24 min-w-fit lg:flex-row-reverse lg:items-center lg:justify-between ">

                              {/* Image container, first in mobile view */}
                              <div className="relative flex justify-center w-full mb-0 lg:w-1/2 lg:mb-0 md:left-36">
                                    <div className="w-full h-auto ">
                                          <img className="object-cover md:w-[75%] w-full " src={Gimg} alt="" />
                                          {/* DownArrow and plant images */}
                                          <img className="absolute z-10 hidden object-cover h-auto top-64 left-8 md:top-44 md:left-2 lg:block" src={DownArrow} alt="" />
                                          <img className="absolute z-10 hidden object-cover h-auto md:bottom-32 md:-left-24 lg:block" src={plant} alt="" />
                                          {/* UpArrow image, hidden on mobile */}
                                          <img className="absolute md:bottom-16 md:-left-[10%] h-auto object-cover z-10 hidden lg:block" src={UpArrow} alt="" />
                                    </div>
                              </div>

                              {/* Text content container */}
                              <div className="w-full mt-0 lg:w-1/2 lg:mt-0 lg:relative ">
                                    <img src={wordImage} alt="Word Image" className="md:w-[75%] w-full" />
                                    {/* <p className="mt-6 text-2xl font-semibold">Take up to 5 days to evaluate your purchase.</p> */}
                                    <p className="w-[110%] mt-5 text-lg font-semibold leading-relaxed text-gray-800 hidden md:block">
                                          Education is not just about gaining knowledge, it’s<br/>
                                          about unlocking your potential. 
                                    </p>
                                    <p className="w-[110%] mt-5 text-lg font-semibold leading-relaxed text-gray-800 block md:hidden">
                                          Education is not just about gaining knowledge, it’s
                                          about unlocking your potential. 
                                    </p>
                                    <div className="flex items-center w-full mt-5 md:mt-14 ">
                                          <div className='flex w-2/3'>
                                                <div className='w-2/4'><img className="order-1 w-[150%] h-[100%] mr-2 md:mr-4  md:h-auto md:order-1 " src={Enroll} alt="Enroll Now" /></div>
                                                <div className='w-1/4'><img className="order-3 h-10 mb-5 mr-3 md:mr-0 md:h-14 md:order-2" src={ytube} alt="YouTube Icon" /></div>
                                                <div className='items-end w-1/4 mr-7 text-nowrap'><a className="order-2 block h-10 mt-3 ml-10 font-bold underline w-28 lg:hidden" href="#">Watch Our Story</a></div>
                                          </div>
                                          <div className='items-start w-1/3 '>
                                                <a className="hidden w-40 h-20 mt-5 font-bold underline lg:block md:order-3" href="#">Play Video</a>
                                          </div>


                                    </div>
                              </div>
                        </div>
                  </section>

                  <section className='h-auto mt-0 bg-emerald-700' >
                        <div className="relative">
                              {/* Foreground Section */}
                              <div className="relative z-10 flex items-center justify-center ">
                                    <img className="absolute w-10 h-10 mt-3 right-64 md:left-1/3 md:w-auto md:h-auto" src={fire} alt="Fire Icon" />
                                    <h1 className="mt-5 font-bold text-center sm:text-2xl md:text-4xl">Trending Course's</h1>
                              </div>

                              {/* Slider with Background Image */}
                              <div className="relative w-full h-auto slider-container">
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
                                          modules={[Autoplay]}  // Register modules
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
                                          className="relative z-10 overflow-visible bottom-9 md:w-auto md:h-auto md:bottom-10"
                                    >
                                          {images.map((image, index) => (
                                                <SwiperSlide key={index} className="flex items-center justify-center h-80 md:mt-20 ">
                                                      <img src={image} alt={`Slide ${index}`} className="w-96 h-72  p-10    md:w-full md:h-[480px]  md:items-center md:object-cover md:mb-10  " />
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                        </div>

                        {/* Additional Images Section */}

                        <div className="relative z-0 block md:hidden ">
                              {/* Display Percent Icon based on screen size */}
                              <img
                                    className="absolute z-10 object-cover w-auto h-10 bottom-40 left-72 "
                                    src={Percent}
                                    alt="Percent Icon"
                              />
                              {/* Display Compass Icon based on screen size */}
                              <img
                                    className="absolute z-10 object-cover w-10 h-10 bottom-60 left-64 "
                                    src={Compass}
                                    alt="Compass Icon"
                              />
                              {/* Display Alarm Icon based on screen size */}
                              <img
                                    className="absolute z-10 object-cover w-16 h-16 -bottom-6 left-72 "
                                    src={Alarm}
                                    alt="Alarm Icon"
                              />
                              {/* Display Group Icon based on screen size */}
                              <img
                                    className="absolute z-10 object-cover w-10 h-12 bottom-48 left-10 "
                                    src={Group}
                                    alt="Group Icon"
                              />
                        </div>
                        <div className="relative z-0 hidden md:block">
                              {/* Display Percent Icon based on screen size */}
                              <img
                                    className="absolute z-10 hidden object-cover md:bottom-72 md:right-28 md:h-auto md:block "
                                    src={Percent}
                                    alt="Percent Icon"
                              />
                              {/* Display Compass Icon based on screen size */}
                              <img
                                    className="absolute z-10 hidden object-cover md:bottom-96 md:right-20 md:h-auto md:block "
                                    src={Compass}
                                    alt="Compass Icon"
                              />
                              {/* Display Alarm Icon based on screen size */}
                              <img
                                    className="absolute z-10 hidden object-cover w-40 h-40 bottom-5 -right-1 md:block "
                                    src={Alarm}
                                    alt="Alarm Icon"
                              />
                              {/* Display Group Icon based on screen size */}
                              <img
                                    className="absolute z-10 hidden object-cover md:bottom-80 md:left-10 md:h-auto md:w-16 md:block "
                                    src={Group}
                                    alt="Group Icon"
                              />
                        </div>
                  </section>

                  <div className="mt-0 bg-yellow-300 ">
                        {/* Header Section with Start Image */}
                        <div className="relative flex flex-col items-center justify-center">
                              <div className='hidden md:block'>
                                    <img className="absolute items-center md:h-52 md:ml-52 md:top-14" src={Start_arrow} alt="Start_arrow" />

                              </div>
                              <div className='block md:hidden'>
                                    <img className="absolute items-center h-36 top-10" src={Start_arrow} alt="Start_arrow" />

                              </div>

                              {/* Main Title */}
                              {/* <h1 className="order-1 mt-64 text-2xl font-bold text-center md:text-3xl lg:text-4xl"> */}
                              {/* Our Expert Services for your Career Goals */}
                              {/* </h1> */}
                              {/* Description with a <br> for line break */}
                              {/* <p className="order-2 mt-10 font-serif text-sm text-center text-gray-600 md:text-xl lg:text-xl">
                                    Learn on a dynamic platform with high-quality content, live sessions & mentoring
                                    <br />
                                    from leading industry experts to achieve your desired goal.
                              </p> */}


                              <div>
                                    <section id="course" className="section-course">
                                          {/* <p className="course-content">How We Start Journey</p> */}
                                          <img
                                                className="w-64 h-20 "
                                                src={start}
                                                alt="Start"
                                          />
                                          <h3 className="course-paragraup">Our Expert Services for your Career Goals</h3>
                                          <p className="mt-6 course-paragraup1">
                                                Learn on a dynamic platform with high-quality content, live sessions & mentoring
                                                from leading industry experts to achieve your desired goal.
                                          </p>
                                          <img src={flowchart} alt="firebtn" className="career-image" />
                                          <button className="course-btn">
                                                Enroll Now
                                          </button>
                                    </section>

                              </div>

                        </div>
                  </div>

                  <Instructors />
            </section>





      );
}
