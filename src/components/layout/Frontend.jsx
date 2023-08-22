
import { Outlet } from "react-router-dom"
import FrontHeader from "./FrontHeader"
import FrontFooter from "./FrontFooter"
import Chatbot from "../ChatBot/Chatbot"


function Frontend() {
  return (
    <div className="font-sans relative h-screen">
      {/* <div className="fixed bottom-0 "> */}
        <Chatbot />
      {/* </div> */}
      <div className="relative pb-16 md:pb-20">
        <FrontHeader />
      </div>
        <div className=""> <Outlet /></div>
        <FrontFooter />
    </div>
  )
}

export default Frontend