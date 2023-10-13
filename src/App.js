import Complaint from "./pages/Complaint";
import ComplaintDetailsView from "./pages/ComplaintDetailsView";
import Home from "./pages/Home";
import NewUser from "./pages/NewUser";
import User from "./pages/User";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/complaint" component={Complaint} />
        <Route path="/complaint-details" component={ComplaintDetailsView} />
        <Route path="/home" component={Home} />
        <Route path="/new-user" component={NewUser} />
        <Route path="/user" component={User} />
      </Switch>
    </Router>
  );
}

export default App;
