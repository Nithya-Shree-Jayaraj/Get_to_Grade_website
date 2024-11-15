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
        <div className=''>

            <div className="md:max-h-[550px] max-h-[900px] bg-blue-950 flex flex-col relative top-20 ">
                <div className="container flex-grow px-4 py-8 mx-auto ">
                    <div className="relative overflow-hidden rounded-lg shadow-lg -top-24 bg-orange-50 ">
                        <div className="p-6 space-y-6">

                            {/* Header */}
                            <div className="flex flex-col items-center justify-between w-auto h-24 space-y-4 bg-white rounded-xl md:flex-row md:space-y-0">
                                <div className="flex items-center space-x-3">
                                    <div className="w-[87px] p-2 ml-2">
                                        <img src={footer} alt='footer' />
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg> */}
                                    </div>

                                    <div className="">
                                        <p className="font-bold text-red-500">Upcoming Events</p>
                                        <h1 className="text-2xl font-bold md:text-3xl">Base way Meetup</h1>
                                    </div>
                                </div>
                                <div className="flex mr-4 space-x-2 ">
                                    {Object.entries(timeLeft).map(([unit, value]) => (
                                        <div key={unit} className="bg-[#1a237e] text-white  rounded-lg text-center w-20 justify-center items-center p-6 space-y-4 ">
                                            <div className="text-xl font-bold">{value.toString().padStart(2, '0')}</div>
                                            <div className="text-xs">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex flex-col items-start justify-between space-y-6 md:flex-row md:space-y-0">
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="p-2">
                                            <div className="p-1">
                                                <div className="relative flex items-center justify-center md:top-0 top-16 lg:top-0">
                                                    <img src={logo} alt='logo' className="md:w-[96px]lg:w-[100px] w-32" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <span className="text-xl font-semibold">Get to Grade</span> */}
                                    </div>
                                    <p className="relative max-w-md text-sm font-bold md:text-sm lg:text-lg lg:top-0 md:top-0 top-12">&quot;I am committed to buildings your career and<br />amplifying your career growth&quot;</p>
                                    <div>
                                        <h3 className="relative mt-6 mb-2 font-bold underline lg:top-0 md:top-0 top-12 text-md lg:text-2xl md:text-xl decoration-orange-400">Reach Us</h3>
                                        <div className="relative flex pl-10 mt-3 space-x-2 lg:top-0 md:top-0 top-12">
                                            <a href="https://www.instagram.com/gettograde.inc/" className="w-5"><img src={Instagram} alt='Instagram' /></a>
                                            <a href="#" className="w-5"><img src={Facebook} alt='Facebook' /></a>
                                            <a href="#" className="w-5"><img src={youtube} alt='youtube' /> </a>
                                            <a href="#" className="w-5"><img src={Twitter} alt='Twitter' /></a>
                                            <a href="#" className="w-5"><img src={Linkedin} alt='Linkedin' /></a>
                                        </div>
                                    </div>
                                </div>

                                {/*Need help sections*/}
                                <div className="w-full p-6 space-y-4 md:w-auto ">
                                    <div>
                                        <h3 className="relative mb-2 font-bold underline top-5 lg:top-0 md:top-0 text-md lg:text-xl md:text-xl decoration-red-400">Need Any Help ?</h3>


                                        <p className="relative flex-col space-x-6 top-5 md:flex-col md:space-x-8">
                                            <a href="mailto:gettograde.in@gmail.com" className="text-sm font-bold text-black underline md:text-md lg:text-xl">gettograde@gmail.com</a>
                                            <a href="tel:+917708446450" className="relative text-sm font-bold text-black underline md:top-0 md:text-md lg:text-xl md:text-justify">+91 77084 46450</a>
                                        </p>

                                        {/* <p className="relative flex-row p-2 space-x-10 text-end" >
                   <a href="tel:+917708446450" className="text-sm font-bold text-black underline md:text-md lg:text-xl md:text-justify">+91 77084 46450</a>
                </p> */}

                                    </div>

                                    {/* Email subscription */}
                                    <div className="relative max-w-md p-6 mx-auto rounded-lg shadow-sm md:top-20">
                                        <h3 className="mb-2 text-sm font-bold text-center text-blue-800 md:text-lg lg:text-lg md:text-center">Get Regular Updates from Get to Grade</h3>
                                        <form className="relative">
                                            <input
                                                type="email"
                                                placeholder="Enter your email address"
                                                className="relative items-center h-16 px-4 py-3 pr-32 text-sm bg-gray-200 border-gray-700 rounded-full bg-gray-50-400 text-wh md:right-0 lg:right-0 right-7 w-72 md:w-full lg:w-full md:text-md lg:text-m dark:text-white focus:outline-1 focus:ring-2 focus:ring-black"
                                                required />
                                            <button
                                                type="submit"
                                                className="absolute px-4 py-2 text-white transition-colors rounded-full md:right-3 -right-8 md:top-2 top-3 text-md md:text-lg lg:text-md bg-blue-950 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                                Get Started
                                            </button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="relative text-sm text-center text-white underline md:text-md lg:text-lg -top-16">
                    <p>Copyrights © 2023 Get to Grade. All Rights Reserved</p>
                </footer>
            </div>


        </div>
    )
}
export default FooterSection