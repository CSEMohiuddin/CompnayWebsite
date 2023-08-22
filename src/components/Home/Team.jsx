import {MdVerified} from 'react-icons/md'
import {AiFillGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {BsInfoCircle} from 'react-icons/bs'
import {Swiper, SwiperSlide} from 'swiper/react'
import { FreeMode, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import mohiuddin from '../../assets/images/mohiuddin.jpg'
import rasedul from '../../assets/images/rasedul.jpg'
import eliza from '../../assets/images/eliza.jpg'
import josiah from '../../assets/images/josiah.png'
import josiah2 from '../../assets/images/josiah2.png'
import team1 from '../../assets/images/team1.jpg'
import team2 from '../../assets/images/team2.jpg'

function Team() {
  return (
    <div id='team' className='w-full dark:bg-slate-950 bg-grayWhite '>
        <div className='container py-5 md:py-10'>
            <h1 className="heading text-center">Team</h1>
            <p className='text-center text-base md:text-xl font-sans font-medium md:font-semibold mt-3 text-blue'>Talk with our amazing team.</p>
            <div className='mt-5 md:mt-10 '>
              <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode, Autoplay]}
                className="mySwipe"
                loop={true}
                speed={2500}
                autoplay={{
                    delay: 1500,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween : 20
                  },
                  580: {
                    slidesPerView: 1,
                    spaceBetween : 20
                  },
                  820: {
                    slidesPerView: 2,
                    spaceBetween : 20
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween : 20
                  }
                }}
              >
                <SwiperSlide>
                    <div className='flex xsm:flex-row flex-col gap-3 items-center px-2 py-4 bg-white dark:bg-slate-900 dark:hover:bg-zinc-800 hover:bg-[#E6E8FFFF] duration-300 rounded-md'>
                        <div className='h-48 w-48 rounded-full border-8 border-grayWhite dark:border-gray-800 shadow-md overflow-hidden'>
                            <img className='w-full h-full object-cover' src={mohiuddin} alt="" />
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                            <span>
                                <h2 className='text-lg font-bold dark:text-gray-300 text-dark'>Md: Mohiuddin</h2>
                                <h4 className='text-sm font-semibold text-blue'>Frontend Engineer</h4>
                                <span className='flex items-center gap-1 text-[10px] text-[#00B4E0FF]'><MdVerified size={10}/>Verified Expert in Development</span>
                            </span>
                            <span>
                                <p className='text-sm dark:text-gray-400 text-darkLight font-medium'>He is an expart in Javascript React js, Next Js, Node Js, Express Js, Redux, Mongodb</p>
                            </span>
                            <span className='flex flex-col gap-2'>
                                <p className='text-xs dark:text-gray-400 text-darkLight font-normal'>Location: Dhaka, Bangladesh</p>
                                <div className='flex justify-between items-center'>
                                    <span className='flex gap-2 items-center'>
                                        <span title='Github' className='text-blue dark:text-gray-400 hover:text-dark dark:hover:text-slate-100 duration-300 cursor-pointer '><AiFillGithub size={22} /></span>
                                        <a href="https://web.facebook.com/Mohiuddin.bd.CSprogrammer/"><span title='Facebook' className='text-blue dark:hover:text-slate-100 dark:text-gray-400 hover:text-dark duration-300 cursor-pointer '><BsFacebook size={18} /></span></a>
                                        <a href="https://www.linkedin.com/in/programmer-mohiuddin/"><span title='Linkdin' className='text-white dark:hover:bg-slate-100  dark:text-slate-900 flex justify-center items-center hover:bg-dark duration-300 cursor-pointer h-5 w-5 overflow-hidden rounded-full dark:bg-gray-400 bg-blue '><FaLinkedinIn size={13} /></span></a>
                                    </span>
                                    <span title='More Info' className='text-blue dark:text-gray-400 cursor-pointer dark:hover:text-slate-100' ><BsInfoCircle size={18}/></span>
                                </div>
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex xsm:flex-row flex-col gap-3 items-center px-2 py-4 bg-white dark:bg-slate-900 hover:bg-zinc-800 hover:bg-[#E6E8FFFF] duration-300 rounded-md'>
                        <div className='h-48 w-48 rounded-full border-8 border-grayWhite dark:border-gray-800 shadow-md overflow-hidden'>
                            <img className='w-full dark:hidden h-full object-cover' src={josiah} alt="img" />
                            <img className='w-full hidden dark:block h-full object-cover' src={josiah2} alt="img" />
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                            <span>
                                <h2 className='text-lg font-bold dark:text-gray-300 text-dark'>Josiah Contreras</h2>
                                <h4 className='text-sm font-semibold text-blue'>CEO</h4>
                                <span className='flex items-center gap-1 text-[10px] text-[#00B4E0FF]'><MdVerified size={10}/>Verified in Business Development</span>
                            </span>
                            <span>
                                <p className='text-sm dark:text-gray-400 text-darkLight font-medium'>Artificial Intelligence (AI), Python, Prompt Engineering, Problem Solving</p>
                            </span>
                            <span className='flex flex-col gap-2'>
                                <p className='text-xs dark:text-gray-400 text-darkLight font-normal'>Location: Toronto Area, Canada</p>
                                <div className='flex justify-between items-center'>
                                    <span className='flex gap-2 items-center'>
                                        <span title='Github' className='text-blue dark:text-gray-400 dark:hover:text-slate-100 hover:text-dark duration-300 cursor-pointer '><AiFillGithub size={22} /></span>
                                        <span title='Facebook' className='text-blue dark:text-gray-400 dark:hover:text-slate-100 hover:text-dark duration-300 cursor-pointer '><BsFacebook size={18} /></span>
                                        <a href="https://www.linkedin.com/in/josiah-contreras-62a81359/"><span title='Linkdin' className='text-white dark:hover:bg-slate-100 dark:text-slate-900 dark:bg-gray-400 flex justify-center items-center hover:bg-dark duration-300 cursor-pointer h-5 w-5 overflow-hidden rounded-full bg-blue '><FaLinkedinIn size={13} /></span></a>
                                    </span>
                                    <span title='More Info' className='text-blue cursor-pointer dark:text-gray-400 dark:hover:text-slate-100' ><BsInfoCircle size={18}/></span>
                                </div>
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex xsm:flex-row flex-col  gap-3 items-center px-2 py-4 dark:bg-slate-900 dark:hover:bg-zinc-800 bg-white hover:bg-[#E6E8FFFF] duration-300 rounded-md'>
                        <div className='h-48 w-48 rounded-full flex justify-center items-center border-8 dark:border-slate-800 border-grayWhite shadow-md overflow-hidden'>
                            <img className='w-full h-full object-cover' src={rasedul} alt="" />
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                            <span>
                                <h2 className='text-lg font-bold dark:text-gray-300 text-dark'>KH Rasedul</h2>
                                <h4 className='text-sm font-semibold text-blue'>Full Stack Engineer</h4>
                                <span className='flex items-center gap-1 text-[10px] text-[#00B4E0FF]'><MdVerified size={10}/>Verified Expert in Development</span>
                            </span>
                            <span>
                                <p className='text-sm text-darkLight dark:text-gray-400 font-medium'>He is an expart in Javascript, Node Js, MongoDB, Pyhton, Solidity, C#, AWS and Linux</p>
                            </span>
                            <span className='flex flex-col gap-2'>
                                <p className='text-xs dark:text-gray-400 text-darkLight font-normal'>Location: Dhaka, Bangladesh</p>
                                <div className='flex justify-between items-center'>
                                    <span className='flex gap-2 items-center'>
                                        <a href="https://github.com/khrasedul-dev"><span title='Github' className='text-blue dark:hover:text-slate-100 dark:text-gray-400 hover:text-dark duration-300 cursor-pointer '><AiFillGithub size={22} /></span></a>
                                        <a href="https://web.facebook.com/khraseul.dev">  <span title='Facebook' className='text-blue dark:hover:text-slate-100 dark:text-gray-400 hover:text-dark duration-300 cursor-pointer '><BsFacebook size={18} /></span></a>
                                        <span title='Linkdin' className='text-white flex justify-center dark:text-slate-900 dark:bg-gray-400 dark:hover:bg-slate-100 items-center hover:bg-dark duration-300 cursor-pointer h-5 w-5 overflow-hidden rounded-full bg-blue '><FaLinkedinIn size={13} /></span>
                                    </span>
                                    <span title='More Info' className='text-blue cursor-pointer dark:text-gray-400 dark:hover:text-slate-100' ><BsInfoCircle size={18}/></span>
                                </div>
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex xsm:flex-row flex-col  gap-3 items-center px-2 py-4 dark:bg-slate-900 dark:hover:bg-zinc-800 bg-white hover:bg-[#E6E8FFFF] duration-300 rounded-md'>
                        <div className='h-48 w-48 rounded-full flex justify-center items-center border-8 dark:border-slate-800 border-grayWhite shadow-md overflow-hidden'>
                            <img className='w-full h-full object-cover' src={eliza} alt="" />
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                            <span>
                                <h2 className='text-lg font-bold dark:text-gray-300 text-dark'>Ann Elisabeth</h2>
                                <h4 className='text-sm font-semibold text-blue'>Data Analyst Engineer</h4>
                                <span className='flex items-center gap-1 text-[10px] text-[#00B4E0FF]'><MdVerified size={10}/>Verified Expert in Data Analyst</span>
                            </span>
                            <span>
                                <p className='text-sm text-darkLight dark:text-gray-400 font-medium'>He is an expart in Data visualization, Critical thinking, Critical thinking, Pyhton</p>
                            </span>
                            <span className='flex flex-col gap-2'>
                                <p className='text-xs text-darkLight dark:text-gray-400 font-normal'>Location: Toronto Area, Canada</p>
                                <div className='flex justify-between items-center'>
                                    <span className='flex gap-2 items-center'>
                                        <span title='Github' className='text-blue hover:text-dark dark:text-gray-400 dark:hover:text-slate-100 duration-300 cursor-pointer '><AiFillGithub size={22} /></span>
                                        <span title='Facebook' className='text-blue hover:text-dark dark:text-gray-400 dark:hover:text-slate-100  duration-300 cursor-pointer '><BsFacebook size={18} /></span>
                                        <span title='Linkdin' className='text-white dark:bg-gray-400 dark:hover:bg-slate-100 dark:text-slate-900 flex justify-center items-center hover:bg-dark duration-300 cursor-pointer h-5 w-5 overflow-hidden rounded-full bg-blue '><FaLinkedinIn size={13} /></span>
                                    </span>
                                    <span title='More Info' className='text-blue cursor-pointer dark:text-gray-400 hover:text-slate-100' ><BsInfoCircle size={18}/></span>
                                </div>
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex xsm:flex-row flex-col  gap-3 items-center px-2 py-4 dark:bg-slate-900 dark:hover:bg-zinc-800 bg-white hover:bg-[#E6E8FFFF] duration-300 rounded-md'>
                        <div className='h-48 w-48 rounded-full flex justify-center items-center border-8 dark:border-slate-800 border-grayWhite shadow-md overflow-hidden'>
                            <img className='w-full h-full object-cover' src={team1} alt="" />
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                            <span>
                                <h2 className='text-lg font-bold dark:text-gray-300 text-dark'>Domingo S</h2>
                                <h4 className='text-sm font-semibold text-blue'>Senior Engineer</h4>
                                <span className='flex items-center gap-1 text-[10px] text-[#00B4E0FF]'><MdVerified size={10}/>Verified Expert in Data Analyst</span>
                            </span>
                            <span>
                                <p className='text-sm text-darkLight dark:text-gray-400 font-medium'>He is an expart any king of Application development and Programming language</p>
                            </span>
                            <span className='flex flex-col gap-2'>
                                <p className='text-xs text-darkLight dark:text-gray-400 font-normal'>Location: Cologne, Germany</p>
                                <div className='flex justify-between items-center'>
                                    <span className='flex gap-2 items-center'>
                                        <span title='Github' className='text-blue dark:text-gray-400 dark:hover:text-slate-100 hover:text-dark duration-300 cursor-pointer '><AiFillGithub size={22} /></span>
                                        <span title='Facebook' className='text-blue dark:text-gray-400 dark:hover:text-slate-100 hover:text-dark duration-300 cursor-pointer '><BsFacebook size={18} /></span>
                                        <span title='Linkdin' className='text-white dark:text-slate-900 dark:bg-gray-400 dark:hover:bg-slate-100 flex justify-center items-center hover:bg-dark duration-300 cursor-pointer h-5 w-5 overflow-hidden rounded-full bg-blue '><FaLinkedinIn size={13} /></span>
                                    </span>
                                    <span title='More Info' className='text-blue cursor-pointer dark:text-gray-400 dark:hover:text-slate-100' ><BsInfoCircle size={18}/></span>
                                </div>
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex xsm:flex-row flex-col  gap-3 items-center px-2 py-4 dark:bg-slate-900 dark:hover:bg-zinc-800 bg-white hover:bg-[#E6E8FFFF] duration-300 rounded-md'>
                        <div className='h-48 w-48 rounded-full flex justify-center items-center border-8 dark:border-slate-800 border-grayWhite shadow-md overflow-hidden'>
                            <img className='w-full h-full object-cover' src={team2} alt="" />
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                            <span>
                                <h2 className='text-lg font-bold dark:text-gray-300 text-dark'>Dennis E</h2>
                                <h4 className='text-sm font-semibold text-blue'>(AI) Engineer</h4>
                                <span className='flex items-center gap-1 text-[10px] text-[#00B4E0FF]'><MdVerified size={10}/>Verified Expert in Data Analyst</span>
                            </span>
                            <span>
                                <p className='text-sm text-darkLight dark:text-gray-400 font-medium'>He is an expart in App development, data science and data engineering.</p>
                            </span>
                            <span className='flex flex-col gap-2'>
                                <p className='text-xs text-darkLight dark:text-gray-400 font-normal'>Location: Mumbai, India</p>
                                <div className='flex justify-between items-center'>
                                    <span className='flex gap-2 items-center'>
                                        <span title='Github' className='text-blue dark:text-gray-400 dark:hover:text-slate-100 hover:text-dark duration-300 cursor-pointer '><AiFillGithub size={22} /></span>
                                        <span title='Facebook' className='text-blue dark:text-gray-400 dark:hover:text-slate-100 hover:text-dark duration-300 cursor-pointer '><BsFacebook size={18} /></span>
                                        <span title='Linkdin' className='text-white dark:text-slate-900 dark:bg-gray-400 hover:bg-slate-100 flex justify-center items-center hover:bg-dark duration-300 cursor-pointer h-5 w-5 overflow-hidden rounded-full bg-blue '><FaLinkedinIn size={13} /></span>
                                    </span>
                                    <span title='More Info' className='text-blue cursor-pointer dark:text-gray-400 dark:hover:text-slate-100' ><BsInfoCircle size={18}/></span>
                                </div>
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
              </Swiper>

            </div>
        </div>
    </div>
  )
}

export default Team