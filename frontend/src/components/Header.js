import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const [style, setStyle] = useState({
    des: { color: "blueviolet" },
    prof: { color: "black" },
    major: { color: "black" },
    name: { color: "black" },
    age: { color: "black" },
  });

  return (
    <div id="header" className="w-100">
      <Navbar bg="light" id="navbar">
        <Link
          to="/home"
          className="nav-link ms-5"
          id="des"
          style={style.des}
          onClick={() => {
            setStyle({
              des: { color: "blueviolet" },
              prof: { color: "black" },
              major: { color: "black" },
              name: { color: "black" },
              age: { color: "black" },
            });
          }}
        >
          Desciption
        </Link>
        <Link
          to="/profile"
          className="nav-link ms-3"
          id="profile0"
          style={style.prof}
          onClick={() => {
            setStyle({
              des: { color: "black" },
              prof: { color: "blueviolet" },
              major: { color: "black" },
              name: { color: "black" },
              age: { color: "black" },
            });
          }}
        >
          Profile
        </Link>
        <Link
          to="/major"
          className="nav-link ms-3"
          id="major0"
          style={style.major}
          onClick={() => {
            setStyle({
              des: { color: "black" },
              prof: { color: "black" },
              major: { color: "blueviolet" },
              name: { color: "black" },
              age: { color: "black" },
            });
          }}
        >
          Major
        </Link>
        <Link
          to="/name"
          className="nav-link ms-3"
          id="name0"
          style={style.name}
          onClick={() => {
            setStyle({
              des: { color: "black" },
              prof: { color: "black" },
              major: { color: "black" },
              name: { color: "blueviolet" },
              age: { color: "black" },
            });
          }}
        >
          Name
        </Link>
        <Link
          to="/age"
          className="nav-link ms-3"
          id="age0"
          style={style.age}
          onClick={() => {
            setStyle({
              des: { color: "black" },
              prof: { color: "black" },
              major: { color: "black" },
              name: { color: "black" },
              age: { color: "blueviolet" },
            });
          }}
        >
          Age
        </Link>
      </Navbar>
    </div>
  );
}
