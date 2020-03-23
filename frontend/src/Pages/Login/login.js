import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <input type="text" />
      <input type="text" />
      <button type="submit">Efetuar o Login</button>

      <Link to="/register">
        <button type="submit">Cadastrar-se</button>
      </Link>
    </div>
  );
};

export default Login;
