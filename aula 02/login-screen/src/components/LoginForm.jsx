import React from "react";
import "../../src/LoginForm.css";

const LoginForm = () => {
  return (
    <div>
      <h2>Digite seus dados para logar no sistema</h2>
      <form>
        <div>
          <label>E-mail:</label>
          <input className="input" type="email" name="username" />
        </div>
        <div>
          <label>Senha:</label>
          <input className="input" type="password" name="password" />
        </div>
        <button className="button" type="submit">
          Logar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
