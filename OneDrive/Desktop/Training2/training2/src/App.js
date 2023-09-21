import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; 
import CompanyList from './components/company/CompanyList';
import UserList from './components/Users/UserList';
import CompanyDetail from './components/company/CompanyDetail';
import UserDetail from './components/Users/UserDetail';
import AddCompany from './components/AddCompany';
import AddUser from './components/Users/AddUser';
import Sidebar from './components/Sidebar';
import EditD from './components/EditD';
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/companyList" element={<CompanyList/>}/>
        <Route path="/userList" element={<UserList/>}/>
        <Route path="/companyDetail" element={<CompanyDetail/>}/>
        <Route path="/userDetail" element={<UserDetail/>}/>
        <Route path="/addCompany" element={<AddCompany/>}/>
        <Route path="/addUser" element={<AddUser/>}/>
        <Route path="/sidebar" element={<Sidebar/>}/>
        <Route path="/editD" element={<EditD/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;
