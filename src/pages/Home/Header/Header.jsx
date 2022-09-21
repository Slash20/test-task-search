import React from 'react'
import './Header.css'
import Search from '../../../img/svg/Search.svg'
import Sort from '../../../img/svg/Sort.svg'


function Header() {
  return (
    <header className='header'>
      <div className='header-container'>
        <h1 className='header-text'>Поиск</h1>
        <div className='input-container'>
          <img src={Search} alt="Search" className='search-img'/>
          <input type="text" className='input' placeholder='Введите имя, тег, почту...' />
          <img src={Sort} alt="Sort" className='sort-img'/>
        </div>
      </div>
    </header>
  )
}

export default Header