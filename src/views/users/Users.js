import React, { useState, useEffect } from "react";
import { CCard } from "@coreui/react";
import UsersApi from "./UsersApi.js";

const Users = () => {
  const [users, setUsers] = useState([]);

  function getUsersDetails() {
    UsersApi.getUsersData().then((res) => {
      setUsers(res.data);
    });
  }

  useEffect(() => {
    getUsersDetails();
  }, []);

  return (
    <>
      <CCard>
        <table className="table table-hover table-outline mb-0 d-none d-sm-table">
          <thead className="thead-light">
            <tr>
              <th className="text-center">id</th>
              <th>Copier</th>
              <th>Register Date</th>
              <th className="text-center">Starting Balance</th>
              <th className="text-center">Balance now</th>
              <th className="text-center">Total Profits</th>
              <th className="text-center">Profit percentage Now</th>
              <th className="text-center">Following Analyst</th>
              <th className="text-center">Paid/not paid</th>
              <th className="text-center">Telegram</th>
              <th className="text-center">Delete/Stop</th>
            </tr>
          </thead>
          <tbody>
            {users.forEach((user) => {
              if (user != null) {
                  <tr key={user.id}>
                    <td className="text-center">{user.id}</td>
                    <td>
                      <strong>
                        {user.telegram.firstName} {user.telegram.lastName}{" "}
                      </strong>
                    </td>
                    <td className="text-center"> {user.telegram.createdAt} </td>
                    <td>
                      <div className="clearfix ">
                        <div className="text-center">
                          <strong> {user.openTradingVolume.length} </strong>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">{user.totalTradedVolume}</td>
                    <td>
                      <div className="text-center">{user.totalProfits}</div>
                    </td>
                    <td className="text-center">{user.winrate * 100}%</td>

                    {user.follows.length >0
                    ?user.follows.forEach((fol) => {
                        <td key={user.id}>
                          {fol.analyst.telegramUser.firstName}{" "}
                          {fol.analyst.telegramUser.lastName}
                        </td>
                    })
                    :<td></td>
                  }
                    <td></td>
                    <td>Pending</td>

                    <td className="text-center">{user.telegram.telegramId}</td>
                    <td className="text-center">
                      <button>Delete</button>/{" "}
                      <button disabled="disabled">Stop</button>
                    </td>
                  </tr>
              }
            })}
          </tbody>
        </table>
      </CCard>
    </>
  );
};

export default Users;
