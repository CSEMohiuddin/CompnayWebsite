


import {AiOutlineRobot,AiOutlineUser} from 'react-icons/ai'

function ChatContainer({chats, messageEl}) {
  return (
    <div ref={messageEl} className='flex-1 flex flex-col gap-2 overflow-y-auto py-2 px-2'>
        {
            chats?.map((chat, val)=>(
                <div className='flex flex-col'>
                    {chat.user === "gpt" && 
                    <div>
                        <div className='flex justify-start items-start gap-1'>
                            <span className='text-blue'><AiOutlineRobot size={20} /></span>
                            <div className=' md:max-w-[275px] flex justify-start '>
                                <p className='text-base text-darkLight dark:bg-slate-800 dark:text-gray-300 bg-grayWhite py-0.5 px-1.5 rounded-md font-normal '>{chat.user === "gpt" && chat.message}</p>
                            </div>
                        </div>
                    </div>
                    }
                    {
                        chat.user === "me" && 
                    <div >
                        <div className='flex justify-end items-start gap-1'>
                            <div className=' md:w-[275px] flex justify-end'>
                                <p className='text-base flex text-darkLight dark:text-gray-300 bg-[#29349442] py-0.5 px-1.5 rounded-md font-normal '>{chat.user=== "me" && chat.message}</p>
                            </div>
                            <span className='text-blue'><AiOutlineUser size={20} /></span>
                        </div>
                    </div>
                    }
                </div>
            ))
        }
    </div>
    
  )
}

export default ChatContainer