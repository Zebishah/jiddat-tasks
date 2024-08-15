import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import Home from "./Modules/Home";

import { ToastContainer } from "react-toastify";
import SignUpPage from "./Modules/SignUpPage";
import SignInPage from "./Modules/SigninPage";

function App() {
  return (
    <div className="w-full h-auto overflow-hidden bg-white ">
      <Router>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/signIn" element={<SignInPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
