import React from 'react';
import start from '../Assets/start.png'; // This is for the start image

function CareerJourney() {
  return (
    <div className="p-10 ">
      {/* Header Section with Start Image */}
      <div className="flex flex-col justify-center items-center relative">
        <img
          className="absolute w-40 mt-40 h-12"
          src={start}
          alt="Start"
        />
        {/* Description with a <br> for line break */}
        <p className="absolute text-gray-600 text-center mt-56 md:mt-64 lg:mt-72 font-serif text-sm md:text-lg lg:text-xl">
          Learn on a dynamic platform with high-quality content, live sessions & mentoring
          <br />
          from leading industry experts to achieve your desired goal.
        </p> <br/> <br/> <br/> <br/><br/>
        {/* Main Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-80">
          Our Expert Services for your Career Goals
        </h1>
      </div>

      {/* Background Image Section */}
      <div
        className="mt-20 w-full h-screen bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${require('../Assets/flowchart.png')})` }}
      >
        {/* Content over the background image can go here */}
      </div>
    </div>
  );
}

export default CareerJourney;
