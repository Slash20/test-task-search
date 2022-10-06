import React from 'react';
import './UserProfile.css';
import vector from '../../img/svg/Vector.svg';
import { Link } from 'react-router-dom';

function UserProfile() {
    return (
        <div className='userProfileContainer'>
            <Link to='../'>
                <img
                    style={{
                        width: '6.25px',
                        height: '10.5px',
                        position: 'absolute',
                        top: '28.8px',
                        left: '2.28%',
                    }}
                    src={vector}
                    alt=''
                />
            </Link>
            <header className='userProfileHeader'>
                <div className='userProfileAvatar'></div>
                <h3 className='userProfileFullName'>
                    Boby Jones <span>mp</span>
                </h3>
                <p className='userProfileDepartment'>Дизайнер</p>
            </header>
            <main className='userProfileMain'></main>
        </div>
    );
}

export default UserProfile;
