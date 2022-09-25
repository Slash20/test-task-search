import React, { useEffect } from 'react'
import './Home.css'
import Header from './Header/Header'
import Main from './Main/Main'

function Home() {
  const [value, setValue] = React.useState('all');
  useEffect(() => {console.log(value)}, [value])
  return (
    <div className='home'>
        <Header value={value} setValue={setValue}/>
        <Main value={value}/>
    </div>
  )
}

export default Home