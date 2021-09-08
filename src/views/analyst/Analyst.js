import React, { useState, useEffect } from "react";
import { CCard, CCardHeader, CCol, CRow} from "@coreui/react";
import AnalystApi from "./AnalystApi.js";

function Analyst() {
  const [items, setItems] = useState([]);

  function getDashboardDetails() {
    AnalystApi.getDashBoarData().then((res) => {
      debugger;
      setItems(res.data);
      console.log(items);
    });
  }

  useEffect(() => {
    getDashboardDetails();
  },);

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
              {items.forEach((item) => {
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
