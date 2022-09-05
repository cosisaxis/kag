import React from "react";
import styled from "styled-components";
import logo from "../assets/logo3.png";

export default function Navbar() {
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="" width="140px" />
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
        <a className="btn" href="tel:+8763019218">
          <button>call</button>
        </a>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #1363df;
        font-size: 1.2rem;
        transition: 0ms.1s ease-in-out;
        &:hover {
          color: #06283d;
        }
      }
    }
  }
  a {
    button {
      padding: 0.5rem 1rem;
      cursor: pointer;
      border: none;
      color: white;
      font-size: 1.1rem;
      background-color: #06283D;
      transition: 0.3s ease-in-out;
      &:hover{
        background-color: #1363DF;
      }
    }
  }
`;
