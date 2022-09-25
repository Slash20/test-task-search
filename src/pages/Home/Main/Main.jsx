import React from 'react'
import UserElem from '../../../components/UserElem/UserElem'
import './Main.css'
import users from './users'

function Main() {
  console.log(users);
  return (
    <main className='main'>
      <div className='userList'>
        {users.map((e, i) => {
          return <UserElem key={i}/>
        })}
      </div>
    </main>
  )
}

export default Main