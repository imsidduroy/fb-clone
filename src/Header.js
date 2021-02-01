import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className="header">  
      <div className="header__left">
        <img src="https://amazingroofwash.com/wp-content/uploads/2018/07/fb-icon.png" alt=""/>
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="fbs"/>
        </div>
      </div>
      <div className="header__middle">
          
      </div>
      <div className="header__right"></div>
      
    </div>
  )
}

export default Header
