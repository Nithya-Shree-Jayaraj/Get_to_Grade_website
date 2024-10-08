import categorie from '../Assets/categorie-icon.jpg';
import categorie2 from '../Assets/categorie-icon (1).jpg';
import wordImage from '../Assets/wimg.jpg';
import Gimg from '../Assets/Gimg.jpg';
import DownArrow from '../Assets/DownArrow.png'
import UpArrow from '../Assets/UpArrow.png';
import plant from '../Assets/plant.png';
import Enroll from '../Assets/Enrow_now.png';
import ytube from '../Assets/Ytube.jpg';


export default function Hero(){
    return <section>
      <div class="flex w-full h-full items-center mt-2 px-24 font-semibold  border-slate-300">
      <div class="space-x-3 flex flex-1 text-sm">

          <div class="mx-4 w-14 h-14 rounded-lg flex items-center justify-center space-x-3">
              <img src={categorie} alt='' />
          </div>
        
          <div class="w-56  h-14 rounded-lg flex items-center justify-center border border-slate-100 bg-gray-100 text-slate-950" > 
          <button>Front-end Development</button>
          </div>
     
          <div class="w-64 h-14 rounded-lg flex items-center justify-center border border-slate-100  bg-gray-100 text-slate-950 ">
                <button>Back-end Development</button>
          </div>
    
          <div class="w-40 h-14 rounded-lg flex items-center justify-center border border-slate-100  bg-gray-100 text-slate-950 ">
                <button>Full-Stack Development</button>
          </div>
       
          <div class="w-44 h-14 rounded-lg flex items-center justify-center">
                <img src={categorie2} alt='' />
          </div>

          <div class="w-20 h-14 rounded-lg flex items-center justify-center border border-slate-100  bg-gray-100 text-slate-950">
                <button>Ui & Ux</button>
          </div>

          <div class="w-48 h-14 rounded-lg flex items-center justify-center border border-slate-100  bg-gray-100 text-slate-950">
                <button>Graphic Designing</button>
          </div>
      </div>
    </div>

    <div className='mx-24 max-w-full  flex relative'>
           <div className='w-1/2 mt-24 relative ' >
              <img src={wordImage} alt=''  />
              <p className='font-semibold text-2xl  mt-6'>Take up to 5 days to evaluate your purchase.</p>
              <p className='text-gray-600 font-semibold text-lg w-full mt-5 font-hero-font'>Education is not just about gaining knowledge, it’s<br></br> about unlocking your potential.</p>
              <span className='flex '>
              <img className='mt-24 -mx-3'  src={Enroll} alt='' />
              <img className='h-20 mt-24 mx-6' src={ytube} alt=' '  />
              <a  className='h-20 mt-32 mx-3 font-bold underline'  href='#' >Play Video</a>
              </span>
           </div>


           <div className='w-1/2  flex relative ' >
                <div className='max-w-full absolute top-0 left-20  h-auto object-cover z-0'>
                      <img  src={Gimg} alt=''  />
                </div>
                
               <div className='w-full relative'>
                    <div>
                       <img className=' absolute top-32 -left-0 h-auto object-cover z-10' src={DownArrow} alt='' />
                    </div>
                    <div>
                      <img  className=' absolute   bottom-28 -left-24  h-auto object-cover z-10' src={plant} alt='' />
                    </div>
                    <div>
                      <img  className=' absolute bottom-7  right-96  h-auto object-cover z-10' src={UpArrow} alt='' />
                    </div>
                </div> 

                
    </div>
        
    </div>


   </section> 

   
}
