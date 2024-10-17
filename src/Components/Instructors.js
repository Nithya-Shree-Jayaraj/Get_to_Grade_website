import React, { useState, useEffect } from "react";
import pathBg from '../Assets/path_bg.png'; 
import bg_dm from '../Assets/bg_dm.png'; 
import allimg from '../Assets/allimg.png'; 
import ScrollImg from '../Assets/ScrollImg.png';

// import ImageSlider  from "./ImageSlider";

const instructors = [
  { name: 'William Hope', role: 'Digital Marketing', img: allimg },
  { name: 'Jay Selvan', role: 'Video Editor', img: allimg },
  { name: 'William Hope', role: 'ADV GD ', img: allimg },
  { name: 'Jay Selvan', role: 'Graphic Designer', img: allimg },
  { name: 'William Hope', role: 'Full stack', img: allimg },
  { name: 'Jay Selvan', role: 'Front-end ', img: allimg },
  { name: 'William Hope', role: 'Back-end', img: allimg },
  { name: 'Jay Selvan', role: 'Business', img: allimg },
  { name: 'William Hope', role: 'Data science', img: allimg },
  { name: 'Jay Selvan', role: 'Photograghy', img: allimg },
  { name: 'William Hope', role: 'cloud', img: allimg },
  { name: 'Jay Selvan', role: 'UI & UX', img: allimg },
  
];

const Instructors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateIndex = () => {
    const increment = windowWidth < 768 ? 1 : 2; 
    setCurrentIndex((prevIndex) => (prevIndex + increment) % instructors.length);
  };

  useEffect(() => {
    const interval = setInterval(updateIndex, 1000); 
    return () => clearInterval(interval); 
  }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div className="relative w-full h-screen bg-no-repeat bg-origin-border bg-contain " style={{ backgroundImage: `url(${pathBg})` }}>
      <div className="absolute z-10 ml-[40%] mt-12 font-bold text-xls">
        <button className="flex flex-col items-center border border-gray-700 bg-slate-300 rounded-full w-52 p-2">
          Skilled Introduce
        </button>
      </div>
      <div className="flex justify-center items-center h-full overflow-hidden">
        <div className="text-center">
          <h2 className="text-3xl font-bold mt-3">
            Our Top Class & Professional <br /> Instructors In One Place
          </h2>
          <div className="flex justify-center mt-6 space-x-12">
            <div className="flex overflow-hidden">
              <div className="flex space-x-10">
                {instructors
                  .slice(currentIndex, currentIndex + (windowWidth < 768 ? 1 : 2))
                  .map((instructor, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="relative mt-20">
                        <img
                          src={bg_dm}
                          alt="bg_dm"
                          className="w-full h-auto mb-16"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-end ">
                          <img
                            src={instructor.img}
                            alt={instructor.name}
                            className="md:h-96 md:w-72 mx-auto"
                          />
                          <h3 className="text-2xl font-bold ">{instructor.name}</h3>
                          <p className="text-yellow-500 font-bold">{instructor.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div>
        <button className="border border-slate-400  rounded-full"><img src={ScrollImg} alt="scroll_img"/></button>
      </div>
      {/* <ImageSlider/> */}
    </div>
    {/* <ImageSlider/> */}
    </div>
  );
};

export default Instructors;
