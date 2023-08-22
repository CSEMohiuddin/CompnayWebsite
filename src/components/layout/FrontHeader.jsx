
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'


import { navLink } from '../../assets/lib/data.js'
import logo2 from '../../assets/images/logo2.png'
import logo from '../../assets/images/logo.png'
import MobileMenu from '../Utils/MobileMenu.jsx'

function FrontHeader() {

  const [menu, setMenu] = useState();

  return (
    <div className='w-full bg-white dark:bg-slate-900 border border-x-0 border-t-0 border-b-[#0829FF28] fixed z-50'>
      <div className='container flex justify-between items-center h-16 md:h-20'>
        <div className='flex items-center justify-start w-[200px] md:w-[280px]'>
          <a className='dark:hidden' href="#home"><img src={logo} alt="Logo" /></a>
          <a className='dark:block hidden' href="#home"><img src={logo2} alt="logo" /></a>
        </div>
        <div className='md:flex justify-between gap-x-8 font-sans  hidden '>
           {
            navLink.map((link)=>(
              <a href={`#${link.path}`} className='text-lg list-none font-semibold text-dark cursor-pointer dark:text-gray-300 hover:text-blue hover:underline' key={link.key}>{link.name}</a>
            ))
           }
           <a href='#contact' className='text-lg list-none font-semibold text-white dark:text-gray-300 cursor-pointer duration-300 bg-blue px-3 py-1 rounded-md'>Conatct</a>
        </div>
        {/* mobile menu */}
        { menu && <MobileMenu setMenu={setMenu} /> }
        <div className='md:hidden mb-1'>
          <span onClick={()=> setMenu(true)} className='dark:text-gray-300'><AiOutlineMenu size={20} /></span>
        </div>
      </div>
    </div>
  )
}

export default FrontHeader