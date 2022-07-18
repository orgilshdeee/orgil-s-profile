import { Navbar } from "react-bootstrap";
export default function Footer() {
  return (
    <div id="footer">
      <Navbar
        bg=""
        expand="lg"
        fixed="bottom"
        className="me-5 mb-3 d-flex justify-content-end"
      >
        <div id="contacts" className="d-flex">
          <a href="https://www.facebook.com/orgil.lhagva" className="me-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png"
              alt="fb"
              id="fblogo"
            />
          </a>
          <a href="https://www.instagram.com/orgillhagva/" className="me-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
              alt="ig"
              id="iglogo"
            />
          </a>
          <p style={{ color: "hotpink" }}>+97699336117</p>
        </div>
      </Navbar>
    </div>
  );
}
