import React, { lazy, useMemo, useState, useEffect } from "react";
import { CCard, CCardHeader, CCol, CRow, CCallout } from "@coreui/react";
import axios from "axios";
import CIcon from "@coreui/icons-react";

import MainChartExample from "../charts/MainChartExample.js";
import DashboardApi from "./DashboardApi.js";
import TheSidebar from "src/containers/TheSidebar.js";
import API from "../../BaseApi";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));

function Analyst() {
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
  }, []);

  return (
    <CRow>
 
      <CCol>
        <CCard>
        <CCardHeader>New Analyst</CCardHeader>
          <table className="table table-hover table-outline mb-0 d-none d-sm-table">
            <thead className="thead-light">
              <tr>
                
                <th>Analyst</th>
                <th>Telegram</th>
                <th >Pair</th>
                <th>Approval</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <tr key= {item.id}>
                    
                    <td>
                      <strong>
                        {item.telegramUser.firstName}{" "}
                        {item.telegramUser.lastName}{" "}
                      </strong>
                    </td>
                    <td >
                       
                    </td> 
                     
                    <td >{item.telegramUser.base[0].coin} </td>
                    <td>
                      yes/no
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

export default Analyst;
