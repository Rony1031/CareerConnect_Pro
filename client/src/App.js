import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CompanyDashboard from "./pages/CompanyDashboard";
import CandidateDashboard from "./pages/CandidateDashboard";
import LoginForm from "./components/auth/LoginForm";
import CompanyForm from "./components/auth/CompanyForm";
import CandidateForm from "./components/auth/CandidateForm";
import api from "./services/api";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogin = async (email, password, userType) => {
    try {
      const response = await api.post("/login", { email, password, userType });
      const { token } = response.data;
      setToken(token);
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <Router>
      <Switch>
        <Route path="/company">
          <CompanyDashboard token={token} />
        </Route>
        <Route path="/candidate">
          <CandidateDashboard token={token} />
        </Route>
        <Route path="/login">
          <LoginForm onLogin={handleLogin} />
        </Route>
        <Route path="/register/company">
          <CompanyForm />
        </Route>
        <Route path="/register/candidate">
          <CandidateForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
