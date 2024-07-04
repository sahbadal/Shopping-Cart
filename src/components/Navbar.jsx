import { Link } from 'react-router-dom'
import { assets } from '../assets/assets.js'
import { useContext } from 'react'
import { ShopContext } from '../context/StoreContext.jsx'

const Navbar = () => {
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='py-3 shadow'>
      <div className='w-[80%] m-auto flex items-center justify-between'>
        <div>
          <Link to={'/'}><img src={assets.bag} className='w-14' /></Link>
        </div>
        <div>
          <ul className='flex items-center gap-8'>
            <Link to={'/'}><li className='font-medium'>Home</li></Link>
            <Link to={'/cart'}><li className='flex items-center gap-1'><img src={assets.cart_logo} className='w-8' /><span className='text-2xl'>{getTotalCartItems()}</span></li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar