import React from 'react';
import UserElem from '../../../components/UserElem/UserElem';
import './Main.css';
import getUsers from './getUsers';
import { useEffect } from 'react';
import { useState } from 'react';
import YearBlock from '../../../components/YearBlock/YearBlock';
import SearchNone from '../../../components/SearchNone/SearchNone';

function Main(props) {
    let currentYear = 2022;
    const [users, setUsers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    const [sortUsers, setSortUsers] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    ]);
    const { searchUser, sortMethod } = props;
    async function set() {
        const users = await getUsers();
        console.log(users);
        setUsers(users.items);
    }
    useEffect(() => {
        set();
    }, []);

    useEffect(() => {
        if (!users) {
            return;
        }
        setSortUsers(
            users.filter((e) => {
                if (searchUser.length >= 1) {
                    const superStr =
                        `${e.firstName} ${e.lastName} ${e.userTag}`.toLowerCase();
                    if (superStr.indexOf(searchUser.toLowerCase()) === -1) {
                        return false;
                    }
                }

                if (props.value === 'all') {
                    return true;
                } else {
                    return props.value === e.department;
                }
            })
        );
    }, [props.value, props.searchUser]);
    if (!users) {
        return <SearchNone />;
    }
    if (!sortUsers.length) {
        return <SearchNone type='not found' />;
    }
    return (
        <main className='main'>
            <div className='userList'>
                {(props.value === 'all'
                    ? props.searchUser.length < 1
                        ? users
                        : sortUsers
                    : sortUsers
                )
                    .sort((a, b) => {
                        if (sortMethod === 'alphabetically') {
                            const firstStr = a.firstName + a.lastName;
                            const secondStr = b.firstName + b.lastName;
                            if (firstStr > secondStr) {
                                return 1;
                            }

                            if (firstStr < secondStr) {
                                return -1;
                            }

                            return 0;
                        }
                        if (sortMethod === 'by-birthday') {
                            const firstDate = a.birthday;
                            const secondDate = b.birthday;
                            const firstYear = Number(firstDate.slice(0, 4));
                            const secondYear = Number(secondDate.slice(0, 4));
                            if (firstYear > secondYear) {
                                return -1;
                            }

                            if (firstYear < secondYear) {
                                return 1;
                            }

                            if (firstYear === secondYear) {
                                const firstMonth = Number(
                                    firstDate.slice(5, 7)
                                );
                                const secondMonth = Number(
                                    secondDate.slice(5, 7)
                                );
                                if (firstMonth > secondMonth) {
                                    return -1;
                                }
                                if (firstMonth < secondMonth) {
                                    return 1;
                                }
                                if (firstMonth === secondMonth) {
                                    const firstDay = Number(
                                        firstDate.slice(8, 10)
                                    );
                                    const secondDay = Number(
                                        secondDate.slice(8, 10)
                                    );
                                    if (firstDay > secondDay) {
                                        return -1;
                                    }
                                    if (firstDay < secondDay) {
                                        return 1;
                                    }
                                }
                            }
                            return 0;
                        }
                    })
                    .map((e, i, arr) => {
                        if (!e.department) {
                            return <UserElem key={i} sortMethod={sortMethod} />;
                        }
                        let newDepartment;
                        switch (e.department) {
                            case 'android':
                                newDepartment = 'Android';
                                break;
                            case 'ios':
                                newDepartment = 'IOS';
                                break;
                            case 'design':
                                newDepartment = 'Дизайн';
                                break;
                            case 'management':
                                newDepartment = 'Менеджмент';
                                break;
                            case 'qa':
                                newDepartment = 'QA';
                                break;
                            case 'back_office':
                                newDepartment = 'Бэк-офис';
                                break;
                            case 'frontend':
                                newDepartment = 'Frontend';
                                break;
                            case 'hr':
                                newDepartment = 'HR';
                                break;
                            case 'pr':
                                newDepartment = 'PR';
                                break;
                            case 'backend':
                                newDepartment = 'Backend';
                                break;
                            case 'support':
                                newDepartment = 'Техподдержка';
                                break;
                            case 'analytics':
                                newDepartment = 'Аналитика';
                                break;
                            default:
                                newDepartment = '';
                                break;
                        }
                        const year = Number(e.birthday.slice(0, 4));
                        function changeYear() {
                            const prevYear = currentYear;
                            currentYear = year;
                            return <div>{prevYear}</div>;
                        }
                        if (i === 0) {
                            currentYear = year;
                        }
                        return (
                            <React.Fragment key={i}>
                                {year !== currentYear &&
                                sortMethod === 'by-birthday' &&
                                i !== 0 ? (
                                    <YearBlock
                                        text={changeYear()}
                                        key={i + 'year'}
                                    />
                                ) : null}
                                <UserElem
                                    img={e.avatarUrl}
                                    firstName={e.firstName}
                                    lastName={e.lastName}
                                    department={newDepartment}
                                    userTag={e.userTag}
                                    sortMethod={sortMethod}
                                    birthday={e.birthday}
                                    id={e.id}
                                    phone={e.phone}
                                />
                                {i === arr.length - 1 &&
                                sortMethod === 'by-birthday' ? (
                                    <YearBlock text={changeYear()} />
                                ) : null}
                            </React.Fragment>
                        );
                    })}
            </div>
        </main>
    );
}

export default Main;
