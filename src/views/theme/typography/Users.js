import React from "react";
import { CCard, CCardHeader, CCardBody, CCol, CRow } from "@coreui/react";
import { DocsLink } from "src/reusable";
import { CChartDoughnut } from "@coreui/react-chartjs";

const Typography = () => {
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
            <tr>
              <td className="text-center">1</td>
              <td>
                <strong className="float-right">Yiorgos Avraamu</strong>
              </td>
              <td className="text-center">01/01/2016</td>
              <td>
                <div className="clearfix ">
                  <div className="text-center">4000</div>
                </div>
              </td>
              <td className="text-center">4500</td>
              <td>
                <div className="small text-muted">500</div>
              </td>
              <td className="text-center">20%</td>
              <td className="text-center"> Yousef</td>
              <td className="text-center"> Pending</td>
              <td className="text-center"> Mohammad</td>
              <td className="text-center"> Delete/Stop</td>
            </tr>
            <tr>
              <td className="text-center">1</td>
              <td>
                <strong>Yousef</strong>
              </td>
              <td className="text-center">01/01/2016</td>
              <td>
                <div className="clearfix ">
                  <div className="text-center">3000</div>
                </div>
              </td>
              <td className="text-center">3200</td>
              <td>
                <div className="small text-muted">200</div>
              </td>
              <td className="text-center">10%</td>
              <td className="text-center"> Khaled</td>
              <td className="text-center"> Cancelled</td>
              <td className="text-center"> Yousef</td>
              <td className="text-center"> Delete/Stop</td>
            </tr>
          </tbody>
        </table>
      </CCard>
      <CRow>
        <CCol xs="12" md="6" xl="4">
          <CCard>
            <CCardHeader>
              Account Balance:
              <button disabled="disabled" className="float-right">
                Hide
              </button>
            </CCardHeader>
            <h1 className="text-center">
              0.000015 <span className="h4">BTC</span>
            </h1>
            <small className="text-muted text-center"> Estimated Value </small>
            <strong className="h4 text-center">$79.9</strong>
          </CCard>
        </CCol>
        <CCol xs="12" md="6" xl="4">
          <CCard>
            <CCardHeader>Doughnut Chart</CCardHeader>
            <CCardBody>
              <CChartDoughnut
                datasets={[
                  {
                    backgroundColor: [
                      "#41B883",
                      "#E46651",
                      "#00D8FF",
                      "#DD1B16",
                    ],
                    data: [40, 20, 80, 10, 5, 15],
                  },
                ]}
                labels={[
                  "VueJs",
                  "EmberJs",
                  "ReactJs",
                  "AngularJs",
                  "ExpressJs",
                  "Java",
                ]}
                options={{
                  tooltips: {
                    enabled: true,
                  },
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {/* <CCard>
        <CCardHeader>Description list alignment</CCardHeader>
        <CCardBody>
          <p>
            Align terms and descriptions horizontally by using our grid system’s
            predefined classes (or semantic mixins). For longer terms, you can
            optionally add a{" "}
            <code className="highlighter-rouge">.text-truncate</code> class to
            truncate the text with an ellipsis.
          </p>
          <div className="bd-example">
            <dl className="row">
              <dt className="col-sm-3">Description lists</dt>
              <dd className="col-sm-9">
                A description list is perfect for defining terms.
              </dd>

              <dt className="col-sm-3">Euismod</dt>
              <dd className="col-sm-9">
                <p>
                  Vestibulum id ligula porta felis euismod semper eget lacinia
                  odio sem nec elit.
                </p>
                <p>Donec id elit non mi porta gravida at eget metus.</p>
              </dd>

              <dt className="col-sm-3">Malesuada porta</dt>
              <dd className="col-sm-9">
                Etiam porta sem malesuada magna mollis euismod.
              </dd>

              <dt className="col-sm-3 text-truncate">
                Truncated term is truncated
              </dt>
              <dd className="col-sm-9">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </dd>

              <dt className="col-sm-3">Nesting</dt>
              <dd className="col-sm-9">
                <dl className="row">
                  <dt className="col-sm-4">Nested definition list</dt>
                  <dd className="col-sm-8">
                    Aenean posuere, tortor sed cursus feugiat, nunc augue
                    blandit nunc.
                  </dd>
                </dl>
              </dd>
            </dl>
          </div>
        </CCardBody>
      </CCard> */}
    </>
  );
};

export default Typography;
