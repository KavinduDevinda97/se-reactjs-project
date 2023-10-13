import Complaint from "./pages/Complaint";
import ComplaintDetailsView from "./pages/ComplaintDetailsView";
import Home from "./pages/Home";
import NewUser from "./pages/NewUser";
import User from "./pages/User";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/complaint-details" element={<ComplaintDetailsView />} />
        <Route path="/new-user" element={<NewUser />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
