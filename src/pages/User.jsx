/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>User List</h4>
              <h6>Manage your User</h6>
            </div>
            <div className="page-btn">
              <Link to="/new-user" className="btn btn-added">
                <img src="assets/img/icons/plus.svg" alt="img" />
                Add User
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="table-top">
                <div className="search-set">
                </div>
                <div className="wordset">
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="pdf"
                      >
                        <img src="assets/img/icons/pdf.svg" alt="img" />
                      </a>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="excel"
                      >
                        <img src="assets/img/icons/excel.svg" alt="img" />
                      </a>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="print"
                      >
                        <img src="assets/img/icons/printer.svg" alt="img" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table  datanew">
                  <thead>
                    <tr>
                      <th>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks"></span>
                        </label>
                      </th>
                      <th>User name </th>
                      <th>Phone</th>
                      <th>email</th>
                      <th>Role</th>
                      <th>Created On</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks"></span>
                        </label>
                      </td>
                      <td>Thomas</td>
                      <td>+12163547758 </td>
                      <td>
                        <a
                          href="/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="fb8f9394969a88bb9e839a968b979ed5989496"
                        >
                          [email&#160;protected]
                        </a>
                      </td>
                      <td>Super Admin </td>
                      <td>3/15/2022</td>
                      <td>
                        <span className="bg-lightgreen badges">Active</span>
                      </td>
                      <td>
                        <a className="me-3" href="newuseredit.html">
                          <img src="assets/img/icons/edit.svg" alt="img" />
                        </a>
                        <a
                          className="me-3 confirm-text"
                          href="javascript:void(0);"
                        >
                          <img src="assets/img/icons/delete.svg" alt="img" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks"></span>
                        </label>
                      </td>
                      <td>504Benjamin</td>
                      <td>123-456-888</td>
                      <td>
                        <a
                          href="/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="60031513140f0d0512200518010d100c054e030f0d"
                        >
                          [email&#160;protected]
                        </a>
                      </td>
                      <td>Police admin </td>
                      <td>2/27/2022</td>
                      <td>
                        <span className="bg-lightred badges">Restricted</span>
                      </td>
                      <td>
                        <a className="me-3" href="newuseredit.html">
                          <img src="assets/img/icons/edit.svg" alt="img" />
                        </a>
                        <a
                          className="me-3 confirm-text"
                          href="javascript:void(0);"
                        >
                          <img src="assets/img/icons/delete.svg" alt="img" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="showpayment"
        tabIndex="-1"
        aria-labelledby="showpayment"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Show Payments</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Reference</th>
                      <th>Amount </th>
                      <th>Paid By </th>
                      <th>Paid By </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bor-b1">
                      <td>2022-03-07 </td>
                      <td>INV/SL0101</td>
                      <td>$ 1500.00 </td>
                      <td>Cash</td>
                      <td>
                        <a className="me-2" href="javascript:void(0);">
                          <img src="assets/img/icons/printer.svg" alt="img" />
                        </a>
                        <a
                          className="me-2"
                          href="javascript:void(0);"
                          data-bs-target="#editpayment"
                          data-bs-toggle="modal"
                          data-bs-dismiss="modal"
                        >
                          <img src="assets/img/icons/edit.svg" alt="img" />
                        </a>
                        <a
                          className="me-2 confirm-text"
                          href="javascript:void(0);"
                        >
                          <img src="assets/img/icons/delete.svg" alt="img" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="createpayment"
        tabIndex="-1"
        aria-labelledby="createpayment"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Payment</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label>Customer</label>
                    <div className="input-group">
                      <input
                        type="text"
                        value="2022-03-07"
                        className="datetimepicker"
                      />
                      <a className="scanner-set input-group-text">
                        <img src="assets/img/icons/datepicker.svg" alt="img" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label>Reference</label>
                    <input type="text" value="INV/SL0101" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label>Received Amount</label>
                    <input type="text" value="1500.00" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label>Paying Amount</label>
                    <input type="text" value="1500.00" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label>Payment type</label>
                    <select className="select">
                      <option>Cash</option>
                      <option>Online</option>
                      <option>Inprogress</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Note</label>
                    <textarea className="form-control"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-submit">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="editpayment"
        tabIndex="-1"
        aria-labelledby="editpayment"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Payment</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label>Customer</label>
                    <div className="input-group">
                      <input
                        type="text"
                        value="2022-03-07"
                        className="datetimepicker"
                      />
                      <a className="scanner-set input-group-text">
                        <img src="assets/img/icons/datepicker.svg" alt="img" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label>Reference</label>
                    <input type="text" value="INV/SL0101" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label>Received Amount</label>
                    <input type="text" value="1500.00" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label>Paying Amount</label>
                    <input type="text" value="1500.00" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label>Payment type</label>
                    <select className="select">
                      <option>Cash</option>
                      <option>Online</option>
                      <option>Inprogress</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Note</label>
                    <textarea className="form-control"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-submit">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
