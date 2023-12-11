import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import MainContent from "./components/MainContent";
import FilteredContent from "./components/FilteredContent";
import FilteredProfile from "./components/FilteredProfile";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<MainContent />} />
          <Route path="/:category" element={<FilteredContent />} />
          <Route path="/posts/:posts" element={<FilteredProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App;
