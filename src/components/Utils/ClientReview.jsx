import {AiFillStar} from 'react-icons/ai'

function ClientReview({rev}) {
  return (
    <div className='rounded-t-[60px] hover:scale-105 duration-300 shadow rounded-b-md border-[#0829FF28] border  px-4 py-2 flex flex-col justify-between'>
        <div className='mb-2 flex flex-col gap-2 justify-center items-center h-72'>
            <div className='h-52 w-52 border-[#001AFF6D] border-8 flex justify-center items-center rounded-full overflow-hidden'>
                <img className='h-full w-full object-cover' src={rev.image} alt="" />
            </div>
            <p className='paragraph text-sm font-medium'>{rev.text}</p>
        </div>
        <div className='flex justify-between items-center pt-2 border-t border-[#0829FF28]'>
            <div className='flex flex-col'>
                <h3 className='text-lg font-bold text-dark dark:text-gray-300' >{rev.name}</h3>
                <p className='paragraph text-blue text-sm'>{rev.designation}</p>
            </div>
            <span className='flex gap-1 text-blue'>
                <AiFillStar size={18} />
                <AiFillStar size={18} /> 
                <AiFillStar size={18} /> 
                <AiFillStar size={18} /> 
                <AiFillStar size={18} /> 
            </span>
        </div>
    </div>
  )
}

export default ClientReview