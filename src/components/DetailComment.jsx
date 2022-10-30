import React, { useContext } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { GlobalContext } from '../context/GlobalContext';

const DetailComment = () => {
  const { comment } = useContext(GlobalContext);
  return (
    <FooterBox>
      {comment &&
        comment.map((item) => {
          const { id, body, user, created_at } = item;
          return (
            <CommentItem key={id}>
              <ItemAvartor>
                <img src={user.avatar_url} alt="avatar_img" />
              </ItemAvartor>
              <CommentBubble>
                <h3>
                  {user.login} <span>{created_at.substr(0, 10)}</span>
                </h3>
                <p>
                  <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />
                </p>
              </CommentBubble>
            </CommentItem>
          );
        })}
    </FooterBox>
  );
};

export default DetailComment;

const FooterBox = styled.div`
  width: 100%;
`;

const CommentItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const ItemAvartor = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
const CommentBubble = styled.div`
  position: relative;
  width: calc(100% - 100px);
  padding: 20px;
  background: #eeee;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  :after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 8px 20px 15px 0;
    border-color: transparent #eeee;
    display: block;
    width: 0;
    z-index: 1;
    left: -15px;
    top: 12px;
  }
  h3 {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    font-weight: 600;
    line-height: 23px;
    padding-bottom: 10px;
  }
  p {
    overflow-wrap: break-word;
    line-height: 1.4;
  }
  code {
    white-space: pre-wrap;
  }
`;
