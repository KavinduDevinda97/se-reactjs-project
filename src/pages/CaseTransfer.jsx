import React from "react";

const CaseTransfer = () => {
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Case Transfer</h4>
            <h6>Manage Cases transfer</h6>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Reference No.</label>
                  <input type="text" defaultValue="RFT/1213456" readOnly/>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Transfering Department Name</label>
                  <select className="form-select">
                    <option>Select Department</option>
                    <option>Maradana Police Station</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Complainer Name</th>
                      <th>Complainer NIC</th>
                      <th>Complainer Address</th>
                      <th>Complaint Subject</th>
                      <th>Complaint Category</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td>Yesh Adithya</td>
                      <td>980329103V</td>
                      <td>Moratu, Sri Lanka</td>
                      <td>Murder case on Moratuwa</td>
                      <td>Murder</td>
                      <td>
                        <span className="badges bg-lightgreen">Ongoing</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Transfer Note</label>
                  <textarea className="form-control"></textarea>
                </div>
              </div>
              <div className="col-lg-12">
                <button type="submit" className="btn btn-submit me-2">
                  Submit
                </button>
                <button ttype="reset" className="btn btn-cancel">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseTransfer;
