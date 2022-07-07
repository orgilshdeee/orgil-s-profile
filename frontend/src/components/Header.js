import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="header">
      <Navbar bg="light" expand="lg">
        <Link to="/home" className="nav-link">
          Desciption
        </Link>
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
        <Link to="/major" className="nav-link">
          Major
        </Link>
        <Link to="/name" className="nav-link">
          Name
        </Link>
        <Link to="/age" className="nav-link">
          Age
        </Link>
      </Navbar>
    </div>
  );
}
