// import React from 'react';
// import { FaQuoteLeft } from 'react-icons/fa';
// import OurStudent from '../Assets/OurStudent.png';

// export default function Testimonials() {
//     return (
//         <div className="  flex flex-col items-center relative">
//             {/* Heading Section */}
//             <div className="text-center relative w-full h-screen bg-no-repeat bg-origin-border bg-contain  mt-12 " style={{ backgroundImage: `url(${HeartIMG})` }}">
//                <img  className='relative -z-10 left-44 w-80  ' src={OurStudent} alt='OurStudent'    />
//                 <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 absolute z-10 bottom-20 left-16">
//                     What
//                       <span className='text-white text-5xl font-bold  '>our Student’s </span>  

//                     say
//                 </h2>


//                 <p className="text-gray-600 mt-4 max-w-2xl mx-auto ">
//                     Here's what our students say about their transformative learning experience: Real stories, real growth.
//                     Discover firsthand the impact our courses have had in their lives.
//                 </p>


//             </div>

//             {/* Testimonial Box */}
//             <div className="relative max-w-4xl mx-auto px-6 py-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg">
//                 {/* Quote Icon */}
//                 <FaQuoteLeft className="absolute top-0 left-4 text-5xl text-white opacity-20" />

//                 <p className="text-lg ">
//                     Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
//                     industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
//                     scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
//                     into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s...
//                 </p>

//                 {/* Reviewer Section */}
//                 <div className="flex items-center mt-6 justify-center flex-col">
//                     <img
//                         src="https://via.placeholder.com/80"
//                         alt="Reviewer"
//                         className="w-20 h-20 rounded-full border-4 border-white -mt-10"
//                     />
//                     <h3 className="mt-4 text-xl font-semibold">Nandhakumar Muruganatham</h3>
//                     <p className="text-sm text-yellow-300">Digital Marketing Specialist</p>
//                 </div>
//             </div>

//             {/* Navigation Dots */}
//             <div className="flex space-x-2 mt-6">
//                 <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
//                 <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
//                 <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
//             </div>
//         </div>
//     );
// }


// import React, { useState } from 'react';
// import { FaQuoteLeft } from 'react-icons/fa';
// import OurStudent from '../Assets/OurStudent.png';
// import HeartIMG from '../Assets/HeartIMG.png';

// const testimonials = [
//   {
//     name: 'Nandhakumar Muruganatham',
//     role: 'Digital Marketing Specialist',
//     message:
//       'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text.',
//     image: 'https://via.placeholder.com/80',
//   },
//   {
//     name: 'John Doe',
//     role: 'Software Engineer',
//     message:
//       'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
//     image: 'https://via.placeholder.com/80',
//   },
//   {
//     name: 'Jane Smith',
//     role: 'UI/UX Designer',
//     message:
//       'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
//     image: 'https://via.placeholder.com/80',
//   },
//   // Add 7 more testimonials here
// ];

// const ITEMS_PER_PAGE = 1; // Testimonials to show per page

// export default function Testimonials() {
//   const [currentPage, setCurrentPage] = useState(0);

//   // Pagination logic: display one testimonial per page
//   const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
//   const currentTestimonials = testimonials.slice(
//     currentPage * ITEMS_PER_PAGE,
//     (currentPage + 1) * ITEMS_PER_PAGE
//   );

//   const goToNextPage = () => {
//     setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
//   };

//   const goToPrevPage = () => {
//     setCurrentPage((prevPage) =>
//       prevPage === 0 ? totalPages - 1 : prevPage - 1
//     );
//   };

//   return (
//     <div className="flex flex-col items-center relative top-4 w-full bg-red-400 ">
//       {/* Heading Section */}
//       <div
//         className="text-center relative w-[60%] md:w[70%] lg:w-[70%] h-screen bg-no-repeat bg-contain lg:left-64  flex justify-center items-center bg-lime-400 "
//         style={{ backgroundImage: `url(${HeartIMG})` }}
//       >
//         <img
//           className="relative -z-10 lg:bottom-24 lg:left-24  lg:w-[80%] md:bottom-48 md:left-64 md:w-[66%] bottom-72 left-32 w-[75%]"
//           src={OurStudent}
//           alt="Our Student"
//         />
//         <h2 className=" text-2xl lg:text-7xl md:text-7xl font-bold text-gray-900 relative z-10 lg:bottom-28 lg:-inset-28 lg:-left-[44%] md:bottom-32 md:-inset-48  md:-left-[30%] 
//         w-full text-nowrap lg:space-x-28 md:space-x-0  space-x-1 -inset-72 -left-[44%] ">
//           What <span className="text-white text-2xl md:text-5xl lg:text-7xl  ">our Student’s</span> <span>say</span>
//         </h2>
//       </div>

//       {/* Testimonials */}
//        {currentTestimonials.map((testimonial, index) => (
//         <div
//           key={index}
//           className="relative max-w-4xl mx-auto px-6 py-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg"
//         >
//           {/* Quote Icon */}
//           <FaQuoteLeft className="absolute top-0 left-4 text-5xl text-white opacity-20" />

//           <p className="text-lg">{testimonial.message}</p>

//           {/* Reviewer Section */}
//           <div className="flex items-center mt-6 justify-center flex-col">
//              <img 
//               src={testimonial.image}
//               alt={testimonial.name} 
//               className="w-20 h-20 rounded-full border-4 border-white -mt-10"
//              />
//              <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
//             <p className="text-sm text-yellow-300">{testimonial.role}</p>
//           </div>
//         </div>
//       ))}

//       {/* Pagination Dots and Controls */}
//       <div className="flex space-x-2 mt-6">
//         <button
//           className="px-3 py-2 bg-gray-500 text-white rounded"
//           onClick={goToPrevPage}
//         >
//           Prev
//         </button>
//         {Array.from({ length: totalPages }).map((_, idx) => (
//           <span
//             key={idx}
//             className={`w-3 h-3 rounded-full ${
//               idx === currentPage ? 'bg-gray-500' : 'bg-gray-300'
//             }`}
//           />
//         ))}
//         <button
//           className="px-3 py-2 bg-gray-500 text-white rounded"
//           onClick={goToNextPage}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import { FaQuoteLeft } from 'react-icons/fa';
// import OurStudent from '../Assets/OurStudent.png';
// import HeartIMG from '../Assets/HeartIMG.png';
// import bgg from '../Assets/bgg.png';
// // Import Swiper core and required modules
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';



// const testimonials = [
//   {
//     name: 'Nandhakumar Muruganatham',
//     role: 'Digital Marketing Specialist',
//     message:
//       'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text.',
//     image: 'https://via.placeholder.com/80',
//   },
//   {
//     name: 'John Doe',
//     role: 'Software Engineer',
//     message:
//       'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
//     image: 'https://via.placeholder.com/80',
//   },
//   {
//     name: 'Jane Smith',
//     role: 'UI/UX Designer',
//     message:
//       'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
//     image: 'https://via.placeholder.com/80',
//   },
//   // Add 7 more testimonials here
// ];

// export default function Testimonials() {
//   return (
//     <div className="flex flex-col items-center relative w-full px-4 py-12 space-y-8">
//       {/* Heading Section */}

//       <div
//         className="relative z-0 w-full h-screen bg-no-repeat bg-cover   flex flex-col justify-center items-center bg-amber-200"
//         style={{ backgroundImage: `url(${bgg})` }}
//       >

//       <div
//         className="text-center relative w-[60%] md:w[70%] lg:w-[70%] h-screen bg-no-repeat bg-contain lg:left-64  flex justify-center items-center bg-lime-400 "
//         style={{ backgroundImage: `url(${HeartIMG})` }}
//       >
//         <img
//           className="relative -z-10 lg:bottom-24 lg:left-24  lg:w-[80%] md:bottom-48 md:left-64 md:w-[66%] bottom-72 left-32 w-[75%]"
//           src={OurStudent}
//           alt="Our Student"
//         />
//         <h2 className=" text-2xl lg:text-7xl md:text-7xl font-bold text-gray-900 relative z-10 lg:bottom-28 lg:-inset-28 lg:-left-[44%] md:bottom-32 md:-inset-48  md:-left-[30%] 
//         w-full text-nowrap lg:space-x-28 md:space-x-0  space-x-1 -inset-72 -left-[44%] ">
//           What <span className="text-white text-2xl md:text-5xl lg:text-7xl  ">our Student’s</span> <span>say</span>
//         </h2>
//       </div>

//       {/* Swiper Testimonials */}
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         className="w-full max-w-3xl"
//       >
//         {testimonials.map((testimonial, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative mx-auto px-6 py-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg">
//               {/* Quote Icon */}
//               <FaQuoteLeft className="absolute top-0 left-4 text-5xl text-white opacity-20" />

//               <p className="text-lg">{testimonial.message}</p>

//               {/* Reviewer Section */}
//               <div className="flex items-center mt-6 justify-center flex-col">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-20 h-20 rounded-full border-4 border-white -mt-10"
//                 />
//                 <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
//                 <p className="text-sm text-yellow-300">{testimonial.role}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//     </div>
//   );
// }

import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import OurStudent from '../Assets/OurStudent.png';
import HeartIMG from '../Assets/HeartIMG.png';
import bgg from '../Assets/bgg.png';
import Rectangle from '../Assets/Rectangle.png';
// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Nandhakumar Muruganatham',
    role: 'Digital Marketing Specialist',
    message:
      'Lorem ipsum is simply dummy text ofext of the printing and typesetting indusis seen the industrof the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy textLorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text.',
    image: 'https://via.placeholder.com/80',
  },
  {
    name: 'Nithya Shree',
    role: 'Software Engineer',
    message:
      'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
    image: 'https://via.placeholder.com/80',
  },
  {
    name: 'Mani Kandan',
    role: 'UI/UX Designer',
    message:
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    image: 'https://via.placeholder.com/80',
  },
  // Add more testimonials if needed
];

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center relative w-full px-4 py-12 space-y-8">
      {/* Heading Section */}
      <div
        className="relative z-0 w-full  bg-no-repeat bg-cover flex flex-col justify-center items-center "
        style={{ backgroundImage: `url(${bgg})` }}
      >
        <div
          className="text-center relative w-[60%] md:w[70%] lg:w-[70%] h-screen bg-no-repeat bg-contain lg:left-56 flex justify-center items-center"
          style={{ backgroundImage: `url(${HeartIMG})` }}
        >
          <img
            className="relative -z-10 lg:bottom-24 lg:left-24 lg:w-[80%] md:bottom-48 md:left-64 md:w-[66%] bottom-72 left-32 w-[75%]"
            src={OurStudent}
            alt="Our Student"
          />
          <h2 className="text-2xl lg:text-7xl md:text-7xl font-bold text-gray-900 relative z-10 lg:bottom-28 lg:-inset-28 lg:-left-[44%] md:bottom-32 md:-inset-48 md:-left-[30%] w-full text-nowrap lg:space-x-28 md:space-x-0 space-x-1 -inset-72 -left-[44%]">
            What <span className="text-white text-2xl md:text-5xl lg:text-7xl">our Student’s</span> <span>say</span>
          </h2>
        </div>

        {/* Swiper Testimonials */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="w-full max-w-3xl"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className=" flex relative text-white h-48 rounded-3xl   " style={{ backgroundImage: `url(${Rectangle})` }}>
                {/* Quote Icon */}
                <FaQuoteLeft className="absolute   left-4 text-4xl text-black " />

                <p className="text-sm justify-center items-center p-10">{testimonial.message}</p>

                {/* Reviewer Section */}

              </div>
              <div className="flex relative  items-center   justify-center flex-col -mt-10">


                

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 mb-10  rounded-xl border-4 border-white "
                />
                <div class="flex items-center ">
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <h3 className=" text-2xl font-semibold">{testimonial.name}</h3>
                <p className="text-lg text-yellow-300 mb-8">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
