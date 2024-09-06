import BannerSection from "./components/BannerSection"
import BlogSection from "./components/BlogSection"
import Category from "./components/Category"
import FeatureSection from "./components/FeatureSection"
import FeatureSectionBrekfast from "./components/FeatureSectionBreakfast"
import FeatureSectionEruits from "./components/FeatureSectionEruits"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import NewsLatter from "./components/NewsLatter"



const App = () => {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <Category/>
    <FeatureSectionEruits/>
    <FeatureSectionBrekfast/>
    <BannerSection/>
    <BlogSection/>
    <NewsLatter/>
    <FeatureSection/>
   </main>
  )
}

export default App
