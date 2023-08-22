import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

import {MdLocationOn, MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import company3 from '../../assets/images/company3.jpg'
import company2 from '../../assets/images/company2.jpg'
import company from '../../assets/images/company.jpg'
import company4 from '../../assets/images/company4.jpg'
import company5 from '../../assets/images/company5.jpg'

function Location() {
  return (
    <div id='location' className='bg-grayWhite dark:bg-gray-950'>
        <div className='container py-5 md:py-10'>
            <h1 className="heading text-center">Location</h1>
            <p className='text-center text-base md:text-lg font-sans font-medium md:font-semibold mt-3 text-blue'>Learn about our locations and office.</p>
            <p className='text base md:text-lg font-sans font-medium md:font-semibold mt-5 dark:text-gray-300 text-dark'>Greater Toronto Area, Canada</p>
            <div className='flex md:flex-row flex-col justify-between mt-5 gap-5'>
              <div className='w-full md:w-1/2 h-52 md:h-96 rounded-md overflow-hidden'>
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
                slidesPerView={1}
                spaceBetween={20}
                >
                  <SwiperSlide>
                    <img className='md:h-96 h-56 w-full object-cover rounded-md ' src={company5   } alt="company" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className='md:h-96 h-56 w-full object-cover rounded-md ' src={company2} alt="company" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className='md:h-96 h-56 w-full object-cover rounded-md ' src={company3} alt="company" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className='md:h-96 h-56 w-full object-cover rounded-md ' src={company4} alt="company" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className='md:h-96 h-56 w-full object-cover rounded-md ' src={company} alt="company" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className='w-full md:w-1/2'>
                <div className=' max-w-[500px] flex flex-col gap-5 shadow-md dark:bg-slate-900 rounded-md bg-white mx-auto md:mx-0 md:ml-auto p-3 md:p-5'>
                  <div className='flex flex-col gap-2'>
                    <h3 className='font-base font-medium flex items-center gap-2 text-blue'><MdLocationOn size={24} /> Address</h3>
                    <p className='text-base font-normal dark:text-gray-400 text-darkLight ml-2'>2233 Argentia Road Mississauga ON L5N 2X7 <br />Toronto, Canada</p>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h3 className='font-base font-medium flex items-center gap-2 text-blue'><BsFillTelephoneFill size={17} />Telephone</h3>
                    <p className='text-base font-normal dark:text-gray-400 text-darkLight ml-2'>(647) 229-0797</p>
                  </div> 
                  <div className='flex flex-col gap-2'>
                    <h3 className='font-base font-medium flex items-center gap-2 text-blue'><MdEmail size={20} />Email</h3>
                    <p className='text-base font-normal dark:text-gray-400 text-darkLight ml-2'>admin@synapticsignals.com</p>
                  </div>    
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Location