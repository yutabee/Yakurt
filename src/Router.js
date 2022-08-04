
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='profile' element={<Profile />} />
          	<Route path="auth" element={<Auth />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;