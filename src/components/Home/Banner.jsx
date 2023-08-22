import heroImg from '../../assets/images/heroimg.png'
import Typed from 'react-typed'

function Banner() {
  return (
    <div id='home' className='w-full dark:bg-slate-900 bg-white'>
        <div className='container md:h-[calc(100vh-80px)] flex md:flex-row flex-col-reverse md:justify-between items-center'>
            <div className='flex py-6 md:py-0 flex-col gap-5 md:gap-8 w-full md:w-1/2 '>
                <div className='flex flex-col gap-3 md:gap-8 lg:pl-10'>
                    <h1 className='heading font-sans dark:text-gray-300 text-dark'>Welcome to <span className='text-blue'> Synaptic Signals</span></h1>
                    <div >
                        <div className='texl-lg md:text-2xl font-sans font-normal md:font-semibold text-blue'>
                            <Typed
                                strings = {[
                                    "Ai Automation Everyday",
                                    "Enterprice Software Development",
                                    "E-comerce Website Development",
                                    "Chatbot Development",
                                    "Synaptic Signals Offers Unique AI Solitions",
                                ]}
                                typeSpeed = {60}
                                backSpeed= {40}
                                startDelay={500}
                                backDelay={500}
                                loop
                            /> 
                        </div>
                    </div>
                    <p className='paragraph max-w-sm md:max-w-md' >Pioneering the future of AI and automation technology. Specializing in creating innovative solutions for businesses across various industries.</p>
                    {/* <p className='paragraph max-w-sm md:max-w-md'> Leveraging cutting-edge machine learning models, Synaptic Signals offers unique AI solutions for healthcare, finance, supply chain, and more. Explore our subscription-based models tailored to your needs. </p> */}
                </div>
                <div className='flex w-full justify-center md:justify-start gap-5 md:gap-8 lg:pl-10'>
                    <a href='#contact' className='px-3 cursor-pointer shadow-md md:px-5 py-1.5 md:py-2 rounded-md text-base md:text-lg text-white font-medium md:font-semibold hover:scale-105 duration-300 bg-blue' >Get Start</a>
                    <a href='#location' className='px-3 cursor-pointer shadow-md md:px-5 py-1.5 md:py-2 rounded-md text-base md:text-lg text-dark font-medium md:font-semibold hover:scale-105 duration-300 dark:bg-slate-950 dark:text-gray-300 bg-white ring-1 ring-inset'>View Location</a>
                </div>
            </div>
            <div className='flex justify-center items-center pr-14 md:pr-0  w-full md:w-1/2 lg:w-[890px]'>
                <img className='w-full h-full object-cover ' src={heroImg} alt="bannerImg" />
            </div>
        </div>
    </div>
  )
}

export default Banner