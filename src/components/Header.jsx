import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const OWNER = process.env.REACT_APP_OWNER;
  const REPO = process.env.REACT_APP_REPO;

  return (
    <Title>
      <h3>
        {OWNER} / {REPO}
      </h3>
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
