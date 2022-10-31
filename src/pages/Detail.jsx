import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import { IssueContext } from '../App';
import Header from '../components/Header';
import Loding from '../components/Loding';

const Detail = () => {
  const { issue } = useParams();
  const issueInfo = useContext(IssueContext).filter((list) => parseInt(issue) === parseInt(list.number))[0];
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    setIsLoding(false);
  }, [issueInfo]);

  return (
    <div className="Detail">
      <Header />
      {isLoding ? (
        <Loding />
      ) : (
        issueInfo && (
          <>
            <InfoHeader>
              <img src={issueInfo.user?.avatar_url} alt="profileImg" />
              <TitleWrapper>
                <div className="title">
                  <p className="number">#{issueInfo.number}</p>
                  <p className="title">{issueInfo.title}</p>
                </div>
                <div className="info">
                  <span className="writer"> 작성자 {issueInfo.user?.login}</span>
                  <span className="date"> 작성일 {issueInfo.created_at}</span>
                </div>
              </TitleWrapper>
              <div>코멘트: {issueInfo.comments}</div>
            </InfoHeader>
            <MDEditor.Markdown source={issueInfo.body} style={{ padding: '20px', backgroundColor: '#FAFAFA' }} />
          </>
        )
      )}
    </div>
  );
};

export default Detail;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;

  margin-right: 20px;

  p {
    font-size: 20px;
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;
