/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="header">

                <div className="header-left active">
                    <a href="index.html" className="logo">
                        <img src="assets/img/logo.png" alt="" />
                    </a>
                    <a href="index.html" className="logo-small">
                        <img src="logo.png" alt="" />
                    </a>
                    <a id="toggle_btn">
                    </a>
                </div>

                <a id="mobile_btn" className="mobile_btn" href="#sidebar">
                    <span className="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>

                <ul className="nav user-menu">

                    <li className="nav-item dropdown has-arrow main-drop">
                        <a className="dropdown-toggle nav-link userset" data-bs-toggle="dropdown">
                            <span className="user-img"><img src="assets/img/profiles/avator1.jpg" alt="" />
                                <span className="status online"></span></span>
                        </a>
                        <div className="dropdown-menu menu-drop-user">
                            <div className="profilename">
                                <div className="profileset">
                                    <span className="user-img"><img src="assets/img/profiles/avator1.jpg" alt="" />
                                        <span className="status online"></span></span>
                                    <div className="profilesets">
                                        <h6>K V Frenando</h6>
                                        <h5>Super Admin</h5>
                                    </div>
                                </div>
                                <hr className="m-0" />
                                <hr className="m-0" />
                                <Link to="/signin" className="dropdown-item logout pb-0"><img
                                    src="assets/img/icons/log-out.svg" className="me-2" alt="img" />Logout</Link>
                            </div>
                        </div>
                    </li>
                </ul>


                <div className="dropdown mobile-user-menu">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <Link to="/signin" className="dropdown-item" href="signin.html">Logout</Link>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Header