import React, { useState } from 'react';
import LogoImg from '../Assets/gtg_logo.png';
import Vector from '../Assets/badge.png';
import Icon from '../Assets/Icon Container.png';

export default function Header() {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <section className='w-full px-0 overflow-hidden lg:px-4 xl:px-16'>
         <header className='flex items-center justify-between h-full gap-6 p-6'>
            <div className='flex flex-col items-center w-2/12 space-y-3 lg:flex-row '>
               <img src={LogoImg} alt="logo" className="w-14 h-14" />
               <h1 className='text-xl font-black lg:text-sm text-nowrap xl:text-xl'>Get to Grade</h1>
            </div>

            {/* Toggle button for mobile view */}
            
            <div className='order-3 block lg:hidden '>
               <button onClick={() => setMenuOpen(!menuOpen)} className='text-2xl'>
                  {menuOpen ? '✖' : '☰'} {/* Cross icon when menu is open */}
               </button>
            </div>

            {/* Navigation for Desktop View */}
            <nav className='justify-center flex-1 hidden w-6/12 px-10 lg:flex font-hero-poppins'>
               <ul className='flex mt-4 space-x-5 text-lg font-semibold xl:space-x-10 2xl:space-x-16'>
                  <li><a className='w-1/6 text-yellow-400 border-b-2 border-yellow-400' href="#">Home</a></li>
                  <li><a className='w-1/6 text-nowrap' href="#">About Us</a></li>
              
                  <li className="relative">
                     <span className="w-1/6 ">Course</span>
                     <span className="absolute top-0 right-0 px-1 py-0 -mt-6 -mr-1 text-xs rounded-full">
                        <img src={Vector} alt="notification" />
                     </span>
                  </li>
                  <li><a className='w-1/6' href="#">Mentor's</a></li>
                  <li><a className='w-1/6' href="#">Contact</a></li>
                  <li><a className='w-1/6' href="#">FAQ's</a></li>
               </ul>
            </nav>

            {/* Actions for Desktop */}
            <div className='flex items-center w-4/12 mt-4 space-x-5 lg:justify-end font-hero-font '> 
                <img src={Icon} alt='icon' className="w-6 h-6 sm:order-1 lg:order-1 lg:block xl:block sm:hidden" />
               <a className='hidden text-base font-bold border-b border-black lg:flex lg:order-2 lg:text-sm text-nowrap' href="#">Upload Your Resume</a>
               <button className='px-5 py-2 text-sm font-semibold text-white bg-blue-900 rounded-lg lg:px-4 lg:py-1 sm:order-2 sm:hidden lg:order-3 xl:font-bold text-nowrap lg:block xl:block 2xl:block'>Enroll Now</button>
            </div>
         </header>

         {/* Mobile Menu */}
         <div className={` lg:hidden fixed top-0 font-hero-poppins  left-0 w-full h-full bg-white z-30 transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-300`}>
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




