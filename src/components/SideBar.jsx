import React from 'react'

const SideBar = ({active}) => {
    return (
        <>
            <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li>
                                <a href="/home" className={active === "Dashboard" ? "active" : ""}><img src="assets/img/icons/dashboard.svg" alt="img" /><span>
                                    Dashboard</span> </a>
                            </li>
                            <li className="submenu">
                                <a href="javascript:void(0);"><img src="assets/img/icons/purchase1.svg" alt="img" /><span>
                                    Complaint</span> <span className="menu-arrow"></span></a>
                                <ul>
                                    <li><a href="/complaint" className={active === "LComplaint" ? "active" : ""}>Complaint List</a></li>
                                    <li><a href="/complaint-details" className={active === "VComplaint" ? "active" : ""}>View Complaint</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="javascript:void(0);"><img src="assets/img/icons/purchase1.svg" alt="img" /><span>
                                    Emergency Complaint</span> <span className="menu-arrow"></span></a>
                                <ul>
                                    <li><a href="saleslist.html" className={active === "LEComplaint" ? "active" : ""}>Emergency Complaint List</a></li>
                                    <li><a href="pos.html" className={active === "VEComplaint" ? "active" : ""}>View Emergency Complaint</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="javascript:void(0);"><img src="assets/img/icons/users1.svg" alt="img" /><span>
                                    Users</span> <span className="menu-arrow"></span></a>
                                <ul>
                                    <li><a href="/new-user" className={active === "NUser" ? "active" : ""}>New User </a></li>
                                    <li><a href="/user" className={active === "LUser" ? "active" : ""}>Users List</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="javascript:void(0);"><img src="assets/img/icons/time.svg" alt="img" /><span>
                                    Report</span> <span className="menu-arrow"></span></a>
                                <ul>
                                    <li><a href="purchaseorderreport.html" className={active === "RComplaint" ? "active" : ""}>Complaint details Report</a></li>
                                    <li><a href="inventoryreport.html" className={active === "REComplaint" ? "active" : ""}>Emergency Complaint Report</a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="javascript:void(0);"><img src="assets/img/icons/settings.svg" alt="img" /><span>
                                    Settings</span> <span className="menu-arrow"></span></a>
                                <ul>
                                    <li><a href="grouppermissions.html" className={active === "GPermission" ? "active" : ""}>Group Permissions</a></li>
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