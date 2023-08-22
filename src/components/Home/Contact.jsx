
import {BsWhatsapp} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import { useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';

function Contact() {

    const [data, setData] = useState({
        name: "",
        email: "",
        phn : "",
        subject: "",
        message: "",
    })

    const inputHandel = (e)=>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const sendData = (e)=>{

        e.preventDefault()

        fetch(`https://mail.synapticsignals.com/?name=${data.name}&email=${data.email}&phn=${data.phn}&subject=${data.subject}&message=${data.message}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })   
        .then(data=>data.json())   
        .then(data=>{
            data.status ? toast.success('Your data successfully submited') : toast.error('Internal error')
        })   
        .catch(e=>console.log(e))

        setData(
            {
                name: "",
                email: "",
                phn : "",
                subject: "",
                message: "",
            }
        )
    }


  return (
    <div id='contact' className='w-full bg-white dark:bg-slate-900'>
        <div>
            <Toaster
            position="top-center"
            reverseOrder={false}
            />
        </div>
        <div className=' container py-5 md:py-10 '>
            <h1 className='heading text-center'>Contact</h1>
            <h3 className='text-base md:text-lg font-medium md:font-semibold text-blue text-center mt-3'>Contact us for any information.</h3>
            <div className='flex flex-col md:flex-row justify-between gap-5 md:gap-10 mt-5 md:mt-10'>
                <div className='w-full md:w-1/2'>
                    <div className='flex flex-col max-w-lg mx-auto gap-3 md:gap-5'>
                        <h1 className='text-lg md:text-2xl font-sans font-bold text-dark dark:text-gray-300 mt-5 md:mt-8 '>Get in touch today!</h1>
                        <p className='paragraph max-w-lg'>Talk to professional cunsultant and book tour. Discuss option, price, and exclusive offers!</p>
                        <div className='flex relative max-w-[400px] gap-3 px-3 py-3 shadow-md items-center dark:bg-slate-800 bg-grayWhite rounded-md'>
                            <span className='flex flex-col gap-2'>
                                <h3 className='text-lg flex items-center gap-2 font-semibold text-blue'><BsWhatsapp size={19} />WhatsApp</h3>
                                <span className='flex flex-col gap-2'>
                                    <p className='paragraph text-base ml-6'>+16472290797 <span className='text-xs'>(Josiah Contreras)</span></p>
                                    <p className='paragraph text-base ml-6'>+8801985810369 <span className='text-xs'>(KH Rasedul)</span></p>
                                    <p className='paragraph text-base ml-6'>+8801825933919 <span className='text-xs'>(Md. Mohiuddin)</span></p>
                                </span>
                            </span>   
                        </div>
                        <div className='flex max-w-[400px] gap-3 px-3 py-2 items-center shadow-md dark:bg-slate-800 bg-grayWhite rounded-md'>
                            <span className='flex flex-col gap-1'>
                                <h3 className='flex items-center gap-2 text-lg font-semibold text-blue'><MdEmail size={20} /> Email</h3>
                                <p className='paragraph text-base ml-6'>admin@synapticsignals.com</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='max-w-lg p-5 mx-auto shadow-lg flex flex-col gap-3 md:gap-5'>
                        <form onSubmit={sendData} >
                            <div className='flex flex-col gap-1'>
                                <label className='paragraph' htmlFor="">Name*</label>
                                <input className='h-10 border-blue border dark:bg-slate-800 dark:text-gray-400 rounded-md px-4 focus:outline-none' 
                                type="text" name="name"
                                value={data.name}
                                onChange={inputHandel}
                                required
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='paragraph' htmlFor="">Email Address*</label>
                                <input className='h-10 border-blue border dark:bg-slate-800 dark:text-gray-400 rounded-md px-4 focus:outline-none' 
                                type="email" name="email"
                                value={data.email}
                                onChange={inputHandel} 
                                required
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='paragraph' htmlFor="">Phone Number*</label>
                                <input className='h-10 border-blue border dark:bg-slate-800 dark:text-gray-400 rounded-md px-4 focus:outline-none' 
                                type="tel" name="phn"
                                value={data.phn}
                                onChange={inputHandel}
                                required
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='paragraph' htmlFor="">Subject*</label>
                                <input className='h-10 border-blue border dark:bg-slate-800 dark:text-gray-400 rounded-md px-4 focus:outline-none' 
                                type="text" name="subject"
                                value={data.subject}
                                onChange={inputHandel}
                                required
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='paragraph' htmlFor="">Message*</label>
                                <textarea className=' border-blue border dark:bg-slate-800 dark:text-gray-400 rounded-md px-4 py-2 focus:outline-none' 
                                name="message"
                                value={data.message}
                                onChange={inputHandel}
                                required
                                rows="5"></textarea>
                            </div>
                            <div>
                                <input type='submit' value='Send' className=' mt-5 px-3 md:px-5 py-1.5 md:py-2 w-32 shadow-md rounded-md text-base md:text-lg text-white font-medium md:font-semibold hover:scale-105 duration-300 bg-blue ' />
                            </div>
                        </form>    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact