import React from 'react'
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const ComplaintDetailsView = () => {
    const customDivStyle = {
        maxWidth: '1600px',
        width: '100%',
        overflow: 'auto',
        margin: '15px auto',
        padding: '0',
        fontSize: '14px',
        lineHeight: '24px',
        color: '#555',
    };

    const tableStyle = {
        width: '100%',
        lineHeight: 'inherit',
        textAlign: 'left',
    };

    const topRowStyle = {
        padding: '5px',
        verticalAlign: 'top',
    };

    const infoStyle = {
        marginBottom: '25px',
        fontSize: '14px',
        color: '#7367F0',
        fontWeight: '600',
        lineHeight: '35px',
    };

    const textStyle = {
        fontSize: '14px',
        color: '#000',
        fontWeight: '400',
    };

    const detailsRowStyle = {
        borderBottom: '1px solid #E9ECEF',
    };

    return (
        <>
            <div className="main-wrapper">
                <Header />
                <SideBar active={"VComplaint"}/>
                <div className="page-wrapper">
                    <div className="content">
                        <div className="page-header">
                            <div className="page-title">
                                <h4>Sale Details</h4>
                                <h6>View sale details</h6>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-sales-split">
                                    <h2>Sale Detail : SL0101</h2>
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0);"><img src="assets/img/icons/edit.svg" alt="img" /></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"><img src="assets/img/icons/pdf.svg" alt="img" /></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"><img src="assets/img/icons/excel.svg" alt="img" /></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"><img src="assets/img/icons/printer.svg" alt="img" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="invoice-box table-height" style={customDivStyle}>
                                    <table cellPadding="0" cellSpacing="0" style={tableStyle}>
                                        <tbody>
                                            <tr className="top" style={topRowStyle}>
                                                <td colSpan="6" style={topRowStyle}>
                                                    <table style={tableStyle}>
                                                        <tbody>
                                                            <tr>
                                                                <td style={topRowStyle}>
                                                                    <div style={infoStyle}>Customer Info</div>
                                                                    <div style={textStyle}>walk-in-customer</div>
                                                                    <div style={textStyle}><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="3a4d5b565117535417594f494e55575f487a5f425b574a565f14595557">[email&#160;protected]</a></div>
                                                                    <div style={textStyle}>123456780</div>
                                                                    <div style={textStyle}>N45, Dhaka</div>
                                                                </td>
                                                                <td style={topRowStyle}>
                                                                    <div style={infoStyle}>Company Info</div>
                                                                    <div style={textStyle}>DGT</div>
                                                                    <div style={textStyle}><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9ffefbf2f6f1dffae7fef2eff3fab1fcf0f2">[email&#160;protected]</a></div>
                                                                    <div style={textStyle}>6315996770</div>
                                                                    <div style={textStyle}>3618 Abia Martin Drive</div>
                                                                </td>
                                                                <td style={topRowStyle}>
                                                                    <div style={infoStyle}>Invoice Info</div>
                                                                    <div style={textStyle}>Reference</div>
                                                                    <div style={textStyle}>Payment Status</div>
                                                                    <div style={textStyle}>Status</div>
                                                                </td>
                                                                <td style={topRowStyle}>
                                                                    <div style={infoStyle}>&nbsp;</div>
                                                                    <div style={textStyle}>SL0101</div>
                                                                    <div style={{ ...textStyle, color: '#2E7D32' }}>Paid</div>
                                                                    <div style={{ ...textStyle, color: '#2E7D32' }}>Completed</div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr className="heading" style={{ background: '#F3F2F7' }}>
                                                <td style={{ ...topRowStyle, fontWeight: '600', color: '#5E5873', fontSize: '14px', padding: '10px' }}>Product Name</td>
                                                <td style={{ ...topRowStyle, fontWeight: '600', color: '#5E5873', fontSize: '14px', padding: '10px' }}>QTY</td>
                                                <td style={{ ...topRowStyle, fontWeight: '600', color: '#5E5873', fontSize: '14px', padding: '10px' }}>Price</td>
                                                <td style={{ ...topRowStyle, fontWeight: '600', color: '#5E5873', fontSize: '14px', padding: '10px' }}>Discount</td>
                                                <td style={{ ...topRowStyle, fontWeight: '600', color: '#5E5873', fontSize: '14px', padding: '10px' }}>TAX</td>
                                                <td style={{ ...topRowStyle, fontWeight: '600', color: '#5E5873', fontSize: '14px', padding: '10px' }}>Subtotal</td>
                                            </tr>
                                            <tr className="details" style={detailsRowStyle}>
                                                <td style={{ ...topRowStyle, padding: '10px', display: 'flex', alignItems: 'center' }}>
                                                    <img src="assets/img/product/product1.jpg" alt="img" className="me-2" style={{ width: '40px', height: '40px' }} />
                                                    Macbook pro
                                                </td>
                                                <td style={{ ...topRowStyle, padding: '10px' }}>1.00</td>
                                                <td style={{ ...topRowStyle, padding: '10px' }}>1500.00</td>
                                                <td style={{ ...topRowStyle, padding: '10px' }}>0.00</td>
                                                <td style={{ ...topRowStyle, padding: '10px' }}>0.00</td>
                                                <td style={{ ...topRowStyle, padding: '10px' }}>1500.00</td>
                                            </tr>
                                            <tr className="details" style={detailsRowStyle}>
                                                <td style={{ ...topRowStyle, padding: '10px', display: 'flex', alignItems: 'center' }}>
                                                    <img src="assets/img/product/product7.jpg" alt="img" className="me-2" style={{ width: '40px', height: '40px' }} />
                                                    Apple Earpods
                                                </td>
                                                <td style={{ ...topRowStyle, padding: '10px' }}>1.00</td>
                                                <td style={{ ...topRowStyle, padding: '10px' }}>2000.00</td>
                                                <td style={{ ...topRowStyle, padding: '10px' }}>0.00</td>
                                                <td style={{ ...topRowStyle, padding: '10px' }}>0.00</td>
                                                <td style={{ ...topRowStyle, padding: '10px' }}>1500.00</td>
                                            </tr>
                                            <tr className="details" style={detailsRowStyle}>
                                                <td style={{ ...topRowStyle, padding: '10px', display: 'flex', alignItems: 'center' }}>
                                                    <img src="assets/img/product/product8.jpg" alt="img" className="me-2" style={{ width: '40px', height: '40px' }} />
                                                    samsung
                                                </td>
                                                <td style={{ ...topRowStyle, padding: '10px' }}>1.00</td>
                                                <td style={{ ...topRowStyle, padding: '10px' }}>8000.00</td>
                                                <td style={{ ...topRowStyle, padding: '10px' }}>0.00</td>
                                                <td style={{ ...topRowStyle, padding: '10px' }}>0.00</td>
                                                <td style={{ ...topRowStyle, padding: '10px' }}>1500.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Order Tax</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Discount</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Shipping</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label>Status</label>
                                            <select className="form-select">
                                                <option>Choose Status</option>
                                                <option>Completed</option>
                                                <option>Inprogress</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 ">
                                            <div className="total-order w-100 max-widthauto m-auto mb-4">
                                                <ul>
                                                    <li>
                                                        <h4>Order Tax</h4>
                                                        <h5>$ 0.00 (0.00%)</h5>
                                                    </li>
                                                    <li>
                                                        <h4>Discount </h4>
                                                        <h5>$ 0.00</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 ">
                                            <div className="total-order w-100 max-widthauto m-auto mb-4">
                                                <ul>
                                                    <li>
                                                        <h4>Shipping</h4>
                                                        <h5>$ 0.00</h5>
                                                    </li>
                                                    <li className="total">
                                                        <h4>Grand Total</h4>
                                                        <h5>$ 0.00</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <a href="javascript:void(0);" className="btn btn-submit me-2">Update</a>
                                        <a href="javascript:void(0);" className="btn btn-cancel">Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComplaintDetailsView;