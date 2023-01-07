import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Navbar, Button, Nav, NavDropdown } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  return (
    <Navbar style={{ backgroundColor: "#333" }}>
      <Container>
        <Navbar.Brand href="/">
          <Typography
            variant="h6"
            component="div"
            style={{ marginRight: "30px", cursor: "pointer" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2257/2257295.png"
              style={{ width: "40px" }}
            />
          </Typography>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard" style={{ color: "#fff" }}>
              Dashboard
            </Nav.Link>

            <Dropdown variant="Secondary">
              <Dropdown.Toggle
                id="dropdown-basic"
                variant="Secondary"
                style={{ color: "#fff" }}
              >
                Themes
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ fontSize: "15px", fontWeight: "bold" }}>
                <Dropdown.Item
                  href="/population"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  السكان
                </Dropdown.Item>
                <Dropdown.Item
                  href="/pop-middle-year"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  السكان في منتصف العام
                </Dropdown.Item>
                <Dropdown.Item
                  href="/ages"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  فئات السن
                </Dropdown.Item>
                <Dropdown.Item
                  href="/qualifications"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  المؤهلات التعليمية
                </Dropdown.Item>
                <Dropdown.Item
                  href="/family"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  الاسر
                </Dropdown.Item>

                <Dropdown.Item
                  href="/house"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  اتصال المساكن بالمرافق
                </Dropdown.Item>
                <Dropdown.Item
                  href="/status"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  الحالة الزواجية
                </Dropdown.Item>
                <Dropdown.Item
                  href="/grade"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى
                </Dropdown.Item>
                <Dropdown.Item
                  href="/total"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  جملة من التحق وتسرب من التعليم 4 سنوات فاكثر
                </Dropdown.Item>
                <Dropdown.Item
                  href="/edu/dropout"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  التسرب من التعليم بالسن
                </Dropdown.Item>
                <Dropdown.Item
                  href="/edu/dropout-cases"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  اسباب التسرب من التعليم
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
