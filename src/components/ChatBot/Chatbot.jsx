

import {useState, useEffect, useRef} from 'react'
import {BsChatDotsFill} from 'react-icons/bs'
import {AiFillCloseCircle, AiOutlineRobot} from 'react-icons/ai'
import {BsFillSendFill} from 'react-icons/bs'
import ChatHeader from './ChatHeader'
import ChatContainer from './ChatContainer'
import { response } from './server'

function Chatbot() {

    const [chatBox, setChatBox] = useState(false)
    const [input, setInput] = useState("")
    const [inputOff, setInputOff] = useState(false)
    const messageEl = useRef(null);

    const open = ()=>{
        setChatBox(true)
    }
    const close = ()=>{
        setChatBox(false)
    }

    useEffect(() => {
        if (messageEl) {
          messageEl.current.addEventListener('DOMNodeInserted', event => {
            const { currentTarget: target } = event;
            target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
          });
        }
      }, [])

    const [chats, setChats] = useState([
        {
            user: "gpt",
            message: "How can I help you today?"
        }
    ])

    const sendMessage = async(e)=>{
        e.preventDefault()
        setInputOff(true)
        setChats([...chats, {user : "me", message : input}])
        setInput("")
        const res = await response(input)
        setChats([...chats, 
            {user : "me", message : input},
            {user : "gpt", message : res.out}
        ])
        setInputOff(false)
    }


  return (
    <div className='flex justify-end bottom-4 right-4 items-end z-50 fixed'>

        <div className='chatBot'>
            <div className='flex flex-col items-end gap-2'>
                <div className={`${!chatBox ? 'hidden': 'flex'} w-[300px] md:w-[340px] relative h-[380px] md:h-[460px] flex flex-col dark:bg-slate-900 bg-white shadow-md rounded-md overflow-hidden`} >
                        {
                        inputOff && 
                        <div className='absolute bottom-11 md:bottom-14 ml-2 md:ml-3'>
                            <div className='flex justify-start items-center gap-1'>
                                <span className='text-blue'><AiOutlineRobot size={20} /></span>
                                <div className='max-w-[275px] flex justify-start '>
                                    <p className='text-base text-darkLight dark:bg-slate-800 dark:text-gray-300 bg-grayWhite py-0.5 px-1.5 rounded-md font-normal '>Typing...</p>
                                </div>
                            </div>
                        </div>
                        }
                        <ChatHeader />
                        <ChatContainer chats={chats} messageEl={messageEl} />
                        <form onSubmit={sendMessage} >
                            <div className='w-full px-2 md:px-3 flex justify-between items-center h-10 md:h-12 border border-t-blue border-x-0 border-b-0 gap-5'>
                                <div className='flex-1'>
                                    <input className='focus:outline-none dark:bg-slate-800 dark:text-gray-300 w-full py-1 px-2 rounded-md' type="text" placeholder='Type your message'
                                    value={input}
                                    onChange={(e)=> setInput(e.target.value)}
                                    required
                                    />
                                </div>
                                <div className='relative flex items-center justify-center'>
                                    <input type='submit' className='h-7 w-7 flex justify-center text-base font-normal text-darkLight items-center z-10 cursor-pointer opacity-0'disabled={inputOff} value='send' />
                                    <span className='absolute text-blue'><BsFillSendFill size={20} /></span>
                                </div>
                            </div>
                        </form>
                </div>
                <div className='flex justify-center items-center'>
                    {!chatBox && 
                    <span onClick={open} title='How can I help you' className='text-3xl md:text-4xl text-blue cursor-pointer'><BsChatDotsFill /></span>
                    }
                   {chatBox &&
                    <span onClick={close} className='text-4xl text-blue cursor-pointer' ><AiFillCloseCircle /></span>
                   }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chatbot