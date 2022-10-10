import React, { useEffect } from 'react';
import './UserProfile.css';
import vector from '../../img/svg/Vector.svg';
import { Link } from 'react-router-dom';
import star from '../../img/svg/Star.svg';
import phone from '../../img/svg/Phone.svg';
import getUsers from '../Home/Main/getUsers';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function UserProfile(props) {
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ];
    const [user, setUser] = useState({ ...useParams(), user: {} });
    async function set() {
        const users = await getUsers();
        const currentUser = users.items.find((e) => {
            return user.id === e.id;
        });
        setUser({ ...user, user: currentUser });
    }
    useEffect(() => {
        set();
    }, []);
    console.log(user.user.birthday);
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
                <img
                    className='userProfileAvatar'
                    alt=''
                    src={user.user.avatarUrl}
                />
                <h3 className='userProfileFullName'>
                    {user.user.firstName} {user.user.lastName}{' '}
                    <span>{user.user.userTag}</span>
                </h3>
                <p className='userProfileDepartment'>{user.user.department}</p>
            </header>
            <main className='userProfileMain'>
                <h3>
                    <img
                        src={star}
                        style={{ marginLeft: '18px', marginRight: '14px' }}
                        alt=''
                    />
                    {user.user.birthday
                        ? `${user.user.birthday.slice(8, 10)} ${
                              months[Number(user.user.birthday.slice(5, 7))]
                          } ${user.user.birthday.slice(0, 4)}`
                        : null}
                </h3>
                <h3>
                    <img
                        src={phone}
                        alt=''
                        style={{ marginLeft: '18px', marginRight: '14px' }}
                    />
                    {user.user.phone}
                </h3>
            </main>
        </div>
    );
}

export default UserProfile;
