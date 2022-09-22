import React from 'react'
import './Header.css'
import Search from '../../../img/svg/Search.svg'
import Sort from '../../../img/svg/Sort.svg'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function Header() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header className='header'>
      <div className='header-container'>
        <h1 className='header-text'>Поиск</h1>
        <div className='input-container'>
          <img src={Search} alt="Search" className='search-img'/>
          <input type="text" className='input' placeholder='Введите имя, тег, почту...' />
          <img src={Sort} alt="Sort" className='sort-img'/>
        </div>
        <Box sx={{ width: '100%' }} style={{marginTop: '20px'}}>
          <Tabs 
            value={value}
            onChange={handleChange}
            textColor="none"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Все" />
            <Tab value="two" label="Designers" />
            <Tab value="three" label="Analysts" />
            <Tab value="four" label="Managers" />
            <Tab value="five" label="iOS" />
            <Tab value="six" label="Android" />
          </Tabs>
        </Box>
      </div>
    </header>
  )
}

export default Header