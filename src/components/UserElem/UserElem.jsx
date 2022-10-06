import React from 'react';
import { Link } from 'react-router-dom';
import './UserElem.css';

function UserElem(props) {
    const months = [
        'янв',
        'фев',
        'мар',
        'апр',
        'мая',
        'июн',
        'июл',
        'авг',
        'сен',
        'окт',
        'ноя',
        'дек',
    ];
    return (
        <div className='userElemContainer'>
            <div className='userLeft'>
                <Link to='user'>
                    <div className='userAvatar'>
                        {props.img ? (
                            <img
                                className='userAvatarImg'
                                src={props.img}
                                alt='User Avatar'
                            />
                        ) : (
                            ''
                        )}
                    </div>
                </Link>
                <div className='userInfo'>
                    <div
                        className={
                            props.firstName ? 'userName' : 'userNameNone'
                        }
                    >
                        <p className='userNameText'>
                            <Link
                                to='user'
                                style={{
                                    color: '#050510',
                                    textDecoration: 'none',
                                }}
                            >
                                {props.firstName} {props.lastName}{' '}
                            </Link>
                            <span className='userNameTag'>{props.userTag}</span>
                        </p>
                    </div>
                    <div
                        className={
                            props.department
                                ? 'userDepartment'
                                : 'userDepartmentNone'
                        }
                    >
                        <p className='userDepartmentText'>{props.department}</p>
                    </div>
                </div>
            </div>

            {props.sortMethod === 'by-birthday' ? (
                <div className='userBirthday'>
                    {Number(props.birthday.slice(8, 10)) +
                        ' ' +
                        months[Number(props.birthday.slice(5, 7)) - 1]}
                </div>
            ) : null}
        </div>
    );
}

export default UserElem;
