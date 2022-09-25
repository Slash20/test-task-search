import React from "react";
import UserElem from "../../../components/UserElem/UserElem";
import "./Main.css";
import getUsers from "./getUsers";
import { useEffect } from "react";
import { useState } from "react";

function Main(props) {
  const [users, setUsers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [sortUsers, setSortUsers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  async function set() {
    const users = await getUsers();
    setUsers(users.items);
  }
  useEffect(() => {
    set();
  }, []);

  useEffect(() => {
    setSortUsers(
      users.filter((e) => {
        if (props.value === "all") {
          return true;
        } else {
          console.log(props.value);
          console.log(e.department);
          return props.value === e.department;
        }
      })
    );
  }, [props.value]);
  return (
    <main className="main">
      <div className="userList">
        {(props.value === "all" ? users : sortUsers)
          .sort((a, b) => {
            const firstStr = a.firstName + a.lastName;
            const secondStr = b.firstName + b.lastName;
            if (firstStr > secondStr) {
              return 1;
            }

            if (firstStr < secondStr) {
              return -1;
            }

            return 0;
          })
          .map((e, i) => {
            if (!e.department) {
              return <UserElem key={i} />;
            }
            console.log(e);
            let newDepartment;
            switch (e.department) {
              case "android":
                newDepartment = "Android";
                break;
              case "ios":
                newDepartment = "IOS";
                break;
              case "design":
                newDepartment = "Дизайн";
                break;
              case "management":
                newDepartment = "Менеджмент";
                break;
              case "qa":
                newDepartment = "QA";
                break;
              case "back_office":
                newDepartment = "Бэк-офис";
                break;
              case "frontend":
                newDepartment = "Frontend";
                break;
              case "hr":
                newDepartment = "HR";
                break;
              case "pr":
                newDepartment = "PR";
                break;
              case "backend":
                newDepartment = "Backend";
                break;
              case "support":
                newDepartment = "Техподдержка";
                break;
              case "analytics":
                newDepartment = "Аналитика";
                break;
              default:
                newDepartment = "";
                break;
            }
            return (
              <UserElem
                img={e.avatarUrl}
                key={i}
                firstName={e.firstName}
                lastName={e.lastName}
                department={newDepartment}
                userTag={e.userTag}
              />
            );
          })}
      </div>
    </main>
  );
}

export default Main;
