import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import Home from "./Modules/Home";

import { ToastContainer } from "react-toastify";
import SignUpPage from "./Modules/SignUpPage";
import SignInPage from "./Modules/SigninPage";
import { AuthProvider } from "./AuthContext";
import AuthLayout from "./Modules/AuthLayout";
import EmployeeLayout from "./Modules/EmployeeLayout";
import EmployeeDashboard from "./Modules/EmployeeDashboard";
import VirtualAssistantLayout from "./Modules/VirtualAssistantLayout";
import VirtualAssistantDashboard from "./Modules/VirtualAssistantDashboard";
import AdminDashboard from "./Modules/AdminDashboard";
import AdminLayout from "./Modules/AdminLayout";

function App() {
  return (
    <div className="w-full h-auto overflow-hidden bg-white ">
      <Router>
        {/* Move AuthProvider inside Router */}
        <AuthProvider>
          <ToastContainer />

          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<SignInPage />} />
              <Route path="signUp" element={<SignUpPage />} />
            </Route>
            <Route path="/EmployeeLayout" element={<EmployeeLayout />}>
              <Route index element={<EmployeeDashboard />} />
            </Route>
            <Route
              path="/VirtualAssistantLayout"
              element={<VirtualAssistantLayout />}
            >
              <Route index element={<VirtualAssistantDashboard />} />
            </Route>
            <Route path="/AdminLayout" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
