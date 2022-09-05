import React from "react";
import styled from "styled-components";
import heroImage from "../assets/hero.jpeg";

export default function Hero() {
  return (
    <Section id="hero">
      <div className="background">
        <img src={heroImage} alt=""  width="7px"/>
      </div>
      <div className="content">
        <div className="title">
          <h1>AUTOGLASS INSTALLATION</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem
          </p>
        </div>
        <div className="search">
          <button>Call</button>
          <button>Email</button>

        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
position: relative;
margin-top: 2rem;
width: 100%;
height: 100%;
.background{
  height: 100%;
  img{
    width: 100%;
    filter: brightness(60%);
  }
}
.content{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 3;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 1rem;
  .title{
    h1{
      font-size: 3rem;
      letter-spacing: 0.2rem;
      margin-bottom: 50px;
    }
    p{
      text-align: center;
      padding: 0 30vw;
      margin-top 0ch.5rem;
    }
  }
  .search{
    display: flex;
    background-color: #ffffff;
    padding: .5rem;
    border-radius: 0.5rem;
    margin-top: 50px
    
  }
}
button{
  padding: 1rem;
  width: 100px;
  cursor: pointer;
  border-radius: 0.3rem;
  border: none;
  color: white;
  background-color: #06283D;
  margin: 10px;
}

@media screen and (min-width: 280px) and (max-width: 980px) {
  height: 25rem;
  .background {
    background-color: palegreen;
    img {
      height: 100%;
    }
  }
  .content {
    .title {
      h1 {
        font-size: 1rem;
        margin-top: 1rem;
      }
      p {
        font-size: 0.8rem;
        padding: 1vw;
      }
    }
    .search {
      flex-direction: column;
      padding: 0.8rem;
      gap: 0.8rem;
      /* padding: 0; */
      .container {
        padding: 0 0.8rem;
        input[type="date"] {
          padding-left: 1rem;
        }
      }
      button {
        padding: 1rem;
        font-size: 1rem;
      }
      /* display: none; */
    }
  }
}
`;
