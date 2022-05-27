import React from 'react'
import "./Header.css" 
const Header = () => {
  return (
    <div>
    
       <nav>
       <div>
    <h2>Bella</h2>
       </div>
       <div className='flex-lists'>
         <div>Home</div>
         <div>Shop</div>
         <div>Favourites</div>
         <div>Orders</div>
         <div>Contacts</div>
         </div>
          <div className='carts-lists'>
                <h5>Profile</h5>
                <div><i class="fa-solid fa-cart-shopping fa-3x"></i></div>
            </div>
        </nav>
    <div>
        
    </div>
    </div>
  )
}

export default Header