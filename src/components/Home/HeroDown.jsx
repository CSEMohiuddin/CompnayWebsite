import {FaAward, FaUsers,} from 'react-icons/fa'
import {HiOutlineComputerDesktop} from 'react-icons/hi2'
import {MdOutlineDashboardCustomize} from 'react-icons/md'

function HeroDown() {
  return (
    <div className='w-full dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 bg-gradient-to-r from-[#E8EAFF] via-[#FFCFEBFF] to-[#E8EAFF]'>
        <div className='container py-5 grid md:grid-cols-2 gap-5 lg:grid-cols-4'>
            <div className='flex flex-col gap-2 justify-center items-center p-3 border border-[#D2D4A7] '>
                <div className='flex gap-5 items-center'>
                    <span className='text-[#B5B204]'><FaAward size={60}/></span>
                    <h1 className='text-5xl text-[#B5B204] font-bold'>05</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <p className='text-xl font-bold text-[#B5B204]'>Award</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center p-3 border border-[#CDBCD4]'>
                <div className='flex gap-5 items-center'>
                    <span className='text-[#A460B5]'><FaUsers size={60}/></span>
                    <h1 className='text-5xl text-[#A460B5] font-bold'>96%</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <p className='text-xl font-bold text-[#A460B5]'>Customer Satisfaction</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center p-3 border border-[#B4C2B2]'>
                <div className='flex gap-5 items-center'>
                    <span className='text-[#467541FF]'><HiOutlineComputerDesktop size={60}/></span>
                    <h1 className='text-5xl text-[#467541FF] font-bold'>17+</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <p className='text-xl font-bold text-[#467541FF]'>Total Engineer</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center p-3 border border-[#B0B0B0]'>
                <div className='flex gap-5 items-center'>
                    <span className='dark:text-gray-400'><MdOutlineDashboardCustomize size={40}/></span>
                    <h1 className='text-5xl dark:text-gray-400 text-dark font-bold'>93+</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <p className='text-xl font-bold dark:text-gray-400 text-dark'>Project Completed</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroDown