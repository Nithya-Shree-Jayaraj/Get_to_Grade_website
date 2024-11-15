import wordImage from '../Assets/word.png';
import Gimg from '../Assets/Girl_img.png';
import DownArrow from '../Assets/DownArrow.png';
import UpArrow from '../Assets/UpArrow.png';
import plant from '../Assets/plant.png';
import Enroll from '../Assets/Enrow_now.png';
import ytube from '../Assets/utube_icon.png';
import flowchart from '../Assets/flowchart.png'
import pic from '../Assets/pic.png';
import categorie from '../Assets/categorie-icon.png';
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
import Instructors from './Instructors';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Hero() {
      return (

            <section >
                  <section className="">

                        <div className="w-full px-6 pt-6 overflow-hidden md:px-24 ">
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
                        <div className="relative flex flex-col mx-4 mt-0 md:mx-24 min-w-fit lg:flex-row-reverse lg:items-center lg:justify-between">

                              {/* Image container, first in mobile view */}
                              <div className="relative flex justify-center w-full mb-0 lg:w-1/2 lg:mb-0 md:left-36">
                                    <div className="w-full h-auto ">
                                          <img className="object-cover md:w-[70%] w-full 2xl:w-[80%] " src={Gimg} alt="" />
                                          {/* DownArrow and plant images */}
                                          <img className="absolute z-10 hidden object-cover h-auto top-64 left-8 md:top-24 md:-left-20 lg:block 2xl:block 2xl:top-48 2xl:w-[30%]" src={DownArrow} alt="" />
                                          <img className="absolute z-10 hidden object-cover h-auto md:bottom-28 md:-left-40 lg:block 2xl:block 2xl:bottom-52 2xl:w-[18%]  2xl:-left-52" src={plant} alt="" />
                                          {/* UpArrow image, hidden on mobile */}
                                          <img className="absolute lg:bottom-8 md:-left-[20%] h-auto object-cover z-10 hidden lg:block w-72 2xl:block 2xl:w-[40%] 2xl:bottom-[10%] 2xl:-left-[11%]" src={UpArrow} alt="" />
                                    </div>
                              </div>

                              {/* Text content container */}
                              <div className="w-full mt-0 lg:w-1/2 lg:mt-0 lg:relative ">
                                    <img src={wordImage} alt="Word Image" className="md:w-[80%] w-full 2xl:w-[90%]" />
                                    {/* <p className="mt-6 text-2xl font-semibold">Take up to 5 days to evaluate your purchase.</p> */}
                                    <p className="lg:w-[110%] mt-5 text-lg font-semibold leading-relaxed text-gray-800 hidden md:block lg:block 2xl:[150%] 2xl:text-4xl 2xl:leading-relaxed">
                                          Education is not just about gaining knowledge, it’s<br />
                                          about unlocking your potential.
                                    </p>
                                    <p className="w-[110%] mt-5 text-lg font-semibold leading-relaxed text-gray-800 block md:hidden">
                                          Education is not just about gaining knowledge, it’s
                                          about unlocking your potential.
                                    </p>
                                    <div className="flex items-center w-full mt-5 md:mt-14 ">
                                          <div className='flex w-2/3 '>
                                                <div className='w-2/4 '><img className="order-1 w-[150%] h-[100%] mr-2 md:mr-4  md:h-auto md:order-1 " src={Enroll} alt="Enroll Now" /></div>
                                                <div className='w-1/4 mb-8'><img className="order-3 mr-3 h-14 md:mr-0 md:h-14 md:order-2 2xl:h-[70%] 2xl:[70%]" src={ytube} alt="YouTube Icon" /></div>
                                                <div className='items-end w-1/4 text-nowrap'><a className="order-2 block h-10 mt-3 ml-4 font-bold underline w-28 lg:hidden " href="#">Watch Our Story</a></div>
                                          </div>
                                          <div className='items-start w-1/3 -ml-32 2xl:-ml-56 '>
                                                <a className="hidden w-40 h-20 mt-5 font-bold underline lg:block lg:order-3 2xl:text-3xl" href="#">Play Video</a>
                                          </div>


                                    </div>
                              </div>
                        </div>
                  </section>

                  <section className='h-auto mt-0' >
                        <div className="relative">
                              {/* Foreground Section */}
                              <div className="relative z-10 flex items-center justify-center left-6 md:left-16 ">
                                    <img className="absolute w-10 h-10 mt-3 right-64 left-[24%] md:left-[36%] md:w-14 md:h-auto 2xl:w-20" src={fire} alt="Fire Icon" />
                                    <h1 className="mt-5 font-bold text-center sm:text-2xl md:text-4xl 2xl:text-6xl 2xl:mt-0">Trending Course's</h1>
                              </div>

                              {/* Slider with Background Image */}
                              <div className="relative w-full h-auto slider-container ">
                                    {/* Background Image */}
                                    <div className="background-image-container  absolute w-[80%] md:w-[100%] h-auto rounded-xl -z-10 top-[20vh] 2xl:top-[10vh]   ">
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
                                                <SwiperSlide key={index} className="flex items-center justify-center h-80 md:mt-20 left-5 md:left-0">
                                                      <img src={image} alt={`Slide ${index}`} className="w-96 h-72  p-10    md:w-full md:h-[460px]  md:items-center md:object-cover md:mb-10 " />
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                        </div>

                        {/* Additional Images Section */}

                        <div className="relative z-0 block md:hidden ">
                              {/* Display Percent Icon based on screen size */}
                              <img
                                    className="absolute z-10 object-cover w-6 h-6 bottom-40 left-72 "
                                    src={Percent}
                                    alt="Percent Icon"
                              />
                              {/* Display Compass Icon based on screen size */}
                              <img
                                    className="absolute z-10 object-cover w-10 h-10 bottom-56 left-72 "
                                    src={Compass}
                                    alt="Compass Icon"
                              />
                              {/* Display Alarm Icon based on screen size */}
                              <img
                                    className="absolute z-10 object-cover w-16 h-16 bottom-10 left-[86%] "
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
                        <div className="relative z-0 hidden md:block 2xl:block">
                              {/* Display Percent Icon based on screen size */}
                              <img
                                    className="absolute z-10 hidden object-cover md:bottom-72 md:right-28 md:h-auto md:block 2xl:right-[24%] 2xl:bottom-52 2xl:w-20"
                                    src={Percent}
                                    alt="Percent Icon"
                              />
                              {/* Display Compass Icon based on screen size */}
                              <img
                                    className="absolute z-10 hidden object-cover md:bottom-96 md:right-20 md:h-auto md:block 2xl:w-40 2xl:right-[20%]"
                                    src={Compass}
                                    alt="Compass Icon"
                              />
                              {/* Display Alarm Icon based on screen size */}
                              <img
                                    className="absolute z-10 hidden object-cover w-40 h-40 right-8 bottom-5 md:block 2xl:right-80 2xl:w-64 2xl:h-64 2xl:-bottom-8"
                                    src={Alarm}
                                    alt="Alarm Icon"
                              />
                              {/* Display Group Icon based on screen size */}
                              <img
                                    className="absolute z-10 hidden object-cover md:bottom-80 md:left-10 md:h-auto md:w-16 md:block 2xl:left-[20%] 2xl:w-28 "
                                    src={Group}
                                    alt="Group Icon"
                              />
                        </div>
                  </section>

                  <div className="mt-0 ">
                        {/* Header Section with Start Image */}
                        <div className="relative flex flex-col items-center justify-center">
                              <div className='hidden md:block'>
                                    <img className="absolute md:h-[6%] md:ml-80 md:-top-9" src={Start_arrow} alt="Start_arrow" />

                              </div>
                              <div className='block md:hidden'>
                                    <img className="absolute h-[6%] left-[75%] -top-3" src={Start_arrow} alt="Start_arrow" />

                              </div>
                              <div>
                                    <section id="course" className="section-course">
                                          <img
                                                className="w-56 h-10 md:h-20 md:w-64"
                                                src={start}
                                                alt="Start"
                                          />
                                          <h3 className="block text-2xl w-[100%] font-bold course-paragraup md:hidden">Our Expert Services for your Career Goals</h3>
                                          <p className="block w-[100%] mt-6 font-semibold course-paragraup1 font-hero-font md:hidden items-center justify-center ">
                                                Learn on a dynamic platform with high-quality content, live sessions & mentoring
                                                from leading industry experts to achieve your desired goal.
                                          </p>
                                          <h3 className="hidden font-bold course-paragraup md:block">Our Expert Services for your Career Goals</h3>
                                          <p className="hidden mt-6 font-semibold course-paragraup1 font-hero-font md:block 2xl:block 2xl:text-xl ">
                                                Learn on a dynamic platform with high-quality content, live sessions & mentoring<br />
                                                from leading industry experts to achieve your desired goal.
                                          </p>
                                          <img src={flowchart} alt="firebtn" className=" career-image" />
                                          <button className="course-btn">
                                                Enroll Now
                                          </button>
                                    </section>

                              </div>

                        </div>
                  </div>
                  <div>

                        {/*--------------- About sections-------------- */}
                        <div className="justify-center px-4 mx-auto -top-10 max-w-7xl">
                              <h1 className="text-center text-[38px] text-black font-bold mb-2 font-poppins 2xl:text-6xl">About</h1>
                              <p className=" text-center font-bold text-2xl text-black md:text-md text-[21px] justify-evenly 2xl:text-3xl mt-5 font-hero-font ">Join our community & Explore Thousands of Jobs, tips & Course</p>

                              <div className="container w-full About">
                                    <div className="flex flex-col items-center justify-start gap-4 md:flex-row sm:mb-5 md:pl-40 2xl:pl-0">
                                          < a className='2xl:w-[150%]' href='https://www.instagram.com/gettograde.inc/'>
                                                <img src={pic} alt='About' />
                                          </a>
                                          <div className="flex flex-col gap-4 justify-evenly">
                                                <h1 className="mb-2 text-2xl font-bold leading-tight tracking-wide text-black lg:4xl md:text-3xl 2xl:text-6xl 2xl:w-[250%] 2xl:leading-normal ">Thousand Of Top Courses <br/> Now In One Place </h1>
                                                <p className="block font-semibold text-black lg:text-2xl text-md md:text-lg md:hidden">By connecting students all over the tamilnadu to 
                                                      the best instructors, we helping individuals reach their goals and pursue their dreams.</p>
                                                      <p className="hidden font-semibold text-black text-md md:text-lg md:block 2xl:hidden">By connecting students all over the tamilnadu to<br />
                                                      the best instructors, we helping individuals reach their goals and pursue their dreams.</p>
                                                      <p className="hidden font-semibold text-black text-md md:text-lg md:hidden 2xl:block 2xl:text-2xl 2xl:w-[150%]">By connecting students all over the tamilnadu to
                                                      the best instructors, we helping individuals reach their goals and pursue their dreams.</p>

                                                <ul>
                                                      <li className="text-sm font-semibold text-black font-hero-font lg:text-md 2xl:text-xl">• The Most World Class Instructors </li>
                                                      <li className="text-sm font-semibold text-black lg:text-md font-hero-font 2xl:text-xl">• Access Your Class anywhere </li>
                                                      <li className="text-sm font-semibold text-black lg:text-md font-hero-font 2xl:text-xl">• Flexible Course Plan & Life Time Career Support</li>
                                                </ul>

                                          </div>
                                    </div>
                              </div>
                        </div>
                        < footer />
                  </div>

                  <Instructors />
            </section>





      );
}
