import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function TabsMenu(props) {
  const {value, setValue} = props
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='tabsMenu'>
        <Box sx={{ width: '100%' }} style={{marginTop: '20px'}}>
          <Tabs 
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="all" label="Все" />
            <Tab value="design" label="Designers" />
            <Tab value="analytics" label="Analysts " />
            <Tab value="management" label="Managers" />
            <Tab value="ios" label="iOS" />
            <Tab value="android" label="Android" />
          </Tabs>
        </Box>
    </div>
  )
}

export default TabsMenu