import Age from "./contents/Age";
import Major from "./contents/Major";
import Name from "./contents/Name";
import Profile from "./contents/Profile";
import { Routes, Route, Navigate } from "react-router-dom";
import Description from "./contents/Description";

export default function Main() {
  return (
    <div id="main">
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="home" element={<Description />} />
        <Route path="/name" element={<Name />} />
        <Route path="/age" element={<Age />} />
        <Route path="/major" element={<Major />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
