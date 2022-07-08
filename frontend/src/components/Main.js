import Age from "./contents/Age";
import Major from "./contents/Major";
import Name from "./contents/Name";
import Profile from "./contents/Profile";
import { Routes, Route, Navigate } from "react-router-dom";
import Description from "./contents/Description";

export default function Main() {
  return (
    <div id="main">
      <img
        src="https://c.tenor.com/Fh6neBHNDh4AAAAi/peepoclown.gif"
        alt="pic"
        id="peepo1"
      />
      <img
        src="https://c.tenor.com/rLYacNeincQAAAAi/peepo-clown.gif"
        alt="peepo"
        id="peepo2"
      />
      <img
        src="https://c.tenor.com/_hOeFNfH_58AAAAi/pepe-clown-clown-pepe.gif"
        alt="pepo"
        id="peepo3"
      />
      <img
        src="https://c.tenor.com/Fh6neBHNDh4AAAAi/peepoclown.gif"
        alt="pic"
        id="peepo4"
      />
      <img
        src="https://c.tenor.com/_hOeFNfH_58AAAAi/pepe-clown-clown-pepe.gif"
        alt="pepo"
        id="peepo5"
      />
      <img
        src="https://c.tenor.com/iA1ChE86k_cAAAAi/pepe-peepo.gif"
        alt=""
        id="peepo6"
      />
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
