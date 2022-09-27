import React, { useEffect } from 'react'
import './Home.css'
import Header from './Header/Header'
import Main from './Main/Main'
import PopUp from '../../components/PopUp/PopUp'

function Home() {
  const [sortMethod, setSortMethod] = React.useState('alphabetically')
  const [popUp, setPopUp] = React.useState(false)
  const [value, setValue] = React.useState('all');
  useEffect(() => {console.log(value)}, [value])
  const [searchUser, setSearchUser] = React.useState('')
  return (
    <div className='home'>
        <Header value={value} setValue={setValue} searchUser={searchUser} setSearchUser={setSearchUser} 
        setPopUp={setPopUp}/>
        <Main value={value} searchUser={searchUser} setSearchUser={setSearchUser} sortMethod={sortMethod}/>
        {popUp ? <PopUp popUp={popUp} setPopUp={setPopUp} sortMethod={sortMethod} setSortMethod={setSortMethod}/> : ''}
    </div>
  )
}

export default Home