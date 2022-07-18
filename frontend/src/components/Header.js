import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  const [style, setStyle] = useState({
    des: { color: "blueviolet" },
    prof: { color: "deeppink" },
    major: { color: "deeppink" },
    name: { color: "deeppink" },
    age: { color: "deeppink" },
  });

  return (
    <div id="header" className="w-100">
      <Navbar bg="" id="navbar">
        <Link
          to="/home"
          className="nav-link ms-5"
          id="des"
          style={style.des}
          onClick={() => {
            setStyle({
              des: { color: "blueviolet" },
              prof: { color: "deeppink" },
              major: { color: "deeppink" },
              name: { color: "deeppink" },
              age: { color: "deeppink" },
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
              des: { color: "deeppink" },
              prof: { color: "blueviolet" },
              major: { color: "deeppink" },
              name: { color: "deeppink" },
              age: { color: "deeppink" },
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
              des: { color: "deeppink" },
              prof: { color: "deeppink" },
              major: { color: "blueviolet" },
              name: { color: "deeppink" },
              age: { color: "deeppink" },
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
              des: { color: "deeppink" },
              prof: { color: "deeppink" },
              major: { color: "deeppink" },
              name: { color: "blueviolet" },
              age: { color: "deeppink" },
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
              des: { color: "deeppink" },
              prof: { color: "deeppink" },
              major: { color: "deeppink" },
              name: { color: "deeppink" },
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
