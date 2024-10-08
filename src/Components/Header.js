import LogoImg from '../Assets/get_to_grade_logo.jpg';
import Vector from '../Assets/Vector.jpg';
import Icon from '../Assets/Icon Container.jpg';


export default function Header() {
    return <header className='flex w-full justify-normal p-12  items-center '>
            <div className='flex mx-10 items-center space-x-0'>
               <img  src={LogoImg} alt="logo"/>
               <h1 className='font-black center-ele'>Get to Grade</h1>
            </div>
           <div className='flex-1 px-36'>
              <ul className='flex space-x-9 font-bold '>
                <li><a className='text-yellow-400 border-b-4 border-yellow-400  ' href="#">Home</a>          </li>
                <li><a href="#">About us</a>      </li>
                <div className="relative inline-block">
                   <li><span className="text-sm ">Course</span> 
                   <span className="absolute top-0 right-0 -mt-5 -mr-1  text-xs font-bold px-1 py-0 rounded-full"><img src={Vector}  /></span>     </li>
                </div>
                <li><a href="#">Mentor's</a>      </li>
                <li><a href="#">Contact</a>       </li>
                <li><a href="#">FAQ's</a>           </li>
              </ul> 
           </div>
           <div className ='flex space-x-5 font-semibold text-sm min-w-3.5'>
               <img src={Icon} alt=''/>
               <a className='font-semibold border-b pb-0.5 mb-0.5 border-black text-base' href="#">Upload Your Resume</a>
               <button className='text-white text-sm font-bold bg-blue-900 rounded-md p-4 h-auto py-1 '>Enroll Now</button>
           </div>
    </header>


}