import Banner from '../../components/Home/Banner'
import HeroDown from '../../components/Home/HeroDown'
import About from '../../components/Home/About'
import Service from '../../components/Home/Service'
import Testimonial from '../../components/Home/Testimonial'
import Team from '../../components/Home/Team'
import Contact from '../../components/Home/Contact'
import Location from '../../components/Home/Location'
import ChatBot from '../../components/ChatBot/Chatbot'

function Home() {
  return (
    <div>
      <Banner />
      <HeroDown />
      <Team />
      <Service />
      <About />
      <Testimonial />
      <Location />
      <Contact />
    </div>
  )
}

export default Home