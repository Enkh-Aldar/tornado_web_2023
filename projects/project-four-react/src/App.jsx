import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import MainContent from "./components/MainContent";
import FilteredContent from "./components/FilteredContent";
import Login from "./components/Login";
import Register from "./components/Register";
import UserRegister from "./components/userRegister";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<MainContent />} />
          <Route path="/:category" element={<FilteredContent />} />
          <Route path="/postdetail" element={<PostDetail />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userregister" element={<UserRegister />} />
      </Routes>
    </div>
  )
}
export default App;