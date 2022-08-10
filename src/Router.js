
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostCreate } from "./components/post/PostCreate";
import Auth from "./pages/auth/Auth";
import { Home } from "./pages/Home";
import { Page404 } from "./pages/Page404";
import { Profile } from "./pages/Profile";
import { ProfileEdit } from "./pages/ProfileEdit";
import { TextEditor } from "./pages/TextEditor";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='auth' element={<Auth />} />
          <Route path='/editor' element={<TextEditor/>} />
          <Route path='*' element={<Page404 />} />
          <Route path='post/create' element={<PostCreate />} />
          <Route path="profile/edit" element={<ProfileEdit/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;