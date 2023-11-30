import Header from "./components/Header";
import SideBar from "./components/SideBar";
import CaseTransfer from "./pages/CaseTransfer";
import Category from "./pages/Category";
import CategoryNew from "./pages/CategoryNew";
import Complaint from "./pages/Complaint";
import ComplaintDetailsView from "./pages/ComplaintDetailsView";
import CreatePermission from "./pages/CreatePermission";
import Department from "./pages/Department";
import DepartmentNew from "./pages/DepartmentNew";
import EditPermission from "./pages/EditPermission";
import GroupPermissions from "./pages/GroupPermissions";
import Home from "./pages/Home";
import NewUser from "./pages/NewUser";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const currentPath = window.location.pathname;

  // Determine whether to show the Header and SideBar based on the route
  const showHeaderAndSideBar = currentPath !== '/signin';
  return (
    <Router>
      <div id="global-loader">
        <div className="whirly-loader"> </div>
      </div>
      <div className="main-wrapper">
      {showHeaderAndSideBar && <Header />}
        {showHeaderAndSideBar && <SideBar currentPath={currentPath} />}
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/complaint-details" element={<ComplaintDetailsView />} />
        <Route path="/add-category" element={<CategoryNew />} />
        <Route path="/category" element={<Category />} />
        <Route path="/case-transfer" element={<CaseTransfer />} />
        <Route path="/department" element={<Department />} />
        <Route path="/create-department" element={<DepartmentNew />} />
        <Route path="/new-user" element={<NewUser />} />
        <Route path="/user" element={<User />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/permissionsList" element={<GroupPermissions />} />
        <Route path="/edit-permission" element={<EditPermission />} />
        <Route path="/add-permission" element={<CreatePermission />} />
      </Routes>
    </Router>
  );
}

export default App;
