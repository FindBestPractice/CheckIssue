import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  const OWNER = process.env.REACT_APP_OWNER;
  const REPO = process.env.REACT_APP_REPO;

  return (
    <Title onClick={() => navigate('/', { replace: true })}>
      <h3>
        {OWNER} / {REPO}
      </h3>
    </Title>
  );
};

export default Header;

const Title = styled.header`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  cursor: pointer;

  h3 {
    font-size: 25px;
  }
`;
