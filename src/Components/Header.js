import React, { useState } from 'react';
import LogoImg from '../Assets/gtg_logo.png';
import Vector from '../Assets/badge.png';
import Icon from '../Assets/Icon Container.png';

export default function Header() {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <section className=''>
         <header className='flex items-center justify-between h-full p-6 '>
            <div className='flex flex-col items-center space-y-3 md:flex-row '>
               <img src={LogoImg} alt="logo" className="w-14 h-14" />
               <h1 className='text-xl font-black'>Get to Grade</h1>
            </div>

            {/* Toggle button for mobile view */}
            
            <div className='order-3 block md:hidden '>
               <button onClick={() => setMenuOpen(!menuOpen)} className='text-2xl'>
                  {menuOpen ? '✖' : '☰'} {/* Cross icon when menu is open */}
               </button>
            </div>

            {/* Navigation for Desktop View */}
            <nav className='justify-center flex-1 hidden w-6/12 px-10 md:flex'>
               <ul className='flex font-bold space-x-9'>
                  <li><a className='text-yellow-400 border-b-4 border-yellow-400' href="#">Home</a></li>
                  <li><a className='' href="#">About Us</a></li>
                  <li className="relative">
                     <span className="text-sm font-bold">Course</span>
                     <span className="absolute top-0 right-0 px-1 py-0 -mt-6 -mr-1 text-xs font-bold rounded-full">
                        <img src={Vector} alt="notification" />
                     </span>
                  </li>
                  <li><a href="#">Mentor's</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">FAQ's</a></li>
               </ul>
            </nav>

            {/* Actions for Desktop */}
            <div className='flex items-center space-x-5 md:justify-end'> 
                <img src={Icon} alt='icon' className="w-6 h-6 sm:order-1 md:order-1 " />
               <a className='hidden text-base font-semibold border-b border-black md:flex md:order-2' href="#">Upload Your Resume</a>
               <button className='px-5 py-2 text-sm font-semibold text-white bg-blue-900 rounded-md md:px-4 md:py-1 md:font-bold sm:order-2 md:order-3'>Enroll Now</button>
            </div>
         </header>

         {/* Mobile Menu */}
         <div className={` md:hidden fixed top-0 left-0 w-full h-full bg-white z-30 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-300`}>
            <div className='p-6'>
               <button onClick={() => setMenuOpen(false)} className='text-2xl'>
                  ✖ {/* Cross icon to close the menu */}
               </button>
               <ul className='flex flex-col mt-6 space-y-4 font-bold'>
                  <li><a className='text-yellow-400 border-b-4 border-yellow-400' href="#">Home</a></li>
                  <li><a href="#">About us</a></li>
                  <li className="relative">
                     <span>Course</span>
                     <span className="absolute top-0 right-0 px-1 py-0 -mt-5 -mr-1 text-xs font-bold rounded-full">
                        <img src={Vector} alt="notification" />
                     </span>
                  </li>
                  <li><a href="#">Mentor's</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">FAQ's</a></li>    
               </ul>
            </div>
         </div>
   
      </section>
   );
}




