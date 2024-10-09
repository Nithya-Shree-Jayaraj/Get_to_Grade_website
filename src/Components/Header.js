import React, { useState } from 'react';
import LogoImg from '../Assets/gtg_logo.png';
import Vector from '../Assets/badge.png';
import Icon from '../Assets/Icon Container.png';

export default function Header() {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <>
         <header className='flex w-full justify-between p-6 items-center'>
            <div className='flex items-center space-x-3'>
               <img src={LogoImg} alt="logo" className="w-14 h-14" />
               <h1 className='font-black text-xl'>Get to Grade</h1>
            </div>

            {/* Toggle button for mobile view */}
            <div className='block md:hidden'>
               <button onClick={() => setMenuOpen(!menuOpen)} className='text-2xl'>
                  &#9776; {/* Hamburger icon */}
               </button>
            </div>

            {/* Navigation for Desktop View */}
            <nav className='hidden md:flex flex-1 justify-center px-10'>
               <ul className='flex space-x-9 font-bold'>
                  <li><a className='text-yellow-400 border-b-4 border-yellow-400' href="#">Home</a></li>
                  <li><a href="#">About us</a></li>
                  <li className="relative">
                     <span className="text-sm">Course</span>
                     <span className="absolute top-0 right-0 -mt-5 -mr-1 text-xs font-bold px-1 py-0 rounded-full">
                        <img src={Vector} alt="notification" />
                     </span>
                  </li>
                  <li><a href="#">Mentor's</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">FAQ's</a></li>
               </ul>
            </nav>

            {/* Actions for Desktop */}
            <div className='hidden md:flex items-center space-x-5'>
               <img src={Icon} alt='icon' className="w-8 h-8" />
               <a className='font-semibold border-b border-black text-base' href="#">Upload Your Resume</a>
               <button className='text-white bg-blue-900 rounded-md px-4 py-1 font-bold'>Enroll Now</button>
            </div>
         </header>

         {/* Mobile Menu */}
         <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-white w-full p-6`}>
            <ul className='flex flex-col space-y-4 font-bold'>
               <li><a className='text-yellow-400 border-b-4 border-yellow-400' href="#">Home</a></li>
               <li><a href="#">About us</a></li>
               <li className="relative">
                  <span>Course</span>
                  <span className="absolute top-0 right-0 -mt-5 -mr-1 text-xs font-bold px-1 py-0 rounded-full">
                     <img src={Vector} alt="notification" />
                  </span>
               </li>
               <li><a href="#">Mentor's</a></li>
               <li><a href="#">Contact</a></li>
               <li><a href="#">FAQ's</a></li>
            </ul>
            <div className='flex flex-col space-y-4 mt-6'>
               <a className='font-semibold border-b border-black text-base' href="#">Upload Your Resume</a>
               <button className='text-white bg-blue-900 rounded-md px-4 py-1 font-bold'>Enroll Now</button>
            </div>
         </div>


      </>
   );
}
