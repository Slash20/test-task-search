import React from 'react'
import './Header.css'
import Search from '../../../img/svg/Search.svg'
import Sort from '../../../img/svg/Sort.svg'
import TabsMenu from '../TabsMenu/TabsMenu'
import '../TabsMenu/TabsMenu.css'

function Header(props) {
  return (
    <header className='header'>
      <div className='header-container'>
        <h1 className='header-text'>Поиск</h1>
        <div className='input-container'>
          <img src={Search} alt="Search" className='search-img'/>
          <input type="text" className='input' placeholder='Введите имя, тег, почту...' />
          <img src={Sort} alt="Sort" className='sort-img' />
        </div>
        <TabsMenu value={props.value} setValue={props.setValue}/>
      </div>
    </header>
  )
}

export default Header