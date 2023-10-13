/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = ({active}) => {
    return (
        <>
            <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li>
                                <Link to="/" className={active === "Dashboard" ? "active" : ""}><img src="assets/img/icons/dashboard.svg" alt="img" /><span>
                                    Dashboard</span> </Link>
                            </li>
                            <li className="submenu">
                                <a><img src="assets/img/icons/purchase1.svg" alt="img" /><span>
                                    Complaint</span> <span className="menu-arrow"></span></a>
                                <ul>
                                    <li><Link to="/complaint" className={active === "LComplaint" ? "active" : ""}>Complaint List</Link></li>
                                    <li><Link to="/complaint-details" className={active === "VComplaint" ? "active" : ""}>View Complaint</Link></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a><img src="assets/img/icons/purchase1.svg" alt="img" /><span>
                                    Emergency Complaint</span> <span className="menu-arrow"></span></a>
                                <ul>
                                    <li><Link to="" className={active === "LEComplaint" ? "active" : ""}>Emergency Complaint List</Link></li>
                                    <li><Link to="/complaint" className={active === "VEComplaint" ? "active" : ""}>View Emergency Complaint</Link></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a><img src="assets/img/icons/users1.svg" alt="img" /><span>
                                    Users</span> <span className="menu-arrow"></span></a>
                                <ul>
                                    <li><Link to="/new-user" className={active === "NUser" ? "active" : ""}>New User </Link></li>
                                    <li><Link to="/user" className={active === "LUser" ? "active" : ""}>Users List</Link></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a><img src="assets/img/icons/time.svg" alt="img" /><span>
                                    Report</span> <span className="menu-arrow"></span></a>
                                <ul>
                                    <li><Link to="" className={active === "RComplaint" ? "active" : ""}>Complaint details Report</Link></li>
                                    <li><Link to="" className={active === "REComplaint" ? "active" : ""}>Emergency Complaint Report</Link></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a><img src="assets/img/icons/settings.svg" alt="img" /><span>
                                    Settings</span> <span className="menu-arrow"></span></a>
                                <ul>
                                    <li><Link to="" className={active === "GPermission" ? "active" : ""}>Group Permissions</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar