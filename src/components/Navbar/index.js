import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Logo from "../../images/logo.png";
import { BsFillPeopleFill } from "react-icons/bs";
import { useNavigate } from "react-router";

const EcoNavbar = () => {
  const [page, setPage] = useState("/");
  const [color, setColor] = useState(false);
  const navigate = useNavigate();
  const onColorChange = () => {
    if (window.scrollY >= 30) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const onAboutUsClick = () => {
    navigate("/aboutUs", { replace: false });
  };

  const onLatestNewsClick = () => {
    navigate("/latestNews", { replace: false });
  };

  const onMemberIntroClick = () => {
    navigate("/memberIntro", { replace: false });
  };

  const onWorkshopClick = () => {
    navigate("/workshop", { replace: false });
  };

  const onContactUsClick = () => {
    navigate("/contactUs", { replace: false });
  };

  const onSugnUpIconClick = () => {
    navigate("/signup", { replace: false });
  };

  const onLoginIconClick = () => {
    navigate("/login", { replace: false });
  };

  const onLogoClick = () => {
    navigate("/", { replace: false });
  };

  window.addEventListener("scroll", onColorChange);

  return (
    <div className={color ? "nav-container-scroll" : "nav-container"}>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand className="nav-eco-container" onClick={onLogoClick}>
            <Image src={Logo} className="nav-eco-logo" />
            <div className="nav-eco-title">台灣原生態協會</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="nav-eco-tab">
            <Nav
              className="my-2 my-lg-0 nav-eco-link"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link onClick={onAboutUsClick}>認識原生態</Nav.Link>
              <Nav.Link onClick={onLatestNewsClick}>最新消息</Nav.Link>
              <Nav.Link onClick={onMemberIntroClick}>成員介紹</Nav.Link>
              <Nav.Link onClick={onWorkshopClick}>工坊進度</Nav.Link>
              <Nav.Link onClick={onContactUsClick}>聯絡我們</Nav.Link>
              <NavDropdown
                title={<BsFillPeopleFill />}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item onClick={onLoginIconClick}>
                  登入
                </NavDropdown.Item>
                <NavDropdown.Item onClick={onSugnUpIconClick}>
                  註冊會員
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default EcoNavbar;
