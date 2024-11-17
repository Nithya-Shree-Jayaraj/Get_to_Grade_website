import { useState, useEffect } from 'react'

import footer from "../Assets/footer.png";
import logo from "../Assets/logo.png";
import Instagram from "../Assets/Instagram.png";
import Facebook from "../Assets/Facebook.png";
import youtube from "../Assets/youtube.png";
import Twitter from "../Assets/Twitter.png";
import Linkedin from "../Assets/Linkedin.png";
const FooterSection = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 68, hours: 11, minutes: 29, seconds: 0 })

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime.seconds > 0) {
                    return { ...prevTime, seconds: prevTime.seconds - 1 }
                } else if (prevTime.minutes > 0) {
                    return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 }
                } else if (prevTime.hours > 0) {
                    return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 }
                } else if (prevTime.days > 0) {
                    return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 }
                } else {
                    clearInterval(timer)
                    return prevTime
                }
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])
    return (
        <div className='font-hero-poppins'>

            <div className="lg:max-h-[550px] max-h-[900px] bg-blue-950 flex flex-col relative top-20 font-hero-poppins ">
                <div className="container flex-grow px-4 py-8 mx-auto ">
                    <div className="relative overflow-hidden shadow-xl rounded-xl -top-20 bg-orange-50 ">
                        <div className="p-6 space-y-6">

                            {/* Header */}
                            <div className="flex flex-col items-center justify-between w-auto h-24 space-y-4 bg-white rounded-xl lg:flex-row lg:space-y-0">
                                <div className="flex items-center space-x-3">
                                    <div className="w-[87px] p-2 ml-2">
                                        <img src={footer} alt='footer' />
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg> */}
                                    </div>

                                    <div className="">
                                        <p className="font-bold text-red-500">Upcoming Events</p>
                                        <h1 className="text-2xl font-bold lg:text-2xl">Base way Meetup</h1>
                                    </div>
                                </div>
                                <div className="flex mr-4 space-x-2 ">
                                    {Object.entries(timeLeft).map(([unit, value]) => (
                                        <div key={unit} className="bg-[#1a237e] text-white  rounded-xl text-center w-20 justify-center items-center p-6 space-y-4 ">
                                            <div className="text-xl font-bold">{value.toString().padStart(2, '0')}</div>
                                            <div className="text-xs">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex flex-col items-start justify-between space-y-6 lg:flex-row lg:space-y-0">
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="p-2">
                                            <div className="p-1">
                                                <div className="relative flex items-center justify-center lg:top-0 top-16 xl:top-0">
                                                    <img src={logo} alt='logo' className="lg:w-[96px]xl:w-[100px] w-32" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <span className="text-xl font-semibold">Get to Grade</span> */}
                                    </div>
                                    <p className="relative max-w-lg text-sm font-bold lg:text-sm xl:text-xl xl:top-0 lg:top-0 top-12">&quot;I am committed to buildings your career and<br />amplifying your career growth&quot;</p>
                                    <div>
                                        <h3 className="relative mt-6 mb-2 text-lg font-bold underline xl:top-0 lg:top-0 top-12 xl:text-2xl lg:text-xl decoration-orange-400">Reach Us</h3>
                                        <div className="relative flex pl-10 mt-3 space-x-2 xl:top-0 lg:top-0 top-12">
                                            <a href="https://www.instagram.com/gettograde.inc/" className="w-5"><img src={Instagram} alt='Instagram' /></a>
                                            <a href="#" className="w-5"><img src={Facebook} alt='Facebook' /></a>
                                            <a href="#" className="w-5"><img src={youtube} alt='youtube' /> </a>
                                            <a href="#" className="w-5"><img src={Twitter} alt='Twitter' /></a>
                                            <a href="#" className="w-5"><img src={Linkedin} alt='Linkedin' /></a>
                                        </div>
                                    </div>
                                </div>

                                {/*Need help sections*/}
                                <div className="w-full p-6 space-y-4 lg:w-auto ">
                                    <div>
                                        <h3 className="relative mb-2 text-lg font-bold underline top-5 xl:top-0 lg:top-0 xl:text-xl lg:text-xl decoration-red-400">Need Any Help ?</h3>


                                        <p className="relative flex-col space-x-6 top-5 lg:flex-col lg:space-x-8">
                                            <a href="mailto:gettograde.in@gmail.com" className="text-sm font-bold text-black underline lg:text-lg xl:text-xl">gettograde@gmail.com</a>
                                            <a href="tel:+917708446450" className="relative text-sm font-bold text-black underline lg:top-0 lg:text-lg xl:text-xl lg:text-justify text-nowrap">+91 77084 46450</a>
                                        </p>

                                        {/* <p className="relative flex-row p-2 space-x-10 text-end" >
                   <a href="tel:+917708446450" className="text-sm font-bold text-black underline lg:text-lg xl:text-xl lg:text-justify">+91 77084 46450</a>
                </p> */}

                                    </div>

                                    {/* Email subscription */}
                                    <div className="relative max-w-lg p-6 mx-auto shadow-sm rounded-xl lg:top-20">
                                        <h3 className="hidden mb-2 text-sm font-bold text-center text-blue-800 lg:text-xl xl:text-xl lg:text-center xl:block">Get Regular Updates from Get to Grade</h3>
                                        <h3 className="block mb-2 text-sm font-bold text-center text-blue-800 lg:text-xl xl:text-xl lg:text-center xl:hidden ">Get Regular Updates from<br/>Get to Grade</h3>
                                        <form className="relative">
                                            <input
                                                type="email"
                                                placeholder="Enter your email address"
                                                className="relative items-center h-16 px-4 py-3 pr-32 text-sm bg-gray-200 border-gray-700 rounded-full bg-gray-50-400 text-wh lg:right-0 xl:right-0 right-7 w-72 lg:w-full xl:w-full lg:text-lg xl:text-m dark:text-white focus:outline-1 focus:ring-2 focus:ring-black"
                                                required />
                                            <button
                                                type="submit"
                                                className="absolute px-4 py-2 text-lg text-white transition-colors rounded-full lg:right-3 -right-8 lg:top-2 top-3 lg:text-xl xl:text-lg bg-blue-950 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                                Get Started
                                            </button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="relative text-sm text-center text-white underline lg:text-lg xl:text-xl -top-16">
                    <p>Copyrights © 2023 Get to Grade. All Rights Reserved</p>
                </footer>
            </div>


        </div>
    )
}
export default FooterSection