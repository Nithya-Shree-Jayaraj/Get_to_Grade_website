import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import OurStudent from '../Assets/OurStudent.png';
import HeartIMG from '../Assets/HeartIMG.png';
import bgg from '../Assets/bgg.png';
import Rectangle from '../Assets/Rectangle.png';
import dot from '../Assets/dot.png'
import roll from '../Assets/roll_arrow.png' 
import ellipse from '../Assets/Ellipse.png'
import whole from '../Assets/full.png'

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
// import 'swiper/css';

import 'swiper/css/pagination';
import FooterSection from './FooterSection';

const testimonials = [
    {
        name: 'Nandhakumar Muruganatham',
        role: 'Digital Marketing Specialist',
        message:
            'Lorem ipsum is simply dummy text ofext of the printing and typesetting  industry\'s standandustry\'s standard dummy text.',
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
    {
        name: 'Nandhakumar Muruganatham',
        role: 'Digital Marketing Specialist',
        message:
            'Lorem ipsum is simply dummy text ofext of the printing and typesetting  industry\'s standandustry\'s standard dummy text.',
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
export default function check() {
    return (
        <section className=' max-h-[900px] font-hero-poppins '>
        <div className="relative flex flex-col items-center w-full py-12 overflow-hidden  lg:top-4 top-0 lg:max-h-[900px] 2xl:max-h-[1200px] max-h-[900px] ">
            {/* Heading Section */}
            <div
                className="relative z-0 flex flex-col items-center justify-center w-full bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${bgg})` }}
            >
                <img
                                src={ellipse}
                                alt={ellipse}
                                className="w-20 h-20 absolute  xl:bottom-[56%] xl:right-[32%] lg:bottom-[50%] lg:right-[22%] bottom-[55%] right-[20%] 2xl:bottom-[55%]  2xl:right-[38%] "
                            />
                            <img
                                src={ellipse}
                                alt={ellipse}
                                className="absolute  w-20 h-20 xl:bottom-[38%] xl:left-[28%] lg:left-[20%] lg:bottom-[33%] bottom-[35%] left-[5%] 2xl:bottom-[43%] 2xl:left-[35%]"
                            />
                <div
                    className="text-center relative w-[60%]  xl:w-[40%] 2xl:w-[42%] lg:w-[50%] h-screen bg-no-repeat bg-contain xl:left-2 lg:left-10     left-0  flex justify-center items-center "
                    style={{ backgroundImage: `url(${HeartIMG})` }}
                >
                    <div class="px-4 py-16 mx-auto sm:max-w-xl lg:max-w-full  xl:max-w-full 2xl:max-w-full lg:mt-32 xl:mt-0 ">
                        <div class="relative max-w-2xl items-center">
                            <img
                                className="relative -z-10 xl:bottom-32 xl:-left-0  xl:w-[100%] lg:bottom-44 lg:-ml-[8%]  bottom-52 left-0 w-[100%] 2xl:bottom-80 "
                                src={whole}
                                alt="Our Student"
                            />
                            <div className='xl:w-[160%] w-[180%] h-auto justify-center relative lg:right-56 xl:bottom-16 xl:right-48 right-24 bottom-40
                              2xl:w-[180%] 2xl:bottom-64 2xl:right-72 sm:right-44'>
                            <p class=" text-base  xl:text-xl  font-hero-poppins font-semibold 2xl:text-2xl sm:text-lg ">
                                Here's what our students say about their transformative learning experience:
                                 Real stories, real growth. Discover firsthand the impact our courses have had in their lives.
                            </p>

                            </div>
                             {/* <img
                                src={roll}
                                alt={roll}
                                className="absolute z-20 h-auto -bottom-24 w-52 -right-[35%] hidden xl:block   2xl:-bottom-10 2xl:h-80 2xl:-right-[40%]
                                 2xl:hidden"
                            /> */}
                            
                            <img
                                src={dot}
                                alt={dot}
                                className="absolute z-20 w-20 h-20 xl:bottom-0 xl:-right-10 -right-14 bottom-16 2xl:bottom-40 2xl:right-10 2xl:w-28 2xl:h-28"
                            />
                        </div>
                    </div>
                </div>
                {/* Swiper Testimonials */}
                <div className='relative -mt-16 md:-mt-0 lg:-mt-0 xl:-mt-0 2xl:bottom-96'><Swiper
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
                    className="w-full max-w-2xl bottom-60 xl:bottom-64 2xl:bottom-60 "
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className='ml-48 mr-48 lg:mr-0 lg:ml-0 xl:px-10 2xl:px-0 '>
                            <div className="z-30 flex h-48 text-white rounded-2xl " style={{ backgroundImage: `url(${Rectangle})` }}>
                                {/* Quote Icon */}
                                <FaQuoteLeft className="absolute text-4xl text-black xl:left-10 left-52 2xl:left-6" />

                                <p className="items-center justify-center p-10 text-sm">{testimonial.message}</p>

                                {/* Reviewer Section */}

                            </div>
                            </div>
                            
                            <div className="relative flex flex-col items-center justify-center -mt-10 ">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-20 h-20 -mb-1 rounded-xl "
                                />
                                <div class="flex items-center leading-relaxed mt-2 ">
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
                                <h3 className="mt-3 mb-4 font-semibold text-l xl:text-xl lg:text-lg lg:mb-2 lg:-mt-1">{testimonial.name}</h3>
                                <p className="mb-12 font-light text-black text-md xl:text-lg ">{testimonial.role}</p>
                                
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper></div>
                
            </div>

            
        </div>
        <FooterSection/>
        </section>
    );
}
