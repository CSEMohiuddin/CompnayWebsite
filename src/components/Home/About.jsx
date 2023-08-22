import serviceVideo from '../../assets/images/serviceVideo.mp4'
import josiahImg from '../../assets/images/josiah.png'
import josiah2Img from '../../assets/images/josiah2.png'

function About() {
  return (
    <div id='about' className='w-full bg-grayWhite dark:bg-gray-950'>
        <div className='container py-5 md:py-8'>
            <h1 className='heading text-center'> About</h1>
            <p className='text-center text-base md:text-lg font-sans font-medium md:font-semibold mt-3 text-blue'>Innovative AI Solutions for the Future</p>
            <div className='flex md:flex-row flex-col-reverse justify-between gap-8 mt-5 md:mt-16'>
                <div className='w-full md:w-1/2'>
                    <h1 className='text-lg md:text-2xl font-sans font-bold dark:text-gray-300 text-dark text-center '>Mission & Vision</h1>
                    <p className='paragraph max-w-xl mx-auto mt-4'>Synaptic Signals is an avant-garde start-up, powered by a dynamic team of MIT experts and industry mavericks. With initial funding valuing us at $500k, we're on a mission to disrupt the AI and automation industry.</p>
                    <p className='paragraph max-w-xl mx-auto mt-4'>Our vision is to revolutionize industries with our AI solutions, delivering unparalleled efficiency and performance</p>
                    <p className='paragraph max-w-xl mx-auto mt-4'>Our goal is to improve your business by creating optimized applications by skilled engineers</p>
                    <div className='max-w-xl mx-auto mt-5 md:mt-10'>
                        <a href='#contact' className='px-3 cursor-pointer shadow-md md:px-5 py-1.5 md:py-2 rounded-md text-base md:text-lg text-white font-medium md:font-semibold hover:scale-105 duration-300 bg-blue ' >Get Start</a>
                    </div>
                </div>
                <div className='w-full md:w-1/2 rounded-md overflow-hidden' >
                    <video
                    muted
                    autoPlay={"autoplay"}
                    preLoad="auto"
                    loop>
                        <source src={serviceVideo} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className='mt-5 md:mt-8'>
                <h1 className='text-lg md:text-2xl font-sans font-bold dark:text-gray-300 text-dark mt-5 md:mt-8 '>Founder & CEO</h1>
                <div className='flex flex-col px-5  md:flex-row justify-between gap-5 md:gap-10 mt-5 md:mt-8' >
                    <div className='w-full md:w-1/2'>
                        <img className='w-11/12 dark:hidden md:max-w-[400px] mx-auto object-cover hover:scale-105 duration-300 shadow-md rounded-full' src={josiahImg} alt="" />
                        <img className='w-11/12 hidden dark:block md:max-w-[400px] mx-auto object-cover hover:scale-105 duration-300 shadow-md rounded-full' src={josiah2Img} alt="" />
                    </div>
                    <div className='w-full md:w-1/2 max-w-[500px] mx-auto flex flex-col gap-3 md:gap-5 ' >
                        <h3 className='text-lg font-bold text-dark dark:text-gray-300'>Josiah Contreras (Chief Revenue Officer)</h3>
                        <p className='paragraph'>With 15 years of tech and engineering experience, our Chief Revenue Officer leads our robust sales team, composed of experienced Business Development Representatives and Account Executives. Currently, he is also at the helm of a 500-person software development company. Under his leadership, Synaptic Signals has built a strong foundation for growth and revenue generation.</p>
                        <p className='paragraph'> <span className='font-bold text-dark dark:text-gray-300'>Skills : </span> Artificial Intelligence (AI), Python (Programming Language), Prompt Engineering, Large Language Models (LLM), Performance Metrics, Sales Development, New Account Growth and Marketing Strategy</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About