import React from "react";
import "./App.css";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/register/RegisterForm"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
      </header>
      <main className="app-main">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={< LoginForm  />} />
        <Route path="/register-form" element={< RegisterForm />} />
        </Routes>
        </BrowserRouter>
      </main>
      <footer className="app-footer">
      </footer>
    </div>
  );
};

export default App;
