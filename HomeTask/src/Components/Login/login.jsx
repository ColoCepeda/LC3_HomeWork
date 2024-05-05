import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [validUsernames, setValidUsernames] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    if (value.toLowerCase().includes("o")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    } else {
      setUsername(value);
    }
  };

  const handleRegister = () => {
    if (username.trim() === "") {
      alert("Usuario inválido para registrarse");
      return;
    }

    setValidUsernames((prevUsernames) => [...prevUsernames, username]);
    setUsername("");
    alert("Usuario registrado correctamente!");
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Ingrese un nombre de usuario"
      />
      <button onClick={handleRegister}>Registrarse</button>
      <div>
        {validUsernames.length > 0 && (
          <div>
            <h3>Usuarios registrados:</h3>
            <ul>
              {validUsernames.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
