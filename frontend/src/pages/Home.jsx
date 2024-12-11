import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from "../components/OurPolicy.jsx";
import NewsLetterBox from "../components/NewsLetterBox.jsx";

const Home = () => {
  return (
    <div>
        <Hero/>
        <LatestCollection/>
        <BestSeller/>
        <OurPolicy/>
        <NewsLetterBox/>
    </div>
  )
}

export default Home