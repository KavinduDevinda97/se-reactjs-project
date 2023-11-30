import React from "react";

const CreatePermission = () => {
  const selectAllItems = "#select-all";

  const handleSelectAll = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    if (document.querySelector(selectAllItems).checked) {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = true;
      });
    } else {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Create Permission</h4>
            <h6>Manage Create Permissions</h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-sm-12">
                <div className="form-group">
                  <label>Role</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-9 col-sm-12">
                <div className="form-group">
                  <label>Role Description</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="input-checkset">
                  <ul>
                    <li>
                      <label className="inputcheck">
                        Select All
                        <input
                          type="checkbox"
                          id="select-all"
                          onClick={handleSelectAll}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="productdetails product-respon">
                  <ul>
                    <li>
                      <h4>Users Management</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>User Permission</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Complaints</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Departments</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Complaint Transfer</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Complaint Category</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Reports</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePermission;
