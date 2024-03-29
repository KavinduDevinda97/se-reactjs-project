/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Complaint = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Complaint List</h4>
              <h6>Manage </h6>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="table-top">
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

              <div className="card" id="filter_inputs">
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="Enter Name" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="Enter Reference No" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="form-group">
                        <select className="select">
                          <option>Completed</option>
                          <option>Paid</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="form-group">
                        <a className="btn btn-filters ms-auto">
                          <img
                            src="assets/img/icons/search-whites.svg"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table  datanew">
                  <thead>
                    <tr>
                      <th>
                        <label className="checkboxs">
                          <input type="checkbox" id="select-all" />
                          <span className="checkmarks"></span>
                        </label>
                      </th>
                      <th>Reference</th>
                      <th>Date</th>
                      <th>Complainer Name</th>
                      <th>Complainer NIC</th>
                      <th>Complainer Address</th>
                      <th>Complaint Subject</th>
                      <th>Complaint Category</th>
                      <th>Status</th>

                      <th className="text-center">Action</th>
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
                      <td>SL0101</td>
                      <td>19 Nov 2022</td>
                      <td>Yesh Adithya</td>
                      <td>980329103V</td>
                      <td>Moratu, Sri Lanka</td>
                      <td>Murder case on Moratuwa</td>
                      <td>Murder</td>
                      <td>
                        <span className="badges bg-lightgreen">Completed</span>
                      </td>
                      <td className="text-center">
                        <a
                          className="action-set"
                          href="javascript:void(0);"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <i
                            className="fa fa-ellipsis-v"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <Link to="/complaint-details" className="dropdown-item">
                              <img
                                src="assets/img/icons/eye1.svg"
                                className="me-2"
                                alt="img"
                              />
                              Show Details
                            </Link>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <img
                                src="assets/img/icons/download.svg"
                                className="me-2"
                                alt="img"
                              />
                              Download pdf
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks"></span>
                        </label>
                      </td>
                      <td>SL0101</td>
                      <td>19 Nov 2022</td>
                      <td>Yesh Adithya</td>
                      <td>980329103V</td>
                      <td>Moratu, Sri Lanka</td>
                      <td>Murder case on Moratuwa</td>
                      <td>Murder</td>
                      <td>
                        <span className="badges bg-lightgreen">Completed</span>
                      </td>
                      <td className="text-center">
                        <a
                          className="action-set"
                          href="javascript:void(0);"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <i
                            className="fa fa-ellipsis-v"
                            aria-hidden="true"
                          ></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <Link to="/complaint-details" className="dropdown-item">
                              <img
                                src="assets/img/icons/eye1.svg"
                                className="me-2"
                                alt="img"
                              />
                              Show Details
                            </Link>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              <img
                                src="assets/img/icons/download.svg"
                                className="me-2"
                                alt="img"
                              />
                              Download pdf
                            </a>
                          </li>
                        </ul>
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
        <div className="modal-dialog modal-lg modal-dialog-centered">
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
                      <td>$ 0.00 </td>
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
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Payment</h5>
              <button
                type="button"
                className="btn-close"
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
                    <div className="input-groupicon">
                      <input
                        type="text"
                        value="2022-03-07"
                        className="datetimepicker"
                      />
                      <div className="addonset">
                        <img src="assets/img/icons/calendars.svg" alt="img" />
                      </div>
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
                    <input type="text" value="0.00" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label>Paying Amount</label>
                    <input type="text" value="0.00" />
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
                  <div className="form-group mb-0">
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
                className="btn btn-cancel"
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
        <div className="modal-dialog modal-lg modal-dialog-centered">
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
                    <div className="input-groupicon">
                      <input
                        type="text"
                        value="2022-03-07"
                        className="datetimepicker"
                      />
                      <div className="addonset">
                        <img src="assets/img/icons/datepicker.svg" alt="img" />
                      </div>
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
                    <input type="text" value="0.00" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label>Paying Amount</label>
                    <input type="text" value="0.00" />
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
                  <div className="form-group mb-0">
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
                className="btn btn-cancel"
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

export default Complaint;
