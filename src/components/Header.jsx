import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderCompo>
      <Link to="/">
        <h1>angular / angular-cli</h1>
      </Link>
    </HeaderCompo>
  );
};

export default Header;

const HeaderCompo = styled.div`
  position: fixed;
  width: 100%;
  background-color: #ddd;
  border-bottom: 1px solid #ddd;
  z-index: 2;
  h1 {
    text-align: center;
    line-height: 70px;
    font-weight: 700;
    font-size: 20px;
  }
`;
