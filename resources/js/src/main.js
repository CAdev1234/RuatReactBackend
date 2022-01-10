import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import Layout from "./components/layout/layout";
import { UserProvider } from "./context/usercontext";

const Main = () => {
  const [logined, setLogined] = React.useState(false)
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    if (user) {setLogined(false)}
    else setLogined(true)
  }, [])
  return (
    <div className="App">
      {!logined && 
        <Routes>
          <Route path="/" element={<LoginPage returnVal={setUser} />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/auth/forgotpassword" element={<ForgotPasswordPage />}/>
        </Routes>
      }
      {logined &&
        <UserProvider user={user}>
          <Layout />
        </UserProvider>
      }
      
    </div>
  );
}

export default Main