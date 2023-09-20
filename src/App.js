import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Dashboardmain from './pages/dashboard/Dashboardmain';

function App() {
  return (
  <BrowserRouter>
  <Routes>
     <Route path="/" element={<Navbar/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/dashboard" element={<Dashboardmain/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
