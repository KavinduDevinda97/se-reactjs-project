import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const User = () => {
    return (
        <>
            <div id="global-loader">
                <div className="whirly-loader"> </div>
            </div>

            <div className="main-wrapper">

                <Header/>
                <SideBar active={"LUser"}/>


               

                <div className="page-wrapper">
                    <div className="content">
                        <div className="page-header">
                            <div className="page-title">
                                <h4>User List</h4>
                                <h6>Manage your User</h6>
                            </div>
                            <div className="page-btn">
                                <a href="newuser.html" className="btn btn-added"><img src="assets/img/icons/plus.svg" alt="img"/>Add
                                    User</a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="table-top">
                                    <div className="search-set">
                                        <div className="search-path">
                                            <a className="btn btn-filter" id="filter_search">
                                                <img src="assets/img/icons/filter.svg" alt="img"/>
                                                    <span><img src="assets/img/icons/closes.svg" alt="img"/></span>
                                            </a>
                                        </div>
                                        <div className="search-input">
                                            <a className="btn btn-searchset"><img src="assets/img/icons/search-white.svg"
                                                alt="img"/></a>
                                        </div>
                                    </div>
                                    <div className="wordset">
                                        <ul>
                                            <li>
                                                <a data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img
                                                    src="assets/img/icons/pdf.svg" alt="img"/></a>
                                            </li>
                                            <li>
                                                <a data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img
                                                    src="assets/img/icons/excel.svg" alt="img"/></a>
                                            </li>
                                            <li>
                                                <a data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img
                                                    src="assets/img/icons/printer.svg" alt="img"/></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card" id="filter_inputs">
                                    <div className="card-body pb-0">
                                        <div className="row">
                                            <div className="col-lg-2 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <input type="text" placeholder="Enter User Name"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <input type="text" placeholder="Enter Phone"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <input type="text" placeholder="Enter Email"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <input type="text" className="datetimepicker cal-icon"
                                                        placeholder="Choose Date"/>
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
                                                    <a className="btn btn-filters ms-auto"><img
                                                        src="assets/img/icons/search-whites.svg" alt="img"/></a>
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
                                                        <input type="checkbox"/>
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
                                                        <input type="checkbox"/>
                                                            <span className="checkmarks"></span>
                                                    </label>
                                                </td>
                                                <td>Thomas</td>
                                                <td>+12163547758 </td>
                                                <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                                    data-cfemail="fb8f9394969a88bb9e839a968b979ed5989496">[email&#160;protected]</a>
                                                </td>
                                                <td>Admin </td>
                                                <td>3/15/2022</td>
                                                <td><span className="bg-lightgreen badges">Active</span></td>
                                                <td>
                                                    <a className="me-3" href="newuseredit.html">
                                                        <img src="assets/img/icons/edit.svg" alt="img"/>
                                                    </a>
                                                    <a className="me-3 confirm-text" href="javascript:void(0);">
                                                        <img src="assets/img/icons/delete.svg" alt="img"/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="checkboxs">
                                                        <input type="checkbox"/>
                                                            <span className="checkmarks"></span>
                                                    </label>
                                                </td>
                                                <td>504Benjamin</td>
                                                <td>123-456-888</td>
                                                <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                                    data-cfemail="60031513140f0d0512200518010d100c054e030f0d">[email&#160;protected]</a>
                                                </td>
                                                <td>Manager </td>
                                                <td>2/27/2022</td>
                                                <td><span className="bg-lightred badges">Restricted</span></td>
                                                <td>
                                                    <a className="me-3" href="newuseredit.html">
                                                        <img src="assets/img/icons/edit.svg" alt="img"/>
                                                    </a>
                                                    <a className="me-3 confirm-text" href="javascript:void(0);">
                                                        <img src="assets/img/icons/delete.svg" alt="img"/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="checkboxs">
                                                        <input type="checkbox"/>
                                                            <span className="checkmarks"></span>
                                                    </label>
                                                </td>
                                                <td>James 524</td>
                                                <td>+12163547758 </td>
                                                <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                                    data-cfemail="a0cac1cdc5d3e0c5d8c1cdd0ccc58ec3cfcd">[email&#160;protected]</a>
                                                </td>
                                                <td>Salesman </td>
                                                <td>2/27/2022</td>
                                                <td><span className="bg-lightred badges">Restricted</span></td>
                                                <td>
                                                    <a className="me-3" href="newuseredit.html">
                                                        <img src="assets/img/icons/edit.svg" alt="img"/>
                                                    </a>
                                                    <a className="me-3 confirm-text" href="javascript:void(0);">
                                                        <img src="assets/img/icons/delete.svg" alt="img"/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="checkboxs">
                                                        <input type="checkbox"/>
                                                            <span className="checkmarks"></span>
                                                    </label>
                                                </td>
                                                <td>James 524</td>
                                                <td>+12163547758 </td>
                                                <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                                    data-cfemail="94fef5f9f1e7d4f1ecf5f9e4f8f1baf7fbf9">[email&#160;protected]</a>
                                                </td>
                                                <td>Salesman </td>
                                                <td>2/27/2022</td>
                                                <td><span className="bg-lightred badges">Restricted</span></td>
                                                <td>
                                                    <a className="me-3" href="newuseredit.html">
                                                        <img src="assets/img/icons/edit.svg" alt="img"/>
                                                    </a>
                                                    <a className="me-3 confirm-text" href="javascript:void(0);">
                                                        <img src="assets/img/icons/delete.svg" alt="img"/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="checkboxs">
                                                        <input type="checkbox"/>
                                                            <span className="checkmarks"></span>
                                                    </label>
                                                </td>
                                                <td>Bruklin2022</td>
                                                <td>123-456-888</td>
                                                <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                                    data-cfemail="d4b6a6a1bfb8bdba94b1acb5b9a4b8b1fab7bbb9">[email&#160;protected]</a>
                                                </td>
                                                <td>Delivery Biker </td>
                                                <td>2/27/2022</td>
                                                <td><span className="bg-lightgreen badges">Active</span></td>
                                                <td>
                                                    <a className="me-3" href="newuseredit.html">
                                                        <img src="assets/img/icons/edit.svg" alt="img"/>
                                                    </a>
                                                    <a className="me-3 confirm-text" href="javascript:void(0);">
                                                        <img src="assets/img/icons/delete.svg" alt="img"/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="checkboxs">
                                                        <input type="checkbox"/>
                                                            <span className="checkmarks"></span>
                                                    </label>
                                                </td>
                                                <td>BeverlyWIN25</td>
                                                <td>+12163547758 </td>
                                                <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                                    data-cfemail="6e0c1c1b050207002e0b160f031e020b400d0103">[email&#160;protected]</a>
                                                </td>
                                                <td>Delivery Biker </td>
                                                <td>2/27/2022</td>
                                                <td><span className="bg-lightgreen badges">Active</span></td>
                                                <td>
                                                    <a className="me-3" href="newuseredit.html">
                                                        <img src="assets/img/icons/edit.svg" alt="img"/>
                                                    </a>
                                                    <a className="me-3 confirm-text" href="javascript:void(0);">
                                                        <img src="assets/img/icons/delete.svg" alt="img"/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="checkboxs">
                                                        <input type="checkbox"/>
                                                            <span className="checkmarks"></span>
                                                    </label>
                                                </td>
                                                <td>BHR256</td>
                                                <td>123-456-888</td>
                                                <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                                    data-cfemail="d098a5b2b5a290b5a8b1bda0bcb5feb3bfbd">[email&#160;protected]</a>
                                                </td>
                                                <td>Sales Executive</td>
                                                <td>3/15/2022</td>
                                                <td><span className="bg-lightgreen badges">Active</span></td>
                                                <td>
                                                    <a className="me-3" href="newuseredit.html">
                                                        <img src="assets/img/icons/edit.svg" alt="img"/>
                                                    </a>
                                                    <a className="me-3 confirm-text" href="javascript:void(0);">
                                                        <img src="assets/img/icons/delete.svg" alt="img"/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="checkboxs">
                                                        <input type="checkbox"/>
                                                            <span className="checkmarks"></span>
                                                    </label>
                                                </td>
                                                <td>Thomas</td>
                                                <td>+12163547758 </td>
                                                <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                                    data-cfemail="c5b1adaaa8a4b685a0bda4a8b5a9a0eba6aaa8">[email&#160;protected]</a>
                                                </td>
                                                <td>Admin </td>
                                                <td>3/15/2022</td>
                                                <td><span className="bg-lightgreen badges">Active</span></td>
                                                <td>
                                                    <a className="me-3" href="newuseredit.html">
                                                        <img src="assets/img/icons/edit.svg" alt="img"/>
                                                    </a>
                                                    <a className="me-3 confirm-text" href="javascript:void(0);">
                                                        <img src="assets/img/icons/delete.svg" alt="img"/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="checkboxs">
                                                        <input type="checkbox"/>
                                                            <span className="checkmarks"></span>
                                                    </label>
                                                </td>
                                                <td>504Benjamin</td>
                                                <td>123-456-888</td>
                                                <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                                    data-cfemail="62011711160d0f071022071a030f120e074c010d0f">[email&#160;protected]</a>
                                                </td>
                                                <td>Manager </td>
                                                <td>2/27/2022</td>
                                                <td><span className="bg-lightred badges">Restricted</span></td>
                                                <td>
                                                    <a className="me-3" href="newuseredit.html">
                                                        <img src="assets/img/icons/edit.svg" alt="img"/>
                                                    </a>
                                                    <a className="me-3 confirm-text" href="javascript:void(0);">
                                                        <img src="assets/img/icons/delete.svg" alt="img"/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="checkboxs">
                                                        <input type="checkbox"/>
                                                            <span className="checkmarks"></span>
                                                    </label>
                                                </td>
                                                <td>James 524</td>
                                                <td>+12163547758 </td>
                                                <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                                    data-cfemail="274d464a425467425f464a574b420944484a">[email&#160;protected]</a>
                                                </td>
                                                <td>Salesman </td>
                                                <td>2/27/2022</td>
                                                <td><span className="bg-lightred badges">Restricted</span></td>
                                                <td>
                                                    <a className="me-3" href="newuseredit.html">
                                                        <img src="assets/img/icons/edit.svg" alt="img"/>
                                                    </a>
                                                    <a className="me-3 confirm-text" href="javascript:void(0);">
                                                        <img src="assets/img/icons/delete.svg" alt="img"/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="checkboxs">
                                                        <input type="checkbox"/>
                                                            <span className="checkmarks"></span>
                                                    </label>
                                                </td>
                                                <td>James 524</td>
                                                <td>+12163547758 </td>
                                                <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                                    data-cfemail="e48e85898197a4819c8589948881ca878b89">[email&#160;protected]</a>
                                                </td>
                                                <td>Salesman </td>
                                                <td>2/27/2022</td>
                                                <td><span className="bg-lightred badges">Restricted</span></td>
                                                <td>
                                                    <a className="me-3" href="newuseredit.html">
                                                        <img src="assets/img/icons/edit.svg" alt="img"/>
                                                    </a>
                                                    <a className="me-3 confirm-text" href="javascript:void(0);">
                                                        <img src="assets/img/icons/delete.svg" alt="img"/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="checkboxs">
                                                        <input type="checkbox"/>
                                                            <span className="checkmarks"></span>
                                                    </label>
                                                </td>
                                                <td>Bruklin2022</td>
                                                <td>123-456-888</td>
                                                <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                                    data-cfemail="3b59494e505752557b5e435a564b575e15585456">[email&#160;protected]</a>
                                                </td>
                                                <td>Delivery Biker </td>
                                                <td>2/27/2022</td>
                                                <td><span className="bg-lightgreen badges">Active</span></td>
                                                <td>
                                                    <a className="me-3" href="newuseredit.html">
                                                        <img src="assets/img/icons/edit.svg" alt="img"/>
                                                    </a>
                                                    <a className="me-3 confirm-text" href="javascript:void(0);">
                                                        <img src="assets/img/icons/delete.svg" alt="img"/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="checkboxs">
                                                        <input type="checkbox"/>
                                                            <span className="checkmarks"></span>
                                                    </label>
                                                </td>
                                                <td>BeverlyWIN25</td>
                                                <td>+12163547758 </td>
                                                <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                                    data-cfemail="52302027393e3b3c12372a333f223e377c313d3f">[email&#160;protected]</a>
                                                </td>
                                                <td>Delivery Biker </td>
                                                <td>2/27/2022</td>
                                                <td><span className="bg-lightgreen badges">Active</span></td>
                                                <td>
                                                    <a className="me-3" href="newuseredit.html">
                                                        <img src="assets/img/icons/edit.svg" alt="img"/>
                                                    </a>
                                                    <a className="me-3 confirm-text" href="javascript:void(0);">
                                                        <img src="assets/img/icons/delete.svg" alt="img"/>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="checkboxs">
                                                        <input type="checkbox"/>
                                                            <span className="checkmarks"></span>
                                                    </label>
                                                </td>
                                                <td>BHR256</td>
                                                <td>123-456-888</td>
                                                <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__"
                                                    data-cfemail="1b536e797e695b7e637a766b777e35787476">[email&#160;protected]</a>
                                                </td>
                                                <td>Sales Executive</td>
                                                <td>3/15/2022</td>
                                                <td><span className="bg-lightgreen badges">Active</span></td>
                                                <td>
                                                    <a className="me-3" href="newuseredit.html">
                                                        <img src="assets/img/icons/edit.svg" alt="img"/>
                                                    </a>
                                                    <a className="me-3 confirm-text" href="javascript:void(0);">
                                                        <img src="assets/img/icons/delete.svg" alt="img"/>
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
            </div>


            <div className="modal fade" id="showpayment" tabindex="-1" aria-labelledby="showpayment" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Show Payments</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">×</span></button>
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
                                                    <img src="assets/img/icons/printer.svg" alt="img"/>
                                                </a>
                                                <a className="me-2" href="javascript:void(0);" data-bs-target="#editpayment"
                                                    data-bs-toggle="modal" data-bs-dismiss="modal">
                                                    <img src="assets/img/icons/edit.svg" alt="img"/>
                                                </a>
                                                <a className="me-2 confirm-text" href="javascript:void(0);">
                                                    <img src="assets/img/icons/delete.svg" alt="img"/>
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


            <div className="modal fade" id="createpayment" tabindex="-1" aria-labelledby="createpayment" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create Payment</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">×</span></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 col-12">
                                    <div className="form-group">
                                        <label>Customer</label>
                                        <div className="input-group">
                                            <input type="text" value="2022-03-07" className="datetimepicker"/>
                                                <a className="scanner-set input-group-text">
                                                    <img src="assets/img/icons/datepicker.svg" alt="img"/>
                                                </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-12">
                                    <div className="form-group">
                                        <label>Reference</label>
                                        <input type="text" value="INV/SL0101"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-12">
                                    <div className="form-group">
                                        <label>Received Amount</label>
                                        <input type="text" value="1500.00"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-12">
                                    <div className="form-group">
                                        <label>Paying Amount</label>
                                        <input type="text" value="1500.00"/>
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
                            <button type="button" className="btn btn-submit">Submit</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="editpayment" tabindex="-1" aria-labelledby="editpayment" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Payment</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">×</span></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 col-12">
                                    <div className="form-group">
                                        <label>Customer</label>
                                        <div className="input-group">
                                            <input type="text" value="2022-03-07" className="datetimepicker"/>
                                                <a className="scanner-set input-group-text">
                                                    <img src="assets/img/icons/datepicker.svg" alt="img"/>
                                                </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-12">
                                    <div className="form-group">
                                        <label>Reference</label>
                                        <input type="text" value="INV/SL0101"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-12">
                                    <div className="form-group">
                                        <label>Received Amount</label>
                                        <input type="text" value="1500.00"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-12">
                                    <div className="form-group">
                                        <label>Paying Amount</label>
                                        <input type="text" value="1500.00"/>
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
                            <button type="button" className="btn btn-submit">Submit</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User