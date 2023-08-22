import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import ClientReview from "../Utils/ClientReview"


import { review } from "../../assets/lib/data"

function Testimonial() {
  return (
    <div className='w-full dark:bg-gray-900 bg-white '>
        <div className='container py-5 md:py-10'>
            <h1 className="heading text-center">Testimonial</h1>
            <p className='text-center text-base md:text-lg font-sans font-medium md:font-semibold mt-3 text-blue'>What Client Say About Us?.</p>
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
                    spaceBetween : 30
                  },
                  580: {
                    slidesPerView: 2,
                    spaceBetween : 30
                  },
                  980: {
                    slidesPerView: 3,
                    spaceBetween : 30
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween : 30
                  }
                }}
              >
                {review?.map((rev, val)=>(
                  <SwiperSlide>
                    <ClientReview key={val} rev={rev} />
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
        </div>
    </div>
  )
}

export default Testimonial