import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import { ListaLink, Fhather } from "../assets/styled/Header";
function Header() {
  return (
    <Fhather>
      <Navbar bg="light" expand="lg" className="borde">
        <Container className=" ">
          <Navbar.Brand>
            <Link to="/home">
              <h1>T.A.A</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <ListaLink>
                <ul className="">
                  {navbars.map((navbar) => (
                    <li key={navbar.to}>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? " #66bfbf" : "#333",
                          borderBottom: isActive ? "solid" : "",
                        })}
                        to={navbar.to}
                      >
                        {navbar.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </ListaLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fhather>
  );
}

export { Header };
const navbars = [];
navbars.push({
  to: "/",
  text: "Home",
});
navbars.push({
  to: "/project",
  text: "Project",
});
navbars.push({
  to: "/skills",
  text: "Skills",
});
navbars.push({
  to: "/about",
  text: "About",
});
