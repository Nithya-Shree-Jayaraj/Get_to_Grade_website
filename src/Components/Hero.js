import wordImage from '../Assets/word.png';
import Gimg from '../Assets/Girl_img.png';
import DownArrow from '../Assets/DownArrow.png'
import UpArrow from '../Assets/UpArrow.png';
import plant from '../Assets/plant.png';
import Enroll from '../Assets/Enrow_now.png';
import ytube from '../Assets/utube_icon.png';
import HorizontalScroll from './HorizontalScroll';


export default function Hero() {
      return <section>
            <div>    <HorizontalScroll />    </div>
            <div className='mx-24 max-w-full  flex relative'>
                  <div className='w-1/2 mt-24 relative ' >
                        <img src={wordImage} alt='' />
                        <p className='font-semibold text-2xl  mt-6'>Take up to 5 days to evaluate your purchase.</p>
                        <p className='text-gray-600 font-semibold text-lg w-full mt-5 font-hero-font'>Education is not just about gaining knowledge, it’s<br></br> about unlocking your potential.</p>
                        <span className='flex '>
                              <img className='mt-24 -mx-3' src={Enroll} alt='' />
                              <img className='h-20 mt-24 mx-6' src={ytube} alt=' ' />
                              <a className='h-20 mt-32 mx-3 font-bold underline' href='#' >Play Video</a>
                        </span>
                  </div>


                  <div className='w-1/2  flex relative ' >
                        <div className='w-full absolute top-0 left-20  h-auto object-cover z-0'>
                              <img src={Gimg} alt='' />
                        </div>

                        <div className='w-full relative'>
                              <div>
                                    <img className=' absolute top-32 -left-0 h-auto object-cover z-10' src={DownArrow} alt='' />
                              </div>
                              <div>
                                    <img className=' absolute   bottom-28 -left-24  h-auto object-cover z-10' src={plant} alt='' />
                              </div>
                              <div>
                                    <img className=' absolute bottom-7  right-96  h-auto object-cover z-10' src={UpArrow} alt='' />
                              </div>
                        </div>


                  </div>

            </div>


      </section>


}
