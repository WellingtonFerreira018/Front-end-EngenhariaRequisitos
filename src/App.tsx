import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GlobalStyle from './styles/global';
import Home from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register'
import Dashboard from './pages/Dashboard';
import RegisterConsultorio from './pages/RegisterCosultorio';
import DashboardConsultorio from './pages/DashboardConsultorio';

function App() {
  return (
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/registerConsultorio' element={<RegisterConsultorio />}/>
          <Route path='/dashboardConsultorio' element={<DashboardConsultorio />}/>
        </Routes>
      </Router>
  );
}

export default App;
