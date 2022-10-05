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
        <Link to='user'>
            <div className='userElemContainer'>
                <div className='userLeft'>
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
                    <div className='userInfo'>
                        <div
                            className={
                                props.firstName ? 'userName' : 'userNameNone'
                            }
                        >
                            <p className='userNameText'>
                                {props.firstName} {props.lastName}{' '}
                                <span className='userNameTag'>
                                    {props.userTag}
                                </span>
                            </p>
                        </div>
                        <div
                            className={
                                props.department
                                    ? 'userDepartment'
                                    : 'userDepartmentNone'
                            }
                        >
                            <p className='userDepartmentText'>
                                {props.department}
                            </p>
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
        </Link>
    );
}

export default UserElem;
