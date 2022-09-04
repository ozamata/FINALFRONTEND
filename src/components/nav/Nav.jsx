import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageAltDetail} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'

import { useState } from 'react'
import { useEffect, useRef } from 'react';

const Nav = () => {
  // const header = useRef();
  // const headerNav = useRef();
  const headerNavMenuLinkList = useRef();
  const headerNavThemeIconContainer = useRef();
  const [activeNav,setActiveNav]=useState('#');

  const toggleTheme = () => {
    const body = document.querySelector('.body');
    body.classList.toggle('body--light');
    headerNavThemeIconContainer.current.classList.toggle('header-nav__theme-icon-container--active');

    if (body.classList.contains('body--light')) {
      localStorage.setItem('darkMode', false);
    } else {
      localStorage.setItem('darkMode', true);
    }
  };
  const openMenu = () => {
    headerNavMenuLinkList.current.classList.add('header-nav__menu-link-list--open');
  };

  const closeMenu = () => {
    headerNavMenuLinkList.current.classList.remove('header-nav__menu-link-list--open');
  };

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'true' || localStorage.getItem('darkMode') === null) {
      document.querySelector('.body').classList.remove('body--light');
      headerNavThemeIconContainer.current.classList.remove('header-nav__theme-icon-container--active');
    } else {
      document.querySelector('.body').classList.add('body--light');
      headerNavThemeIconContainer.current.classList.add('header-nav__theme-icon-container--active');
    }
  }, []);



  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav==='#experience' ? 'active':''}><BiBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav==='#services' ? 'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><BiMessageAltDetail/></a>
      
      <button
              className="header-nav__theme-icon-container"
              ref={headerNavThemeIconContainer}
              onClick={toggleTheme}
            >
              <span className="header-nav__theme-icon">🌚</span>
              <span className="header-nav__theme-icon">🌞</span>
            </button>
            <button
              className="header-nav__menu-icon-container"
              onClick={openMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="header-nav__menu-icon">
                <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
              </svg>
            </button>

    </nav>
  )
}

export default Nav