import styled from 'styled-components';
import Issue from './Issue';
import { useLocation } from 'react-router-dom';
import MarkdownConverter from '../../shared/MarkdownConverter';

const IssueDetail = () => {
  const { state } = useLocation();

  return (
    <>
      <Container>
        <img src={state.issue.user.avatar_url} alt="프로필 사진" />
        <Issue issue={state.issue} />
      </Container>
      <MarkdownConverter>{state.issue.body}</MarkdownConverter>
    </>
  );
};

export default IssueDetail;

const Container = styled.div`
  display: flex;
  align-items: center;
  img {
    margin: 0 0 20px 20px;
    width: 55px;
    height: 55px;
  }
`;
