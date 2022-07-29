import Age from "./contents/Age";
import Major from "./contents/Major";
import Name from "./contents/Name";
import Profile from "./contents/Profile";
import { Routes, Route, Navigate } from "react-router-dom";
import Description from "./contents/Description";

export default function Main() {
  return (
    <div id="main">
      <div id="peepos">
        <img
          src="http://35.164.143.162:3001/gifs/peepoclown1.gif"
          alt="pic"
          id="peepo1"
        />
        <img
          src="http://35.164.143.162:3001/gifs/peepoclown2.gif"
          alt="peepo"
          id="peepo2"
        />
        <img
          src="http://35.164.143.162:3001/gifs/peepoclown3.gif"
          alt="pepo"
          id="peepo3"
        />
        <img
          src="http://35.164.143.162:3001/gifs/peepoclown4.gif"
          alt="pic"
          id="peepo4"
        />
        <img
          src="http://35.164.143.162:3001/gifs/peepoclown5.gif"
          alt="pepo"
          id="peepo5"
        />
        <img
          src="http://35.164.143.162:3001/gifs/peepoclown6.gif"
          alt=""
          id="peepo6"
        />
      </div>

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
