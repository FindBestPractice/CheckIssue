import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownConverter = ({ children }) => {
  return (
    <MarkdownStyle>
      <ReactMarkdown children={children} remarkPlugins={([remarkGfm], { singleTilde: false })} />
    </MarkdownStyle>
  );
};

export default MarkdownConverter;

const MarkdownStyle = styled.div`
  margin: 10px 30px;
  line-height: 2rem;
`;
