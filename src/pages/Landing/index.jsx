import Hero from "./components/Hero"
import Reviews from "./components/Reviews"
import Shop from "./components/Shop"
import About from "./components/About"
import Contact from "./components/Contact"

const Landing = () => {
  return (
    <div>
       <Hero/>
       <About/>
       <Shop/>
       <Reviews/>
       <Contact/>
    </div>
  )
}

export default Landing