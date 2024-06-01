import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Appbar.css";
import AppBar from "@mui/material/AppBar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assert/Logo.jpeg";

function DrawerAppBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 
  console.log("window.innerWidth", window.innerWidth);
  console.log("isMenuOpen", isMenuOpen);
  return (
    <div className="AppBar">
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
            bgcolor: "white",
            color: "black",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC47KLgtzYFOVQeEi_yXMPNKq_gxVha9eA0A&s"
            width={60}
            height={60}
            alt="Logo"
          />
          {window.innerWidth <= 850 ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Toolbar sx={{ padding: "5px", cursor: "pointer" }}>
              <div
                style={{
                  display: "flex",
                  direction: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    fontSize: "15px",
                  }}
                >
                  <NavLink to="/home" activeClassName="active">
                    HOME
                  </NavLink>
                </Button>
                <Button
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    fontSize: "15px",
                  }}
                >
                  <NavLink to="/do" activeClassName="active">
                    ABOUT
                  </NavLink>
                </Button>
                <Button
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    fontSize: "15px",
                  }}
                >
                  <NavLink to="/programs" activeClassName="active">
                    SERVICES
                  </NavLink>
                </Button>
                <Button
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    fontSize: "15px",
                  }}
                >
                  <NavLink to="/donation" activeClassName="active">
                    DONATE
                  </NavLink>
                </Button>
                <Button
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    fontSize: "15px",
                  }}
                >
                  <NavLink to="/gallery" activeClassName="active">
                    GALLERY
                  </NavLink>
                </Button>
                
                <Button
                  className="Visitbtn"
                  sx={{
                    bgcolor: "#334257",
                    color: "white",
                    marginLeft: "10px",
                    border: "2px",
                    "&:hover": {
                      borderColor: "#334257",
                      color: "#334257",
                      border: "2px solid #334257",
                    },
                  }}
                >
                  <Link to="/visit" className="visit-link">
                    CONTACT
                  </Link>
                </Button>
              </div>
            </Toolbar>
          )}
        </Toolbar>
        {isMenuOpen && (
          <div className="Navbar">
            <Button
              style={{
                color: "black",
                fontWeight: "bolder",
                fontSize: "15px",
              }}
            >
              <NavLink to="/home" onClick={toggleMenu} activeClassName="active">
                HOME
              </NavLink>
            </Button>
            <Button
              style={{
                color: "black",
                fontWeight: "bolder",
                fontSize: "15px",
              }}
            >
              <NavLink to="/do" onClick={toggleMenu} activeClassName="active">
                ABOUT
              </NavLink>
            </Button>
            <Button
              style={{
                color: "black",
                fontWeight: "bolder",
                fontSize: "15px",
              }}
            >
              <NavLink to="/programs" onClick={toggleMenu} activeClassName="active">
                SERVICES
              </NavLink>
            </Button>
            <Button
              style={{
                color: "black",
                fontWeight: "bolder",
                fontSize: "15px",
              }}
            >
              <NavLink
                to="/donation"
                onClick={toggleMenu}
                activeClassName="active"
              >
                DONATE
              </NavLink>
            </Button>
            <Button
              style={{
                color: "black",
                fontWeight: "bolder",
                fontSize: "15px",
              }}
            >
              <NavLink
                to="/gallery"
                onClick={toggleMenu}
                activeClassName="active"
              >
                GALLERY
              </NavLink>
            </Button>
           
            <Button
              className="Visitbtn"
              sx={{
                bgcolor: "#334257",
                color: "white",
                marginLeft: "10px",
                border: "2px",
                "&:hover": {
                  borderColor: "#334257",
                  color: "#334257",
                  border: "2px solid #334257",
                },
              }}
              onClick={toggleMenu}
            >
              <Link to="/visit" className="visit-link">
                CONTACT
              </Link>
            </Button>
          </div>
        )}
      </AppBar>
    </div>
  );
}

export default DrawerAppBar;
