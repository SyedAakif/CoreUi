import React, { lazy, useMemo, useState, useEffect } from "react";
import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
  CCallout,
} from "@coreui/react";
import axios from "axios";
import CIcon from "@coreui/icons-react";

import MainChartExample from "../charts/MainChartExample.js";
import DashboardApi from "./DashboardApi.js";
import TheSidebar from "src/containers/TheSidebar.js";
const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));

function getData() {
  let body = {
    code: "b0d733c3-a316-4930-a5a5-3bec17b43fcb.cb8a144d-c92a-48bf-9752-76a82aa9f815.a4667de5-99dd-4f6c-9c16-9a10f2c1929b",
    redirectUri: "http://localhost:3000/admin",
  };
  DashboardApi.getAuthToken(body).then((res) => {
    console.log(res);
    getDashboardDetails();
  });
}

function getDashboardDetails() {
  DashboardApi.getDashBoarData().then((res) => {
    console.log("res");
  });
}

const Dashboard = () => {
  // here you set a state to tell the component it need to wait
  //  until the result is fetched from the api
  const [loadingData, setLoadingData] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();

    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);

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
              <tr>
                <td className="text-center">1</td>
                <td>
                  <strong>Yiorgos Avraamu</strong>
                </td>
                <td className="text-center">01/01/2016</td>
                <td>
                  <div className="clearfix ">
                    <div className="text-center">
                      <strong>50</strong>
                    </div>
                  </div>
                </td>
                <td className="text-center">100,000</td>
                <td>
                  <div className="small text-muted">2500</div>
                </td>
                <td className="text-center">50%</td>
                <td className="text-center"></td>
              </tr>
              <tr>
                <td className="text-center">2</td>
                <td>
                  <strong>Avram Tarasios</strong>
                  {/* <div className="small text-muted">
                        <span>Recurring</span> | Registered: Jan 1, 2015
                      </div> */}
                </td>
                <td className="text-center">01/01/2016</td>
                <td>
                  <div className="clearfix">
                    <div className="text-center">
                      <strong>150</strong>
                    </div>
                  </div>
                </td>
                <td className="text-center">200,000</td>
                <td>
                  <div className="small text-muted">1200</div>
                </td>
                <td className="text-center">80%</td>
                <td className="text-center"></td>
              </tr>
            </tbody>
          </table>
        </CCard>

        <CRow>
          <CCol xs="12" md="6" xl="6">
            <CCard>
              <CCardHeader>New Analyst</CCardHeader>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th>Analyst</th>
                    <th className="text-center">Telegram</th>
                    <th className="text-center">Pair</th>
                    <th className="text-center">
                      <span className="float-right"> Approval </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong className="float-left">Mohammad</strong>
                    </td>
                    <td>
                      {/* <div>Yiorgos Avraamu</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div> */}
                    </td>
                    <td className="text-center">USDT</td>
                    <td>
                      <div className="clearfix">
                        <div className="float-right">Yes/No</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <strong className="float-left">Yosef</strong>
                    </td>
                    <td>
                      {/* <div>Yiorgos Avraamu</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div> */}
                    </td>
                    <td className="text-center">BTC</td>
                    <td>
                      <div className="clearfix">
                        <div className="float-right">Yes/No</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CCard>
          </CCol>

          <CCol xs="12" md="6" xl="6">
            <CCard>
              <CCardHeader>New Copier</CCardHeader>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th>Copier</th>
                    <th className="text-center">Balance</th>
                    <th className="text-center">Following Analyst</th>
                    <th className="text-center">Pair</th>
                    <th className="text-center">
                      <span className="float-right"> Approval </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong className="float-left">Mohammad</strong>
                    </td>
                    <td>4,000</td>
                    <td className="text-center">Yousef</td>
                    <td className="text-center">USDT</td>
                    <td>
                      <div className="clearfix">
                        <div className="float-right">Yes/No</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong className="float-left">Abdulrehman</strong>
                    </td>
                    <td>10,000</td>
                    <td className="text-center">Nowfel</td>
                    <td className="text-center">BTC</td>
                    <td>
                      <div className="clearfix">
                        <div className="float-right">Yes/No</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CCard>
          </CCol>
        </CRow>

        <br />
      </CCol>
    </CRow>
  );
};

export default Dashboard;
