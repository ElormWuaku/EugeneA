import BestSellers from "./components/BestSellers"
import Brands from "./components/Brands"
import Category from "./components/Category"
import Hero from "./components/hero"
import HowToUse from "./components/HowToUse"
import Reviews from "./components/Reviews"
import Shop from "./components/Shop"
import Why from "./components/Why"
import FAQ from "./components/FAQ"
import BrandReviews from "./components/BrandReviews"

const Landing = () => {
  return (
    <div>
       <Hero/>
       <Brands/>
       <HowToUse/>
       <Reviews/>
       <Category/>
       <Why/>
       <Shop/>
       <BestSellers/>
       <BrandReviews/>
       <FAQ/> 
    </div>
  )
}

export default Landing