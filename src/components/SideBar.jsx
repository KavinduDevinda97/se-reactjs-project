/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ currentPath }) => {
  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              {/* <li>
                <Link to="/" className={currentPath === "/" ? "active" : ""}>
                  <img src="assets/img/icons/dashboard.svg" alt="img" />
                  <span>Dashboard</span>{" "}
                </Link>
              </li> */}
              {/* COMPLIANT TAB */}
              <li className="submenu">
                <a>
                  <img src="assets/img/icons/purchase1.svg" alt="img" />
                  <span>Complaint</span> <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <Link
                      to="/complaint"
                      className={currentPath === "/complaint" ? "active" : ""}
                    >
                      Complaint List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/category"
                      className={
                        currentPath === "/category" ? "active" : ""
                      }
                    >
                    Complaint Category List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/add-category"
                      className={
                        currentPath === "/add-category" ? "active" : ""
                      }
                    >
                      Add Complaint Category
                    </Link>
                  </li>
                </ul>
              </li>
              {/* CASE TRANSFER TAB */}
              <li>
                <Link
                  to="/case-transfer"
                  className={currentPath === "/case-transfer" ? "active" : ""}
                >
                  <img src="assets/img/icons/transfer1.svg" alt="img" />
                  <span>Case Transfer</span>
                </Link>
              </li>
              {/* DEPARTMENT TAB */}
              <li className="submenu">
                <a>
                  <i
                    className="fa fa-building"
                    data-bs-toggle="tooltip"
                    title="Departments"
                  ></i>
                  <span>Dpeartments</span> <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <Link
                      to="/department"
                      className={currentPath === "/department" ? "active" : ""}
                    >
                      Department List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/create-department"
                      className={
                        currentPath === "/create-department" ? "active" : ""
                      }
                    >
                      Add Department
                    </Link>
                  </li>
                </ul>
              </li>
              {/* USERS TAB */}
              <li className="submenu">
                <a>
                  <img src="assets/img/icons/users1.svg" alt="img" />
                  <span>Users</span> <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <Link
                      to="/user"
                      className={currentPath === "/user" ? "active" : ""}
                    >
                      Users List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/new-user"
                      className={currentPath === "/new-user" ? "active" : ""}
                    >
                      New User{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              {/* REPORT TAB */}
              <li className="submenu">
                <a>
                  <img src="assets/img/icons/time.svg" alt="img" />
                  <span>Report</span> <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <Link
                      to="/report-complaint"
                      className={currentPath === "RComplaint" ? "active" : ""}
                    >
                      Complaint details Report
                    </Link>
                  </li>
                </ul>
              </li>
              {/* SETTING TAB */}
              <li className="submenu">
                <a>
                  <img src="assets/img/icons/settings.svg" alt="img" />
                  <span>Settings</span> <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <Link
                      to="/permissionsList"
                      className={currentPath === "/permissionsList" ? "active" : ""}
                    >
                      Group Permissions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/add-permission"
                      className={currentPath === "/add-permission" ? "active" : ""}
                    >
                      Add Permissions
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
