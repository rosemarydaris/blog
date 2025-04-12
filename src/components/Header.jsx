

import React from 'react'
import { NavLink } from 'react-router-dom' 
const Header = () => {
  return (
    <header>
        <nav>
            <ul style={{listStyle:'none',display:"flex",gap:'20px'}}>
<li>
     <NavLink to='/'style={{textDecoration:'none'}}>
        Home
    </NavLink>

</li>

<li>
    <NavLink to='/contact'style={{textDecoration:'none'}}>
        Add Blog
    </NavLink>

</li>     

            </ul>
        </nav>
    </header>
  )
}

export default Header