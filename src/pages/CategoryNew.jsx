/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const CategoryNew = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Complaint Category Management</h4>
              <h6>Add/Update Complaint</h6>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Complaint Name</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <a href="javascript:void(0);" className="btn btn-submit me-2">
                    Submit
                  </a>
                  <a href="javascript:void(0);" className="btn btn-cancel">
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryNew;
