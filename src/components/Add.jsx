import styled from 'styled-components';

const Add = () => {
  return (
    <ImgWrapper>
      <a href="https://www.wanted.co.kr/">
        <img
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
          alt="addImg"
        />
      </a>
    </ImgWrapper>
  );
};

export default Add;

const ImgWrapper = styled.div`
  margin-bottom: 20px;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid grey;
`;
