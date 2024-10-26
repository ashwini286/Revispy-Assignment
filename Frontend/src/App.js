import Navbar from "./components/navbar/Navbar";
import CreateAccount from "./components/createAccount/CreateAccount";
import VerifyEmail from "./components/verifyEmail/VerifyEmail";
import Protected_page from "./components/protectedPage/Protected_page";
function App() {
  return (
   <>
   <Navbar />
   <CreateAccount />
   <VerifyEmail />
   <Protected_page />
   </>
  );
}

export default App;
