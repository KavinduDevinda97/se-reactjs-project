import React from "react";
import { Link } from "react-router-dom";

const GroupPermissions = () => {
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Group Permissions</h4>
            <h6>Manage Group Permissions</h6>
          </div>
          <div className="page-btn">
            <Link className="btn btn-added" to="/add-permission">
              <img src="assets/img/icons/plus.svg" alt="img" className="me-1" />
              Add Group Permission
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="table-top">
              <div className="search-set">
                <div className="search-input">
                  <Link className="btn btn-searchset">
                    <img src="assets/img/icons/search-white.svg" alt="img" />
                  </Link>
                </div>
              </div>
              <div className="wordset">
                <ul>
                  <li>
                    <Link
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="pdf"
                    >
                      <img src="assets/img/icons/pdf.svg" alt="img" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="excel"
                    >
                      <img src="assets/img/icons/excel.svg" alt="img" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="print"
                    >
                      <img src="assets/img/icons/printer.svg" alt="img" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table datanew">
                <thead>
                  <tr>
                    <th>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks"></span>
                      </label>
                    </th>
                    <th>Role</th>
                    <th>description</th>
                    <th>Status</th>
                    <th className="text-end">Action</th>
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
                    <td>Super Admin</td>
                    <td>Owner</td>
                    <td>
                      <span className="badges bg-lightgreen">Active</span>
                    </td>
                    <td className="text-end">
                      <Link className="me-3" to="/edit-permission">
                        <img src="assets/img/icons/edit.svg" alt="img" />
                      </Link>
                      <Link className="me-3 confirm-text">
                        <img src="assets/img/icons/delete.svg" alt="img" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks"></span>
                      </label>
                    </td>
                    <td>Police Officer</td>
                    <td>Police Officer Permission</td>
                    <td>
                      <span className="badges bg-lightgreen">Active</span>
                    </td>
                    <td className="text-end">
                      <Link className="me-3" to="/edit-permission">
                        <img src="assets/img/icons/edit.svg" alt="img" />
                      </Link>
                      <Link className="me-3 confirm-text">
                        <img src="assets/img/icons/delete.svg" alt="img" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="checkboxs">
                        <input type="checkbox" />
                        <span className="checkmarks"></span>
                      </label>
                    </td>
                    <td>AG offcier</td>
                    <td>AG Officer Permission</td>
                    <td>
                      <span className="badges bg-lightgreen">Active</span>
                    </td>
                    <td className="text-end">
                      <Link className="me-3" to="/edit-permission">
                        <img src="assets/img/icons/edit.svg" alt="img" />
                      </Link>
                      <Link to="" className="me-3 confirm-text">
                        <img src="assets/img/icons/delete.svg" alt="img" />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPermissions;
