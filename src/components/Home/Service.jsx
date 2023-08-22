
import { BsChatDots,} from 'react-icons/bs'
import {FcSupport} from 'react-icons/fc'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {GiArtificialIntelligence, GiAutomaticSas, GiArtificialHive} from 'react-icons/gi'
import {FiLock, FiMonitor} from 'react-icons/fi'
import {BiCodeCurly} from 'react-icons/bi'
import {TbBrandVscode, TbDeviceImacHeart} from 'react-icons/tb'
import {BsInfoCircle ,} from 'react-icons/bs'
import {SiRevolut} from 'react-icons/si'

// import BottomService from './BottomService.jsx'

function Service() {
  return (
    <div id='service' className='bg-white dark:bg-gray-900 w-full'>
        <div className='container '>
            <h1 className='heading text-center pt-5 md:pt-8'>Service</h1>
            <p className='text-center text-base md:text-lg font-sans font-medium md:font-semibold mt-3 text-blue'>We offer cutting-edge AI solutions that are designed to revolutionize industries.</p>
            <div className='grid lg:grid-cols-4 gap-8 md:grid-cols-2 grid-cols-1 py-3 md:py-10'>
                {/* service card */}
                    <div className='card relative hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue via-[#5B60D9] to-[#61B0FF] duration-300 flex flex-col gap-5 rounded-md px-3 py-5 items-center justify-between dark:bg-slate-800 bg-grayWhite'>
                        <div className='flex flex-col gap-2'>
                            <div className='iconWraper border border-blue bg-white dark:bg-slate-800 w-16 mx-auto p-3 rounded-tl-[20px] rounded-br-[20px] flex justify-center items-center'>
                                <span className='icon text-blue'><GiArtificialIntelligence size={40} /></span>
                                {/* <span className='icon text-blue'> <img src={currentai} alt="" /> </span> */}
                            </div>
                            <h3 className='text text-base md:text-lg font-medium text-blue text-center'>Concurrent AI Technology</h3>
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='text paragraph text-base text-center'>Our Patented Technology Allows Multiple AI Models To Work Concurrently On A Single Task. More Service</p>
                        </div>
                        <span title='More Info' className='absolute icon text-darkLight cursor-pointer bottom-3 right-3 dark:text-gray-400' ><BsInfoCircle size={18} /></span>
                    </div>
                    <div className='card relative hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue via-[#5B60D9] to-[#61B0FF] flex flex-col gap-5 rounded-md px-3 py-5 items-center justify-between dark:bg-slate-800 bg-grayWhite'>
                        <div className='flex flex-col gap-2'>
                            <div className='iconWraper border border-blue bg-white dark:bg-slate-800 w-16 mx-auto p-3 rounded-tl-[20px] rounded-br-[20px] flex justify-center items-center'>
                                <span className='icon text-blue'><GiAutomaticSas size={40} /></span>
                            </div>
                            <h3 className='text text-base md:text-lg font-medium text-blue text-center'>Automation Industry</h3>
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='text paragraph text-base text-center'>Through Collaboration With Cyber And Cryptologists, We Are Set To Revolutionize The Automation Industry.</p>
                        </div>
                        <span title='More Info' className='absolute icon text-darkLight cursor-pointer bottom-3 right-3 dark:text-gray-400' ><BsInfoCircle size={18} /></span>
                    </div>
                    <div className='card relative hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue via-[#5B60D9] to-[#61B0FF] flex flex-col gap-5 rounded-md px-3 py-5 items-center justify-between dark:bg-slate-800 bg-grayWhite'>
                        <div className='flex flex-col gap-2'>
                            <div className='iconWraper border border-blue bg-white dark:bg-slate-800 w-16 mx-auto p-3 rounded-tl-[20px] rounded-br-[20px] flex justify-center items-center'>
                                <span className='icon text-blue'><TbDeviceImacHeart size={40} /></span>
                            </div>
                            <h3 className='text text-base md:text-lg font-medium text-blue text-center'>Cutting-edge Machine</h3>
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='text paragraph text-base text-center'>Cutting-Edge Machine Learning Model: Collaborating With Renowned Professionals From Various Scientific Disciplines.</p>
                        </div>
                        <span title='More Info' className='absolute icon text-darkLight cursor-pointer bottom-3 right-3 dark:text-gray-400' ><BsInfoCircle size={18} /></span>
                    </div>
                    <div className='card relative hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue via-[#5B60D9] to-[#61B0FF] flex flex-col gap-5 rounded-md px-3 py-5 items-center justify-between dark:bg-slate-800 bg-grayWhite'>
                        <div className='flex flex-col gap-2'>
                            <div className='iconWraper border border-blue bg-white dark:bg-slate-800 w-16 mx-auto p-3 rounded-tl-[20px] rounded-br-[20px] flex justify-center items-center'>
                                <span className='icon text-blue'><SiRevolut size={40} /></span>
                            </div>
                            <h3 className='text text-base md:text-lg font-medium text-blue text-center'>Revolutionizing</h3>
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='text paragraph text-base text-center'>An explanation about the collaboration with cyber and cryptologists and how this initiative is set to revolutionize the automation industry. </p>
                        </div>
                        <span title='More Info' className='absolute icon text-darkLight cursor-pointer bottom-3 right-3 dark:text-gray-400' ><BsInfoCircle size={18} /></span>
                    </div>
            </div>
        </div>
        <div className='w-full bg-grayWhite dark:bg-slate-950 '>
            <div className='container py-5 md:py-10'>
                <h1 className='text-lg md:text-2xl font-sans font-bold dark:text-gray-300 text-dark'>More Awesome Service</h1>
                <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto md:gap-10 gap-5 pt-5 md:pt-10'>
                    {/* moreservice */}
                    <div className='moreServiceCard dark:bg-gray-900 hover:shadow dark:hover:bg-zinc-800 hover:bg-white duration-300 flex flex-col gap-5 rounded-md px-3 py-5 items-center justify-betwee'>
                        <div className='flex flex-col gap-2 '>
                            <div className='iconWraper flex justify-center items-center'>
                                <span className='moreServiceIcon duration-300 dark:text-gray-300 text-dark'><TbBrandVscode size={60} /></span>
                            </div>
                            <h3 className='moreServiceText text-base md:text-lg dark:text-gray-300 font-medium text-dark text-center'>Clean Code</h3>
                            <p className=' serviceBorder w-12 duration-300 -mt-1 mx-auto h-[2px] bg-blue'></p>
                        </div>
                        <div className='flex justify-center items-center dark:text-gray-400'>
                            <p className='text paragraph text-base text-center'>Writing clean, efficient, and readable code to enhance software quality and maintainability. Elevate your projects with our coding expertise.</p>
                        </div>
                    </div>
                    <div className='moreServiceCard hover:shadow dark:bg-gray-900 dark:hover:bg-zinc-800 hover:bg-white duration-300 flex flex-col gap-5 rounded-md px-3 py-5 items-center justify-betwee'>
                        <div className='flex flex-col gap-2 '>
                            <div className='iconWraper flex justify-center items-center'>
                                <span className='moreServiceIcon duration-300 text-dark dark:text-gray-300'><BiCodeCurly size={60} /></span>
                            </div>
                            <h3 className='moreServiceText text-base md:text-lg font-medium dark:text-gray-300 text-dark text-center'>Web Application</h3>
                            <p className=' serviceBorder w-12 duration-300 -mt-1 mx-auto h-[2px] bg-blue'></p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='text paragraph text-base text-center'>Developing user-friendly web applications with modern design and seamless functionality to meet your business needs.</p>
                        </div>
                    </div>
                    <div className='moreServiceCard hover:shadow dark:bg-gray-900 dark:hover:bg-zinc-800 hover:bg-white duration-300 flex flex-col gap-5 rounded-md px-3 py-5 items-center justify-betwee'>
                        <div className='flex flex-col gap-2 '>
                            <div className='iconWraper flex justify-center items-center'>
                                <span className='moreServiceIcon duration-300 text-dark dark:text-gray-300'><HiOutlineShoppingBag size={60} /></span>
                            </div>
                            <h3 className='moreServiceText text-base md:text-lg font-medium dark:text-gray-300 text-dark text-center'>E-Comerce Website</h3>
                            <p className=' serviceBorder w-12 duration-300 -mt-1 mx-auto h-[2px] bg-blue'></p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='text paragraph text-base text-center'>Creating dynamic e-commerce websites for online businesses, featuring secure payment systems and intuitive shopping experiences.</p>
                        </div>
                    </div>
                    <div className='moreServiceCard hover:shadow dark:bg-gray-900 dark:hover:bg-zinc-800 hover:bg-white duration-300 flex flex-col gap-5 rounded-md px-3 py-5 items-center justify-betwee'>
                        <div className='flex flex-col gap-2 '>
                            <div className='iconWraper flex justify-center items-center'>
                                <span className='moreServiceIcon duration-300 text-dark dark:text-gray-300'><BsChatDots size={60} /></span>
                            </div>
                            <h3 className='moreServiceText text-base md:text-lg font-medium dark:text-gray-300 text-dark text-center'>Chatbot Development</h3>
                            <p className=' serviceBorder w-12 duration-300 -mt-1 mx-auto h-[2px] bg-blue'></p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='text paragraph text-base text-center'>Designing intelligent chatbots to enhance customer interactions, streamline processes, and provide instant support across platforms.</p>
                        </div>
                    </div>
                    <div className='moreServiceCard hover:shadow dark:bg-gray-900 dark:hover:bg-zinc-800 hover:bg-white duration-300 flex flex-col gap-5 rounded-md px-3 py-5 items-center justify-betwee'>
                        <div className='flex flex-col gap-2 '>
                            <div className='iconWraper flex justify-center items-center'>
                                <span className='moreServiceIcon duration-300 text-dark dark:text-gray-300'><GiArtificialHive size={60} /></span>
                            </div>
                            <h3 className='moreServiceText text-base md:text-lg font-medium dark:text-gray-300 text-dark text-center'>Artificial Intelligence (AI)</h3>
                            <p className=' serviceBorder w-12 duration-300 -mt-1 mx-auto h-[2px] bg-blue'></p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='text paragraph text-base text-center'>Harnessing the power of artificial intelligence to automate tasks, gain insights, and enhance decision-making processes efficiently.</p>
                        </div>
                    </div>
                    <div className='moreServiceCard hover:shadow dark:bg-gray-900 dark:hover:bg-zinc-800 hover:bg-white duration-300 flex flex-col gap-5 rounded-md px-3 py-5 items-center justify-betwee'>
                        <div className='flex flex-col gap-2 '>
                            <div className='iconWraper flex justify-center items-center'>
                                <span className='moreServiceIcon duration-300 text-dark dark:text-gray-300'><FiMonitor size={60} /></span>
                            </div>
                            <h3 className='moreServiceText text-base md:text-lg font-medium dark:text-gray-300 text-dark text-center'>Web Scraping</h3>
                            <p className=' serviceBorder w-12 duration-300 -mt-1 mx-auto h-[2px] bg-blue'></p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='text paragraph text-base text-center'>Extracting relevant data from websites using automated tools to gather valuable insights and information efficiently.</p>
                        </div>
                    </div>
                    <div className='moreServiceCard hover:shadow dark:bg-gray-900 dark:hover:bg-zinc-800 hover:bg-white duration-300 flex flex-col gap-5 rounded-md px-3 py-5 items-center justify-betwee'>
                        <div className='flex flex-col gap-2 '>
                            <div className='iconWraper flex justify-center items-center'>
                                <span className='moreServiceIcon duration-300 text-dark dark:text-gray-300'><FiLock size={60} /></span>
                            </div>
                            <h3 className='moreServiceText text-base md:text-lg font-medium dark:text-gray-300 text-dark text-center'>Secure and Reliable</h3>
                            <p className=' serviceBorder w-12 duration-300 -mt-1 mx-auto h-[2px] bg-blue'></p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='text paragraph text-base text-center'>Ensuring robust security measures and dependable performance to safeguard your data and maintain consistent functionality.</p>
                        </div>
                    </div>
                    <div className='moreServiceCard hover:shadow dark:bg-gray-900 dark:hover:bg-zinc-800 hover:bg-white duration-300 flex flex-col gap-5 rounded-md px-3 py-5 items-center justify-betwee'>
                        <div className='flex flex-col gap-2 '>
                            <div className='iconWraper flex justify-center items-center'>
                                <span className='moreServiceIcon duration-300 text-dark dark:text-gray-300'><FcSupport size={60} /></span>
                            </div>
                            <h3 className='moreServiceText text-base md:text-lg font-medium text-dark text-center dark:text-gray-300'>24/7 Support</h3>
                            <p className=' serviceBorder w-12 duration-300 -mt-1 mx-auto h-[2px] bg-blue'></p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='text paragraph text-base text-center'>Providing round-the-clock assistance and guidance to address your queries and concerns at any time of day.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service