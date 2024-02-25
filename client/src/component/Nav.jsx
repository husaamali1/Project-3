// * Imports
import { Link, useNavigate } from 'react-router-dom'

// helper 
import { activeUser, removeToken } from '../utils/helpers/common'

// Images
import logoIcon from '../images/logo.png'



export default function Nav() {
const navigate = useNavigate()
console.log(activeUser())
  
function logOut() {
    removeToken()
    navigate('/login')
  }
  
  return (
    <>
      <header className=' navbar p-2 p-md-3 p-lg-4'>
        <img className='logo rounded-circle d-inline-block align-top' style={{ width: '100px', paddingLeft: '12px' }} src={logoIcon} alt='brand logo' />
          <ul className='nav nav-underline'>
          <li className='nav-item'>
            <Link to='/' className='nav-link' aria-current='page'>Home</Link>
          </li>
        {activeUser() ?
          <>
          <li className='nav-item'>
            <Link to='/portfolio' className='nav-link'>Portfolio</Link>
          </li>
            <span className='nav-link' type='submit' onClick={logOut}>Log out</span>
          </>
          :
          <>
            <li className='nav-item'>
              <Link to='/Register' className='nav-link'>Register</Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>Login</Link>
            </li>
          </>
        }
        </ul>
      </header>
    </>
  )
}



{/* <img className='logo w-25 p-11' src={logoIcon} alt='brand logo'/>
      <ul className='nav nav-underline'>
      <li className='nav-item'>
      <Link to='/' className='nav-link active' aria-current='page' href='#'>Home</Link>
      </li>
      <li className='nav-item'>
      <Link className='nav-link' href='#'>AllCars</Link>
      </li>
      <li className='nav-item'>
      <Link className='nav-link' href='#'>CarSingle</Link>
      </li>
      <li className='nav-item'>
      <Link className='nav-link' href='#'>CarSingle</Link>
      </li>
      </ul> */}
