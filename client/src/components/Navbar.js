import React, { useState } from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavbarStyle = styled.div`
  display: flex;
  background-color: #fff;
  font-size: 1.5em;
  min-height: 150px;
  align-items: center;
  @media (max-width: 768px) {
    min-height: 0px;
    margin: 0px;
    flex-direction: column;
  }
`;
const NavLogo = styled.div`
  @media (max-width: 768px) {
    margin: 20px 0px;
  }
  font-size: 2em;
  color: palevioletred;
  flex: 1 1 0;

`;
const Button = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: ${props => props.showNav ? 'none' : 'block'};
    color: palevioletred;
    background-color: white;
    margin: 1em auto;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  }
`
const Links = styled.div`
  display:flex;
  justify-content: space-around;
  align-self: center;
  flex: 2 1 0;
  @media (max-width: 768px) {
    flex-direction: column;
    display: ${props => props.showNav ? 'flex' : 'none'};
  }
  a{
    text-decoration:none;
    color: green;
  }
`

const navItems = [
  { path: "/", name: 'Home' },
  { path: "/bio", name: 'Bio' },
  { path: "/media", name: 'Media' },
  { path: "/events", name: 'Events' },
  { path: "/contact", name: 'Contact' },
]

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <NavbarStyle>
        <NavLogo>Henrik Zenkert</NavLogo>
        <Links showNav={showNav}>
          {navItems.map((item, index) => {
            return (
              <Link key={index} to={item.path} onClick={() => setShowNav(false)}>
                {item.name}
              </Link>
            )
          })}
        </Links>
      </NavbarStyle>
      <Button showNav={showNav} onClick={handleClick}>Menu</Button>
    </>
  );
}
