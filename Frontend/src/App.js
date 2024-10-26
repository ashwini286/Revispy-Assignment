import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import CreateAccount from "./components/createAccount/CreateAccount";
import VerifyEmail from "./components/verifyEmail/VerifyEmail";
import Protected_page from "./components/protectedPage/Protected_page";
import Login from "./components/login/Login";
function App() {
  return (
   <div className="bg-gray-100">
     <Navbar />
    <Routes>
    <Route path="/" element={  <Login />}></Route>
    <Route path="/create-account" element={  <CreateAccount />}></Route>
    <Route path="/verify-email" element={  <VerifyEmail />}></Route>
    <Route path="/protected-page" element={  <Protected_page />}></Route>
    </Routes>
   </div>
  );
}

export default App;
