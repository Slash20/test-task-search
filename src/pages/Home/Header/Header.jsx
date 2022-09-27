import React, { useState } from 'react'
import './Header.css'
import Search from '../../../img/svg/Search.svg'
import Sort from '../../../img/svg/Sort.svg'
import TabsMenu from '../TabsMenu/TabsMenu'
import '../TabsMenu/TabsMenu.css'
import getUsers from '../Main/getUsers'

function Header(props) {
  const {searchUser, setSearchUser, popUp, setPopUp} = props
  
  return (
    <header className='header'>
      <div className='header-container'>
        <h1 className='header-text'>Поиск</h1>
        <div className='input-container'>
          <img src={Search} alt="Search" className='search-img'/>
          <input type="text" className='input' placeholder='Введите имя, тег, почту...' onInput={(event) => {
            setSearchUser(event.target.value)}}/>
          <img src={Sort} alt="Sort" className='sort-img' onClick={() => {setPopUp(true)}}/>
        </div>
        <TabsMenu value={props.value} setValue={props.setValue}/>
      </div>
    </header>
  )
}

export default Header