import {Routes, Route} from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'

// Components
import Navbar from './components/Navbar'
import Footer from "./components/Footer.jsx";
import SearchBar from "./components/SearchBar.jsx";

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      
      <Navbar/>
      <SearchBar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/palce-order' element={<PlaceOrder/>}/>
        <Route path='/order' element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App