import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Title>
      <h3>Organization Name / Repository Name</h3>
    </Title>
  );
};

export default Header;

const Title = styled.header`
  h3 {
    font-size: 25px;
  }
  margin-bottom: 40px;
`;
