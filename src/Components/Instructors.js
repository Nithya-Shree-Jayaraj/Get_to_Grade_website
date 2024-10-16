// import React, { useState, useEffect } from "react";
// import williamImg from './william.png'; // William's image path
// import jayImg from './jay.png';         // Jay's image path
// import bg_dm from './bg_dm.png';        // Background image for the cards

import pathBg from '../Assets/path_bg.png';                // Import the background image
import bg_dm from '../Assets/bg_dm.png';
// import bg_js from '../Assets/bg_js.png';
import allimg from '../Assets/allimg.png';


const instructors = [
  { name: 'William Hope', role: 'Digital Marketing', img: allimg },
  { name: 'Jay Selvan', role: 'Video Editor', img: allimg },
  { name: 'William Hope', role: 'Digital Marketing', img: allimg }, // Repeating for the demo
  { name: 'Jay Selvan', role: 'Video Editor', img: allimg },
  { name: 'William Hope', role: 'Digital Marketing', img: allimg },
  { name: 'Jay Selvan', role: 'Video Editor', img: allimg },
];

const Instructors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to update the visible images
  const updateIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % instructors.length);
  };

  // Automatically change the image every 2 seconds
  useEffect(() => {
    const interval = setInterval(updateIndex, 2000); // Change every 2 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-full h-screen bg-no-repeat bg-origin-border bg-contain" style={{ backgroundImage: `url(${pathBg})` }}>
      {/* Button */}
      <div className="absolute z-10 ml-[40%] mt-28 font-bold text-xls">
        <button className="flex flex-col items-center border border-gray-700 bg-slate-300 rounded-full w-52 p-2">
          Skilled Introduce
        </button>
      </div>

      {/* Content Section */}
      <div className="flex justify-center items-center h-full overflow-hidden">
        <div className="text-center">
          <h2 className="text-3xl font-bold mt-3">
            Our Top Class & Professional <br /> Instructors In One Place
          </h2>

          <div className="flex justify-center mt-6 space-x-12">
            {/* Render the visible instructors based on screen size */}
            <div className="flex overflow-hidden">
              <div className="flex flex-wrap space-x-10">
                {/* Show 1 image on mobile, 2 images on larger screens */}
                {instructors
                  .slice(currentIndex, currentIndex + (window.innerWidth < 768 ? 1 : 2))
                  .map((instructor, index) => (
                    <div key={index} className="flex relative">
                      <div className="flex relative -z-10 mt-20">
                        <img
                          src={bg_dm}
                          alt="bg_dm"
                          className="h-[100%] w-full mx-auto"
                        />
                      </div>
                      <div className="text-center absolute z-10 md:left-5">
                        <img
                          src={instructor.img}
                          alt={instructor.name}
                          className="md:h-96 md:w-72 mx-auto"
                        />
                        <h3 className="text-2xl font-bold mt-4">{instructor.name}</h3>
                        <p className="text-yellow-500 font-bold">
                          {instructor.role}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
