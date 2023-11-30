/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Department = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Department List</h4>
              <h6>Manage your Department</h6>
            </div>
            <div className="page-btn">
              <Link to="/create-department" className="btn btn-added">
                <img src="assets/img/icons/plus.svg" alt="img" />
                Add Department
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="table-top">
                <div className="search-set">
                  <div className="search-path">
                    <a className="btn btn-filter" id="filter_search">
                      <img src="assets/img/icons/filter.svg" alt="img" />
                      <span>
                        <img src="assets/img/icons/closes.svg" alt="img" />
                      </span>
                    </a>
                  </div>
                  <div className="search-input">
                    <a className="btn btn-searchset">
                      <img src="assets/img/icons/search-white.svg" alt="img" />
                    </a>
                  </div>
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

              <div className="card" id="filter_inputs">
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="Enter User Name" />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="Enter Phone" />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="Enter Email" />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="datetimepicker cal-icon"
                          placeholder="Choose Date"
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="form-group">
                        <select className="select">
                          <option>Disable</option>
                          <option>Enable</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-1 col-sm-6 col-12 ms-auto">
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
                          <input type="checkbox" />
                          <span className="checkmarks"></span>
                        </label>
                      </th>
                      <th>Department name </th>
                      <th>Description </th>
                      <th>Role </th>
                      <th>Location </th>
                      <th>Contact Information </th>
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
                      <td>Kotuwa Police Station</td>
                      <td>Kotuwa Police station account created</td>
                      <td>Police Station</td>
                      <td>Colombo</td>
                      <td>076-6891342</td>
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
                      <td>Maradana Police Station</td>
                      <td>Maradana Police station account created</td>
                      <td>Police Station</td>
                      <td>Colombo</td>
                      <td>076-6891342</td>
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
    </>
  );
};

export default Department;
