import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalContext';

const DetailTitle = () => {
  const { commentBuckets } = useContext(GlobalContext);
  const { user, title, created_at, comments } = commentBuckets;

  return (
    <HeaderBox>
      <Avatar>
        <img src={user.avatar_url} alt="Avatar" />
      </Avatar>
      <TitleBox>
        <h1>{title}</h1>
        <SubTitBox>
          <p>
            작성자: {user.login} 작성일:&nbsp;
            {created_at.substr(0, 10)}
          </p>
          <CommentBox>코멘트: {comments}</CommentBox>
        </SubTitBox>
      </TitleBox>
    </HeaderBox>
  );
};

export default DetailTitle;

const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 100px 40px 20px;
  background-color: #eee;
  border-bottom: 1px solid #eee;
`;
const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
const TitleBox = styled.div`
  padding: 20px 0 20px 30px;
  h1 {
    font-size: 23px;
    font-weight: 600;
    line-height: 30px;
  }
  p {
    font-size: 15px;
    line-height: 30px;
  }
`;

const SubTitBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommentBox = styled.p`
  font-size: 17px;
  font-weight: 500;
`;
