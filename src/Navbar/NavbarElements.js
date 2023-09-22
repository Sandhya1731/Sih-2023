import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  height: 50px;
  position: fixed;
  background: #ffffff;
  top: 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #1e1b1b;
  font-family: Poppins;
  font-size: 12.6px;
  font-weight: 500;
  line-height: 18.9px;
  text-align: left;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  ${"" /* height: 100%; */}
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const Logo = styled(NavLink)`
  align-items: flex-end;
  margin-left: 196px;
`;
// export const Bars = styled(FaBars)`
//   display: none;
//   color: #808080;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -14px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 150px;
  radius: 5.25px;
  width: 74.03px;
  height: 34.13px;
  top: 8.4px;
  background: #ffffff;
  /* Third Nav */ /* justify-content: flex-end;
width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  font: Poppins;
  font-weight: 500;
  font-size: 12.6px;
  line-height: 18.9px;
  padding: 5px 10px;
  color: #19aa39;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;
