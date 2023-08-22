import {RxCross1} from 'react-icons/rx'
import { navLink } from "../../assets/lib/data"

function MobileMenu({setMenu}) {
  return (
    <div className="absolute flex justify-end w-full left-0 top-0 h-screen bg-[#00000049]" >
        <span onClick={()=> setMenu(false)} className='text-[#FF0000FF] dark:text-gray-300 absolute right-3 top-5 cursor-pointer' ><RxCross1 size={20} /></span>
        <div className="w-3/4 h-screen bg-grayWhite dark:bg-gray-900" >
            <div className='flex flex-col items-start gap-6 mt-14 px-8' >
                {
                    navLink.map((link, val)=>(
                        <a href={`#${link.path}`} onClick={()=> setMenu(false)} className='list-none text-base dark:text-gray-400 font-sans text-dark font-semibold' key={val}>{link.name}</a>
                    ))
                }
                <a href='#contact' onClick={()=>setMenu(false)} className='text-base list-none font-sans font-medium text-white cursor-pointer bg-blue px-3 py-1 rounded-md'>Conatct</a>
            </div>
        </div>
    </div>
  )
}

export default MobileMenu