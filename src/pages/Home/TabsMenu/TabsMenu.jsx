import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function TabsMenu() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='tabsMenu'>
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
  )
}

export default TabsMenu