import {CiFacebook} from 'react-icons/ci'
import {BsWhatsapp, BsTwitter, BsFillTelephoneFill} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

function FrontFooter() {
  return (
    <div className='w-full dark:bg-slate-950 bg-blue'>
      <div className='container pt-5 pb-5  md:pt-10 '>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 '>
          <div className='flex flex-col gap-4 md:gap-6 '>
            <h1 className='text-white text-2xl text-center md:text-start md:font-3xl tracking-wider font-bold'>Synaptic <span className='text-[#62FF00FF]'>Signals</span></h1>
            <div className='flex-flex-col gap-2 md:gap-3'>
              <div className='flex gap-3 px-3 py-2 items-center justify-center md:justify-start'>
                  <span className='text-[#62FF00FF]'><BsFillTelephoneFill size={20} /></span>
                    <p className='paragraph text-white font-normal text-base'>+16472290797</p>
              </div>
              <div className='flex gap-3 px-3 py-2 items-center justify-center md:justify-start'>
                  <span className='text-[#62FF00FF]'><MdEmail size={20} /></span>
                  <p className='paragraph text-white font-normal text-base'>admin@synapticsignals.com</p>
              </div>
              <p className='paragraph text-sm font-sm font-light text-center md:text-start max-w-md mx-auto text-white md:mt-5'>Join us in shaping the future of AI technology. By investing in Synaptic Signals, you capitalize on a vast and expanding market potential.</p>
            </div>
          </div>
          <div className='flex flex-col gap-4 md:gap-6 '>
            <h1 className='text-lg md:text-xl text-white font-medium text-center md:text-start' >Learn</h1>
            <div className='flex flex-col gap-2 items-center md:items-start md:gap-3'>
              <li className='text-base font-sans font-normal hover:underline list-none text-white cursor-pointer hover:text-grayWhite'>Artificial Intelligence</li>
              <li className='text-base font-sans font-normal hover:underline list-none text-white cursor-pointer hover:text-grayWhite'>Automation Industry</li>
              <li className='text-base font-sans font-normal hover:underline list-none text-white cursor-pointer hover:text-grayWhite'>Cutting-edge Machine</li>
              <li className='text-base font-sans font-normal hover:underline list-none text-white cursor-pointer hover:text-grayWhite'>E-comerce Development</li>
              <li className='text-base font-sans font-normal hover:underline list-none text-white cursor-pointer hover:text-grayWhite'>Chatbot</li>
            </div>
          </div>
          <div className='flex flex-col gap-4 md:gap-6 justify-start'>
            <h1 className='text-lg md:text-xl text-white font-medium text-center md:text-start' >Quick Links</h1>
            <div className='flex flex-col gap-2 items-center md:items-start md:gap-3'>
              <a href="#home"><li className='text-base font-sans font-normal hover:underline list-none text-white cursor-pointer hover:text-grayWhite'>Home</li></a>
              <a href="#about"><li className='text-base font-sans font-normal hover:underline list-none text-white cursor-pointer hover:text-grayWhite'>About</li></a>
              <a href="#team"><li className='text-base font-sans font-normal hover:underline list-none text-white cursor-pointer hover:text-grayWhite'>Team</li></a>
              <a href="#contact"><li className='text-base font-sans font-normal hover:underline list-none text-white cursor-pointer hover:text-grayWhite'>Contact</li></a>
              <a href="#service"><li className='text-base font-sans font-normal hover:underline list-none text-white cursor-pointer hover:text-grayWhite'>Service</li></a>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col items-center md:items-start'>
                <h3 className='text-lg md:text-lg text-white font-medium'>Let's Stay Connected</h3>
                <p className='text-sm text-white font-light'>Enter your email and get update</p>
                <span className='flex justify-between items-center w-48'>
                  <input className='text-white text-sm bg-trans mt-5 outline-none border w-full border-t-0 border-x-0 border-b-white pb-3' type="text" placeholder='Your Email' name="" id="" />
                </span>
            </div>
            <div className='flex flex-col gap-5 items-center md:items-start'>
              <h3 className='text-lg md:text-lg text-white font-medium'>Follow us</h3>
              <span className='flex gap-4'>
                <span className='h-9 w-9 rounded-full text-white flex bg-[#001AB0FF] hover:bg-dark duration-200 justify-center items-center shadow cursor-pointer'><CiFacebook size={25}/></span>
                <span className='h-9 w-9 rounded-full text-white flex bg-[#001AB0FF] hover:bg-dark duration-200 justify-center items-center shadow cursor-pointer'><FaLinkedinIn size={20}/></span>
                <span className='h-9 w-9 rounded-full text-white flex bg-[#001AB0FF] hover:bg-dark duration-200 justify-center items-center shadow cursor-pointer'><BsTwitter size={20}/></span>
                <span className='h-9 w-9 rounded-full text-white flex bg-[#001AB0FF] hover:bg-dark duration-200 justify-center items-center shadow cursor-pointer'><BsWhatsapp size={20}/></span>
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-col-reverse gap-2 md:flex-row justify-between items-center mt-5 md:mt-10'>
            <p className='cursor-pointer text-sm text-white font-light'>© 2023 <span className='text-[#62FF00FF] font-medium tracking-wide'>Synaptic Signals</span> All rights reserved.</p>
            <span className='flex gap-5 justify-center items-center'>
              <li className='text-sm text-white font-light hover:underline cursor-pointer list-none'>Privacy Policy</li>
              <li className='text-sm text-white font-light hover:underline cursor-pointer list-none'>Trams & Condation</li>
              <li className='text-sm text-white font-light hover:underline cursor-pointer list-none'>Cookie Statement</li>
            </span>
        </div>
      </div>
    </div>
      
  )
}

export default FrontFooter