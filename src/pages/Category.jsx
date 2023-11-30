/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Category List</h4>
              <h6>Manage your Category</h6>
            </div>
            <div className="page-btn">
              <Link to="/new-user" className="btn btn-added">
                <img src="assets/img/icons/plus.svg" alt="img" />
                Add Category
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="table-top">
                <div className="search-set">
                  <div className="search-path">
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
                      <th>Category name </th>
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
                      <td>Murder</td>
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
                      <td>Robberry</td>
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

export default Category;
