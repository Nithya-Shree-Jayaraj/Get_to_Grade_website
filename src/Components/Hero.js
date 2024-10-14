import wordImage from '../Assets/word.png';
import Gimg from '../Assets/Girl_img.png';
import DownArrow from '../Assets/DownArrow.png';
import UpArrow from '../Assets/UpArrow.png';
import plant from '../Assets/plant.png';
import Enroll from '../Assets/Enrow_now.png';
import ytube from '../Assets/utube_icon.png';
import HorizontalScroll from './HorizontalScroll';

export default function Hero() {
      return (
            <section className="py-12">
                  <div>
                        <HorizontalScroll />
                  </div>

                  {/* Main container for the content */}
                  <div className="mx-4 lg:mx-24 max-w-full flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between relative">

                        {/* Image container, first in mobile view */}
                        <div className="w-full lg:w-1/2 flex justify-center relative mb-8 lg:mb-0">
                              <div className="relative w-full h-auto z-0">
                                    <img className="w-full object-cover" src={Gimg} alt="" />
                                    {/* DownArrow and plant images */}
                                    <img className="absolute top-50 left-8 h-auto object-cover z-10 hidden lg:block" src={DownArrow} alt="" />
                                    <img className="absolute bottom-20 left-80 h-auto object-cover z-10 hidden lg:block" src={plant} alt="" />
                                    {/* UpArrow image, hidden on mobile */}
                                    <img className="absolute bottom-7 right-1/3 h-auto object-cover z-10 hidden lg:block" src={UpArrow} alt="" />
                              </div>
                        </div>

                        {/* Text content container */}
                        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:relative">
                              <img src={wordImage} alt="Word Image" className="w-full" />
                              {/* <p className="font-semibold text-2xl mt-6">Take up to 5 days to evaluate your purchase.</p> */}
                              <p className="text-gray-800 font-semibold text-lg mt-5 leading-relaxed">
                                    Education is not just about gaining knowledge, it’s
                                    about unlocking your potential.
                              </p>
                              <div className="flex mt-12 items-center">
                                    <img className="mr-4" src={Enroll} alt="Enroll Now" />
                                    <img className="h-20 mx-6" src={ytube} alt="YouTube Icon" />
                                    <a className="h-20 mt-5 font-bold underline" href="#">Play Video</a>
                              </div>
                        </div>
                  </div>
            </section>
      );
}
