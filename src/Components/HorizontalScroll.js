import React, { useEffect, useState } from "react";
// Import your images
import categorie from '../Assets/categorie-icon.png';
import categorie2 from '../Assets/categorie-icon1.png';

const HorizontalScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current slide
  const [isTransitioning, setIsTransitioning] = useState(true); // Control smooth transitions

  const slides = [
    { id: 1, content: <img src={categorie} alt="Categorie" className="w-auto" /> }, // Image auto width  
    { id: 2, content: <button className="w-auto border border-slate-300 rounded-lg">Front-end Development</button> },
    { id: 3, content: <button className="w-auto border border-slate-300 rounded-lg">Back-end Development</button> },
    { id: 4, content: <button className="w-56 border border-slate-300 rounded-lg">Full-Stack Development</button> },
    { id: 5, content: <img src={categorie2} alt="Categorie 2" className="w-auto" /> }, // Image auto width
    { id: 6, content: <button className="w-56 border border-slate-300 rounded-lg">UI & UX</button> },
    { id: 7, content: <button className="w-56 border border-slate-300 rounded-lg">Graphic Designing</button> },
    { id: 8, content: <button className="w-56 border border-slate-300 rounded-lg">Adv Graphic Designing</button> },
    { id: 9, content: <button className="w-56 border border-slate-300 rounded-lg">Video Graphics</button> },
    { id: 10, content: <button className="w-56 border border-slate-300 rounded-lg">Video Editing</button> },
    { id: 11, content: <button className="w-56 border border-slate-300 rounded-lg">Business Management</button> },
    { id: 12, content: <button className="w-56 border border-slate-300 rounded-lg">Digital Marketing</button> },
    { id: 13, content: <button className="w-56 border border-slate-300 rounded-lg">Communication</button> },
    { id: 14, content: <button className="w-56 border border-slate-300 rounded-lg">Placement Training</button> }
  ];

  // Duplicated slides to create the looping effect
  const totalSlides = slides.length;
  const loopedSlides = [...slides, ...slides];

  // Automatically slide every 2 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsTransitioning(true); // Ensure smooth transition
      setCurrentIndex((prevIndex) => prevIndex + 1); // Move to the next slide
    }, 3000); // 2-second interval

    return () => clearInterval(slideInterval); // Cleanup
  }, [totalSlides]);

  // Reset index to create infinite loop effect
  useEffect(() => {
    if (currentIndex >= totalSlides) {
      setTimeout(() => {
        setIsTransitioning(false); // Disable transition temporarily
        setCurrentIndex(0); // Jump back to the first slide
      }, 500); // Wait for the transition to complete
    }
  }, [currentIndex, totalSlides]);

  return (
    <div className="w-full  h-full mt-2 px-4 lg:px-24 font-semibold overflow-hidden relative">
      {/* Slides container */}
      <div
        className={`flex transition-transform ${
          isTransitioning ? 'duration-500 ease-in-out' : ''
        }`}
        style={{ transform: `translateX(-${(currentIndex % totalSlides) * 50}%)` }} // Move slides horizontally
      >
        {loopedSlides.map((slide, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full sm:w-auto ${
              slide.content.type === 'img' ? 'mx-2' : 'mx-2'
            }`} // Smaller gap for images (mx-2), larger gap for buttons (mx-4)
          >
            <div
              className={`flex flex-col sm:flex-row justify-center items-center h-14 ${
                slide.content.type === 'img'
                  ? 'w-auto'
                  : 'w-60 bg-gray-300 border border-slate-300 rounded-lg'
              }`}
            >
              {slide.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
