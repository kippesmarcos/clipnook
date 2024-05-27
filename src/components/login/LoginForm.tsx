import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./LoginForm.css";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={handleTogglePasswordVisibility}
                className="eye-icon"
              />
            </div>
          </div>
          <div className="input-group">
            <button type="submit">Conectarse</button>
          </div>
        </form>
        <div className="forgot-password">
          <Link to="/">¿Olvidaste tu contraseña?</Link>
        </div>
        <div className="forgot-register">
          <Link to="/register-form">Regístrate</Link>
        </div>
      </div>
  );
};

export default LoginForm;