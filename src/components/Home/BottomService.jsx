import {BsCodeSlash} from 'react-icons/bs'

function BottomService() {
  return (
    <div className='flex flex-col gap-8 rounded-md px-4 py-10 items-center justify-center bg-white shadow-md'>
        <div className='bg-tgreen p-4 rounded-tl-[40px] rounded-br-[40px]'>
            <span className='text-darkLight'><BsCodeSlash size={60} /></span>
        </div>
        <div>
            <p className='paragraph text-center'>Business Development with Web App</p>
        </div>
    </div>
  )
}

export default BottomService