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
        <section className=' max-h-[900px] '>
        <div className="relative flex flex-col items-center w-full py-12 overflow-hidden  md:top-4 top-0 md:max-h-[900px] 2xl:max-h-[1200px] max-h-[750px]">
            {/* Heading Section */}
            <div
                className="relative z-0 flex flex-col items-center justify-center w-full bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${bgg})` }}
            >
                <img
                                src={ellipse}
                                alt={ellipse}
                                className="w-20 h-20 absolute  lg:bottom-[50%] lg:right-[29%] bottom-[58%] right-[13%] 2xl:bottom-[56%]  2xl:right-[36%] "
                            />
                            <img
                                src={ellipse}
                                alt={ellipse}
                                className="absolute  w-20 h-20 lg:bottom-[32%] lg:left-[24%] bottom-[38%] left-[1%] 2xl:bottom-[44%] 2xl:left-[33%]"
                            />
                <div
                    className="text-center relative w-[60%]  lg:w-[40%] 2xl:w-[42%] h-screen bg-no-repeat bg-contain lg:left-2 md:left-64 left-0  flex justify-center items-center "
                    style={{ backgroundImage: `url(${HeartIMG})` }}
                >
                    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  lg:max-w-full 2xl:max-w-full ">
                        <div class="relative max-w-3xl items-center">
                            <img
                                className="relative -z-10 lg:bottom-32 lg:-left-4  lg:w-[100%] md:bottom-48 md:left-64  bottom-40 left-0 w-[100%] 2xl:bottom-80 "
                                src={whole}
                                alt="Our Student"
                            />
                            <div className='lg:w-[160%] w-[180%] h-auto justify-center relative lg:bottom-16 lg:right-48 right-24 bottom-32  2xl:w-[180%] 2xl:bottom-64 2xl:right-72'>
                            <p class=" text-base text-gray-700 lg:text-lg  font-hero-font font-bold 2xl:text-3xl ">
                                Here's what our students say about their transformative learning experience:
                                 Real stories, real growth. Discover firsthand the impact our courses have had in their lives.
                            </p>

                            </div>
                             <img
                                src={roll}
                                alt={roll}
                                className="absolute z-20 h-auto -bottom-24 w-52 -right-[35%] hidden lg:block  2xl:-bottom-10 2xl:h-80 2xl:-right-[40%] 2xl:hidden"
                            />
                            
                            <img
                                src={dot}
                                alt={dot}
                                className="absolute z-20 w-20 h-20 lg:bottom-0 lg:-right-10 -right-14 bottom-16 2xl:bottom-40 2xl:right-10 2xl:w-28 2xl:h-28"
                            />
                        </div>
                    </div>
                </div>
                {/* Swiper Testimonials */}
                <div className='relative 2xl:bottom-96 '><Swiper
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
                    className="w-full max-w-3xl bottom-60"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className='ml-48 mr-48 md:mr-0 md:ml-0 lg:px-10 2xl:px-0'>
                            <div className="z-30 flex h-48 text-white rounded-3xl " style={{ backgroundImage: `url(${Rectangle})` }}>
                                {/* Quote Icon */}
                                <FaQuoteLeft className="absolute text-4xl text-black lg:left-10 left-52 2xl:left-6" />

                                <p className="items-center justify-center p-10 text-sm">{testimonial.message}</p>

                                {/* Reviewer Section */}

                            </div>
                            </div>
                            
                            <div className="relative flex flex-col items-center justify-center -mt-10 ">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-20 h-20 mb-2 rounded-xl "
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
                                <h3 className="text-lg font-semibold lg:text-2xl md:text-2xl">{testimonial.name}</h3>
                                <p className="text-lg text-black mb-7">{testimonial.role}</p>
                                
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
