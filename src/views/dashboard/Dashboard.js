import React, { lazy, useState, useEffect } from "react";
import { CCard, CCol, CRow } from "@coreui/react";

import DashboardApi from "./DashboardApi.js";
import API from "../../BaseApi";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));

function Dashboard() {
  const [items, setItems] = useState([]);

  function getData() {
    debugger;
    if (!localStorage.getItem(API.getTokenKey())) {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      let body = {
        code: params["code"],
        redirectUri: window.location.href.split("?")[0],
      };
      DashboardApi.getAuthToken(body)
        .then((res) => {
          debugger;
          console.log(res);
          localStorage.setItem(API.getTokenKey(), res.data.access_token);
          console.log("resssa");
          getDashboardDetails();
        })
        .catch((err) => {
          if (!localStorage.getItem(API.getTokenKey()) || !params["code"]) {
            var base_url = window.location.origin;

            window.location =
              "https://auth.test.altseasons.com/auth/realms/altseasons/protocol/openid-connect/auth?client_id=account&response_type=code&scope=openid&redirect_uri=" +
              base_url +
              "/dashboard";
          }
        });
    } else {
      getDashboardDetails();
    }
  }
  function getDashboardDetails() {
    DashboardApi.getDashBoarData().then((res) => {
      debugger;
      setItems(res.data);
      console.log(items);
    });
  }

  AuthenticationRedirection();
  function AuthenticationRedirection() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
  }

  useEffect(() => {
    getData();
  });

  return (
    <CRow>
      <WidgetsDropdown />
      <CCol>
        <CCard>
          <table className="table table-hover table-outline mb-0 d-none d-sm-table">
            <thead className="thead-light">
              <tr>
                <th className="text-center">id</th>
                <th>Analyst</th>
                <th>Register Date</th>
                <th className="text-center">Number of Copies</th>
                <th>Total Copiers Balance</th>
                <th>Profits</th>
                <th>Win Rate %</th>
                <th>Telegram</th>
              </tr>
            </thead>
            <tbody>
              {items.forEach((item) => {
                return (
                  <tr key= {item.id}>
                    <td className="text-center">{item.id}</td>
                    <td>
                      <strong>
                        {item.telegramUser.firstName}{" "}
                        {item.telegramUser.lastName}{" "}
                      </strong>
                    </td>
                    <td className="text-center">
                      {" "}
                      {item.telegramUser.createdAt}{" "}
                    </td>
                    <td>
                      <div className="clearfix ">
                        <div className="text-center">
                          <strong> {item.followers.length} </strong>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">{item.totalTradedVolume}</td>
                    <td>
                      <div className="small text-muted">
                        {item.openTradingVolume}
                      </div>
                    </td>
                    <td className="text-center">{item.winrate * 100}%</td>
                    <td className="text-center">
                      {item.telegramUser.telegramId}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CCard>
 

        <br />
      </CCol>
    </CRow>
  );
}

export default Dashboard;
