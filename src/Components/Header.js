import React, { useState } from 'react';
import '../Styles/Header.css';

function Header() {
  const [visibleMenu, setVisibleMenu] = useState(false);
  return (
    <header>
      <div className='header-content'>
        <div className='logo'>My blog</div>
        <div className='space-between__div'>
          <div className='input__div'>
            <input placeholder='Search' />
          </div>
          <div
            className={visibleMenu ? 'responsive-div active' : 'responsive-div'}
          >
            <div className='links__div'>
              <p>Link 1</p>
              <p>Link 2</p>
              <p>Link 3</p>
            </div>
            <div className='users-info__div'>
              <p>My profile</p>
              <p>Logout</p>
            </div>
          </div>
          <div
            className={visibleMenu ? 'mobile-menu active' : 'mobile-menu'}
            onClick={() => setVisibleMenu(!visibleMenu)}
          >
            <div className='menu-bar'></div>
            <div className='menu-bar'></div>
            <div className='menu-bar'></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
