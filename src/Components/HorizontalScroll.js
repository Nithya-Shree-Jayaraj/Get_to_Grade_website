import React, { useEffect, useState } from "react";

// Import your images
import categorie from '../Assets/categorie-icon.png';
import categorie2 from '../Assets/categorie-icon1.png';

const HorizontalScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // To track current slide

  const slides = [
    { id: 1, content: <img src={categorie} alt="Categorie" /> },
    { id: 2, content: <button>Front-end Development</button> },
    { id: 3, content: <button>Back-end Development</button> },
    { id: 4, content: <button>Full-Stack Development</button> },
    { id: 5, content: <img src={categorie2} alt="Categorie 2" /> },
    { id: 6, content: <button>UI & UX</button> },
    { id: 7, content: <button>Graphic Designing</button> },
    { id: 8, content: <button> Adv Graphic Designing</button> },
    { id: 9, content: <button>Video Graphics </button> },
    { id: 10, content: <button> Video Editing</button> },
    { id: 11, content: <button>Business Management</button> },
    { id: 12, content: <button>Digital Marketing</button> },
    { id: 13, content: <button>Communication</button> },
    { id: 14, content: <button>Placement Training</button> }
  ];

  // Automatically slide every second
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 2 second interval

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="w-80% h-full mt-2 ">
      <div className="w-full  h-full mt-2 px-4 lg:px-24 font-semibold border-slate-300 overflow-hidden">
        {/* Slides container */}
        <div
          className="flex transition-transform duration-100"
          style={{ transform: `translateX(-${currentIndex * 2}%)` }} // Move slides horizontally
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-56 flex-shrink-0">
              <div className="flex justify-center items-center h-14 w-full bg-gray-100 border border-slate-100 rounded-lg">
                {slide.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default HorizontalScroll;
