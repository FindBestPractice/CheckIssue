import styled from 'styled-components';
import wanted_logo from '../../assets/wanted_logo.webp';

const Ad = () => {
  const url = `https://www.wanted.co.kr/`;
  return (
    <AdContainer onClick={() => window.open(url)}>
      <Advertisement src={wanted_logo} alt="Ad image" />
    </AdContainer>
  );
};

export default Ad;

const AdContainer = styled.div`
  text-align: center;
`;

const Advertisement = styled.img`
  text-align: center;
  width: 160px;
  height: 50px;
`;
