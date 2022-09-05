import React from "react";
import styled from "styled-components";
import logo from "../assets/logo3.png";

export default function Navbar() {
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="" width="140px"  />
            
          </div>
          <div className="toggle"></div>
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#recommend">Recommend</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <button onclick="window.open('tel:900300400');">call</button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
.brand{
  .container{
  }
  .toggle{
    display: none;
  }
}
ul{
  display: flex;
  gap: 1rem;
  list-style-type: none;
  li{
    a{
      text-decoration: none;
      color: #1363DF;
      font-size: 1.2rem;
      transition: 0ms.1s ease-in-out;
      &:hover{
        color: #06283D;
      }
    }
  }
}
`;
