import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("company"); // Default to company, you can change this based on your needs

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password, userType);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          User Type:
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="company">Company</option>
            <option value="candidate">Candidate</option>
          </select>
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
