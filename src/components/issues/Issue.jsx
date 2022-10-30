import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { dateFormat } from '../../utils/dateFormat';

const Issue = ({ issue }) => {
  const { number, title, updated_at, user, comments } = issue;
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/${number}`, { state: { issue } })}>
      <LeftBox>
        <div>
          #{number} {title}
        </div>
        <p>
          작성자: {user.login}, 작성일: {dateFormat(updated_at)}
        </p>
      </LeftBox>
      <span>코멘트: {comments}</span>
    </Container>
  );
};

export default Issue;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-width: 350px;
  margin: 1.5rem;
  border-bottom: 1px solid black;
  span {
    font-size: 15px;
  }
`;

const LeftBox = styled.div`
  max-width: 80%;
  div {
    font-size: 19px;
    margin-bottom: 8px;
  }
  p {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;
