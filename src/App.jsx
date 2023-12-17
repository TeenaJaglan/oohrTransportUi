import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AvailableDrivers from "./pages/AvailableDrivers";
import SigninPage from "./pages/SigninPage";
import LoginPage from "./pages/Loginpage";
// import Child from "./pages/Child_detail";

import PrivateRoute from "./routes/PrivateRoute";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Contact from "./pages/Contact";
import Driver from "./pages/Driver";
import Parent from "./pages/Parent";
import Notification from "./pages/Notification";
import Otp from "./pages/otp";
const App = () => {
  const { loggedin } = useContext(AuthContext);
  console.log(loggedin);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<SigninPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/SigninPage" element={<SigninPage />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/driver_detail" element={<Driver />} />
        <Route exact path="/parent_detail" element={<Parent />} />
        <Route path="/otp" element={<Otp />} />
        <Route exact path="/notification" element={<Notification />} />

        <Route
          exact
          path="/available-drivers"
          element={
            <PrivateRoute loggedin={loggedin}>
              <AvailableDrivers />
            </PrivateRoute>
          }
        />

        {/* <Route path="available" element={<AvailableDrivers/>}/> */}

        <Route exact path="/LoginPage" element={<LoginPage />} />
        {/* <Route path="/child" element={<Child/>} /> */}
      </Routes>
    </div>
  );
};

export default App;
