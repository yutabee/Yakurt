
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostCreate } from "./components/post/PostCreate";
import Auth from "./components/pages/auth/Auth";
import { Home } from "./components/pages/Home";
import { Page404 } from "./components/pages/Page404";
import { Profile } from "./components/pages/Profile";
import { ProfileEdit } from "./components/pages/ProfileEdit";
import { TextEditor } from "./components/pages/TextEditor";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='auth' element={<Auth />} />
          <Route path='/editor' element={<TextEditor/>} />
          <Route path='post/create' element={<PostCreate />} />
          <Route path="profile/edit" element={<ProfileEdit />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;