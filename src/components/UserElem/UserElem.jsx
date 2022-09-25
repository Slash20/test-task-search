import React from 'react'
import './UserElem.css'

function UserElem(props) {
  return (
    <div className='userElem'>
        <div className='userAvatar'>
            {props.img ? 
            <img className='userAvatarImg' src={props.img} alt="User Avatar" />
            : ''}
        </div>
        <div className='userInfo'>
            <div className={props.firstName ? 'userName' : 'userNameNone' } >
              <p className='userNameText'>{props.firstName} {props.lastName} <span className='userNameTag'>{props.userTag}</span></p>
            </div>
            <div className={props.department ? 'userDepartment' : 'userDepartmentNone'}>
              <p className='userDepartmentText'>{props.department}</p>
            </div>
        </div>
    </div>
  )
}

export default UserElem