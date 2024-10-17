// import React, { useRef, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';

// // Import your images
// import img1 from '../Assets/img1.svg';
// import img2 from '../Assets/img2.svg';
// import img3 from '../Assets/img3.svg';
// import img4 from '../Assets/img4.svg';
// import img5 from '../Assets/img5.svg';

// const ImageSlider = () => {
//   // Refs for the custom navigation buttons
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   // Set up custom navigation buttons after component is mounted
//   useEffect(() => {
//     // Assign the buttons after the first render
//     if (prevRef.current && nextRef.current) {
//       prevRef.current.classList.add('swiper-button-prev-custom');
//       nextRef.current.classList.add('swiper-button-next-custom');
//     }
//   }, []);

//   return (
//     <div className="w-[70%] max-w-lg mx-auto relative">
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         navigation={{
//           prevEl: prevRef.current,
//           nextEl: nextRef.current,
//         }}
//         onInit={(swiper) => {
//           // Link swiper navigation to the button refs
//           swiper.params.navigation.prevEl = prevRef.current;
//           swiper.params.navigation.nextEl = nextRef.current;
//           swiper.navigation.update();
//         }}
//         autoplay={{ delay: 3000, disableOnInteraction: false }} // 3s autoplay
//         spaceBetween={20}
//         loop={true}
//         breakpoints={{
//           // Mobile view: 3 slides per view
//           0: {
//             slidesPerView: 3,
//           },
//           // Tablet view: 5 slides per view
//           768: {
//             slidesPerView: 5,
//           },
//         }}
//         className="relative"
//       >
//         <SwiperSlide className="flex justify-center">
//           <img
//             src={img1}
//             alt="Person 1"
//             className="w-20 h-20 rounded-full object-cover border-2 border-transparent hover:border-purple-600"
//           />
//         </SwiperSlide>
//         <SwiperSlide className="flex justify-center">
//           <img
//             src={img2}
//             alt="Person 2"
//             className="w-20 h-20 rounded-full object-cover border-2 border-transparent hover:border-purple-600"
//           />
//         </SwiperSlide>
//         <SwiperSlide className="flex justify-center">
//           <img
//             src={img3}
//             alt="Person 3"
//             className="w-20 h-20 rounded-full object-cover border-2 border-transparent hover:border-purple-600"
//           />
//         </SwiperSlide>
//         <SwiperSlide className="flex justify-center">
//           <img
//             src={img4}
//             alt="Person 4"
//             className="w-20 h-20 rounded-full object-cover border-2 border-transparent hover:border-purple-600"
//           />
//         </SwiperSlide>
//         <SwiperSlide className="flex justify-center">
//           <img
//             src={img5}
//             alt="Person 5"
//             className="w-20 h-20 rounded-full object-cover border-2 border-transparent hover:border-purple-600"
//           />
//         </SwiperSlide>
//       </Swiper>

//       {/* Custom Navigation Buttons */}
//       <button
//         ref={prevRef}
//         className="swiper-button-prev absolute -left-10 top-1/2 transform -translate-y-1/2 bg-black p-1 rounded-full text-white z-10"
//       >
//         &larr;
//       </button>
//       <button
//         ref={nextRef}
//         className="swiper-button-next absolute -right-10 top-1/2 transform -translate-y-1/2 bg-black p-1 rounded-full text-white z-10"
//       >
//         &rarr;
//       </button>
//     </div>
//   );
// };

// export default ImageSlider;
