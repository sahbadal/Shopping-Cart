import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element ={<Home/>}></Route>
      <Route path='/cart' element ={<Cart/>}></Route>
    </Routes>
    </>
  )
}

export default App