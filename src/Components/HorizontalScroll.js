// // import React, { useEffect, useState } from "react";
// // // Import your images
// // import categorie from '../Assets/categorie-icon.png';
// // import categorie2 from '../Assets/categorie-icon1.png';

// // const HorizontalScroll = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0); // Track current slide
// //   const [isTransitioning, setIsTransitioning] = useState(true); // Control smooth transitions

// //   const slides = [
// //     { id: 1, content: <img src={categorie} alt="Categorie" className="w-auto" /> }, // Image auto width  
// //     { id: 2, content: <button className="w-auto border border-slate-300 rounded-lg">Front-end Development</button> },
// //     { id: 3, content: <button className="w-auto border border-slate-300 rounded-lg">Back-end Development</button> },
// //     { id: 4, content: <button className="w-56 border border-slate-300 rounded-lg">Full-Stack Development</button> },
// //     { id: 5, content: <img src={categorie2} alt="Categorie 2" className="w-auto" /> }, // Image auto width
// //     { id: 6, content: <button className="w-56 border border-slate-300 rounded-lg">UI & UX</button> },
// //     { id: 7, content: <button className="w-56 border border-slate-300 rounded-lg">Graphic Designing</button> },
// //     { id: 8, content: <button className="w-56 border border-slate-300 rounded-lg">Adv Graphic Designing</button> },
// //     { id: 9, content: <button className="w-56 border border-slate-300 rounded-lg">Video Graphics</button> },
// //     { id: 10, content: <button className="w-56 border border-slate-300 rounded-lg">Video Editing</button> },
// //     { id: 11, content: <button className="w-56 border border-slate-300 rounded-lg">Business Management</button> },
// //     { id: 12, content: <button className="w-56 border border-slate-300 rounded-lg">Digital Marketing</button> },
// //     { id: 13, content: <button className="w-56 border border-slate-300 rounded-lg">Communication</button> },
// //     { id: 14, content: <button className="w-56 border border-slate-300 rounded-lg">Placement Training</button> }
// //   ];

// //   // Duplicated slides to create the looping effect
// //   const totalSlides = slides.length;
// //   const loopedSlides = [...slides, ...slides];

// //   // Automatically slide every 2 seconds
// //   useEffect(() => {
// //     const slideInterval = setInterval(() => {
// //       setIsTransitioning(true); // Ensure smooth transition
// //       setCurrentIndex((prevIndex) => prevIndex + 1); // Move to the next slide
// //     }, 3000); // 2-second interval

// //     return () => clearInterval(slideInterval); // Cleanup
// //   }, [totalSlides]);

// //   // Reset index to create infinite loop effect
// //   useEffect(() => {
// //     if (currentIndex >= totalSlides) {
// //       setTimeout(() => {
// //         setIsTransitioning(false); // Disable transition temporarily
// //         setCurrentIndex(0); // Jump back to the first slide
// //       }, 500); // Wait for the transition to complete
// //     }
// //   }, [currentIndex, totalSlides]);

// //   return (
// //     <div className="w-full  h-full mt-2 ml-20 mr-20 lg:px-24 font-semibold overflow-hidden relative">
// //       {/* Slides container */}
// //       <div
// //         className={`flex transition-transform ${
// //           isTransitioning ? 'duration-500 ease-in-out' : ''
// //         }`}
// //         style={{ transform: `translateX(-${(currentIndex % totalSlides) * 50}%)` }} // Move slides horizontally
// //       >
// //         {loopedSlides.map((slide, index) => (
// //           <div
// //             key={index}
// //             className={`flex-shrink-0 w-full sm:w-auto ${
// //               slide.content.type === 'img' ? 'mx-2' : 'mx-2'
// //             }`} // Smaller gap for images (mx-2), larger gap for buttons (mx-4)
// //           >
// //             <div
// //               className={`flex flex-col sm:flex-row justify-center items-center h-14 ${
// //                 slide.content.type === 'img'
// //                   ? 'w-auto'
// //                   : 'w-60 bg-gray-300 border border-slate-300 rounded-lg'
// //               }`}
// //             >
// //               {slide.content}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default HorizontalScroll



// import React from 'react';
// import Marquee from 'react-fast-marquee';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import CareerJourney from '../Components/CareerJorney';

// import categorie from '../Assets/categorie-icon.png';
// import categorie2 from '../Assets/categorie-icon1.png';
// import wordImage from '../Assets/word.png';
// import Gimg from '../Assets/Girl_img.png';
// import DownArrow from '../Assets/DownArrow.png';
// import UpArrow from '../Assets/UpArrow.png';
// import plant from '../Assets/plant.png';
// import Enroll from '../Assets/Enrow_now.png';
// import ytube from '../Assets/utube_icon.png';
// import img1 from '../Assets/img1.svg';
// import img2 from '../Assets/img2.svg';
// import img3 from '../Assets/img3.svg';
// import img4 from '../Assets/img4.svg';
// import img5 from '../Assets/img5.svg';
// import img6 from '../Assets/img6.svg';
// import img7 from '../Assets/img7.svg';
// import img8 from '../Assets/img8.svg';
// import img9 from '../Assets/img9.svg';
// import fire from '../Assets/fire.png';
// import background_img from '../Assets/background_img.svg';
// import Percent from '../Assets/percent.png';
// import Compass from '../Assets/compass.png';
// import Alarm from '../Assets/alarm.png';
// import Group from '../Assets/Group.png';

// const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

// export default function Hero() {
//   return (
//     <section>
//       {/* Marquee Section */}
//       <section className="py-12">
//         <div className="w-full overflow-hidden bg-gray-100 py-4">
//           <Marquee gradient={false} direction="right" speed={50}>
//             <div className="flex space-x-4 items-center">
//               <img src={categorie} alt="Categorie" className="w-auto h-12" />
//               <button className="w-auto border border-slate-300 rounded-lg px-4 py-2">Front-end Development</button>
//               <button className="w-auto border border-slate-300 rounded-lg px-4 py-2">Back-end Development</button>
//               <button className="w-56 border border-slate-300 rounded-lg px-4 py-2">Full-Stack Development</button>
//               <img src={categorie2} alt="Categorie 2" className="w-auto h-12" />
//               <button className="w-56 border border-slate-400 rounded-lg px-4 py-2">UI & UX</button>
//               <button className="w-56 border border-slate-300 rounded-lg px-4 py-2">Graphic Designing</button>
//               <button className="w-56 border border-slate-300 rounded-lg px-4 py-2">Adv Graphic Designing</button>
//               <button className="w-56 border border-slate-300 rounded-lg px-4 py-2">Video Graphics</button>
//               <button className="w-56 border border-slate-300 rounded-lg px-4 py-2">Video Editing</button>
//               <button className="w-56 border border-slate-300 rounded-lg px-4 py-2">Business Management</button>
//               <button className="w-56 border border-slate-300 rounded-lg px-4 py-2">Digital Marketing</button>
//               <button className="w-56 border border-slate-300 rounded-lg px-4 py-2">Communication</button>
//               <button className="w-56 border border-slate-300 rounded-lg px-4 py-2">Placement Training</button>
//             </div>
//           </Marquee>
//         </div>

//         {/* Main container for the content */}
//         <div className="mx-4 lg:mx-24 min-w-fit flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between relative">
//           {/* Image container */}
//           <div className="w-full lg:w-1/2 flex justify-center relative mb-8 lg:mb-0">
//             <div className="relative w-full h-auto z-0">
//               <img className="w-full object-cover" src={Gimg} alt="Girl" />
//               {/* DownArrow and plant images */}
//               <img className="absolute lg:top-64 lg:left-8 h-auto object-cover z-10 hidden lg:block" src={DownArrow} alt="DownArrow" />
//               <img className="absolute lg:bottom-52 lg:-left-20 h-auto object-cover z-10 hidden lg:block" src={plant} alt="Plant" />
//               {/* UpArrow image */}
//               <img className="absolute lg:bottom-32 lg:right-2/3 h-auto object-cover z-10 hidden lg:block" src={UpArrow} alt="UpArrow" />
//             </div>
//           </div>

//           {/* Text content container */}
//           <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:relative">
//             <img src={wordImage} alt="Word Image" className="w-full" />
//             <p className="text-gray-800 font-semibold text-lg mt-5 leading-relaxed">
//               Education is not just about gaining knowledge, it’s about unlocking your potential.
//             </p>
//             <div className="flex mt-12 items-center">
//               <img className="mr-4" src={Enroll} alt="Enroll Now" />
//               <img className="h-20 mx-6 hidden lg:block" src={ytube} alt="YouTube Icon" />
//               <a className="h-20 mt-5 font-bold underline hidden lg:block" href="#">Play Video</a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Foreground and Background Section */}
//       <section className="relative">
//         <div className="relative">
//           {/* Foreground Section */}
//           <div className="flex justify-center items-center relative z-10">
//             <img className="lg:left-36" src={fire} alt="Fire Icon" />
//             <h1 className="font-bold text-4xl">Trending Courses</h1>
//           </div>

//           {/* Slider with Background Image */}
//           <div className="slider-container w-full h-full relative">
//             {/* Background Image */}
//             <div className="background-image-container relative">
//               <img className="background-image object-cover w-full h-full" src={background_img} alt="Background" />
//             </div>

//             {/* Swiper Slider */}
//             <Swiper
//               spaceBetween={10}  // Gap between images
//               centeredSlides={true}
//               pagination={{ clickable: true }}
//               loop={true}
//               autoplay={{ delay: 2000 }}  // Move every 2 seconds
//               modules={[Pagination, Autoplay]}
//               breakpoints={{
//                 480: { slidesPerView: 1, centeredSlides: true },
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//               className="swiper-container"
//             >
//               {images.map((image, index) => (
//                 <SwiperSlide key={index} className="slide flex justify-center items-center">
//                   <img src={image} alt={`Slide ${index}`} className="slide-image mx-auto" />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>

//         {/* Additional Images Section */}
//         <div className="relative z-0">
//           {/* Percent Icon */}
//           <img className="absolute lg:bottom-80 lg:right-60 h-auto w-16 object-cover z-10" src={Percent} alt="Percent Icon" />
//           {/* Compass Icon */}
//           <img className="absolute lg:bottom-96 lg:right-52 h-auto w-16 object-cover z-10" src={Compass} alt="Compass Icon" />
//           {/* Alarm Icon */}
//           <img className="absolute lg:bottom-24 lg:right-44 h-40 w-40 object-cover z-10" src={Alarm} alt="Alarm Icon" />
//           {/* Group Icon */}
//           <img className="absolute lg:bottom-80 lg:left-60 h-auto w-16 object-cover z-10" src={Group} alt="Group Icon" />
//         </div>

//         <CareerJourney />
//       </section>
//     </section>
//   );
// }

 