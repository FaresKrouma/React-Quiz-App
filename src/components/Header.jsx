import React from "react";
import styled from "styled-components";

function Header() {
   return (
      <HeaderElement>
         <h1>React Quiz App</h1>
      </HeaderElement>
   );
}

export default Header;

const HeaderElement = styled.header`
   text-align: center;
   padding: 1rem;
   background-color: #eee;
   & h1 {
      color: rebeccapurple;
   }
`;
