import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
    return (
        <section className="py-16 bg-gray-50 flex flex-col items-center">
            {/* Heading Section */}
            <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                    What <span className="text-red-500 relative">
                        our Student’s 
                        <span className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-400 -z-10"></span>
                    </span> say
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Here's what our students say about their transformative learning experience: Real stories, real growth.
                    Discover firsthand the impact our courses have had in their lives.
                </p>
            </div>

            {/* Testimonial Box */}
            <div className="relative max-w-4xl mx-auto px-6 py-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg">
                {/* Quote Icon */}
                <FaQuoteLeft className="absolute top-0 left-4 text-5xl text-white opacity-20" />

                <p className="text-lg italic">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s...
                </p>

                {/* Reviewer Section */}
                <div className="flex items-center mt-6 justify-center flex-col">
                    <img
                        src="https://via.placeholder.com/80"
                        alt="Reviewer"
                        className="w-20 h-20 rounded-full border-4 border-white -mt-10"
                    />
                    <h3 className="mt-4 text-xl font-semibold">Nandhakumar Muruganatham</h3>
                    <p className="text-sm text-yellow-300">Digital Marketing Specialist</p>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex space-x-2 mt-6">
                <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
            </div>
        </section>
    );
}
