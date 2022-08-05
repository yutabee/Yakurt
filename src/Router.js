
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import { Home } from "./pages/Home";
import { Page404 } from "./pages/Page404";
import { Profile } from "./pages/Profile";
import { UserEdit } from "./pages/user/UserEdit";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='profile' element={<Profile />} />
            <Route path="auth" element={<Auth />} />
            <Route path='user/edit' element={<UserEdit />} />
            <Route path='*' element={<Page404/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default Router;