import React from "react";
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        {/* <Bars /> */}
        <NavMenu>
          <Logo to="#" activeStyle>
            Logo
          </Logo>
        </NavMenu>
        <NavMenu>
          <NavLink to="/review" activeStyle>
            Review
          </NavLink>
          <NavLink to="/tips" activeStyle>
            Tips
          </NavLink>
          <NavLink to="/alert" activeStyle>
            Alerts
          </NavLink>
          {/* <NavLink to="/about" activeStyle>
            About
          </NavLink> */}
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
