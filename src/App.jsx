import './assets/css/App.css'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import isLogin from './lib/authorization'
import SecureRoute from './lib/SecureRoute'
import Portfolio from './pages/Portfolio/Portfolio';
import EducationAdmin from './pages/EducationAdmin';
import SingleEducation from './pages/SingleEducation';

function App() {
  
  const [isLogged, setIsLogged] = useState(isLogin)
  const login = useSelector((state) => state.auth.isLogin)
  
  useEffect(() => {
    setIsLogged(isLogin)
  }, [login])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<Portfolio />} />
          <Route path="/education" exact element={<EducationAdmin />} />
          <Route path="/education/:educationId" element={<SingleEducation />} />
          {/* <SecureRoute path="/education" exact component={EducationAdmin}></SecureRoute> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
