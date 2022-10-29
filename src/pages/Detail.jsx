import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../components/Header';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Detail = () => {
  const { issue } = useParams();
  const [issueInfo, setIssueInfo] = useState({});
  const TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
  const OWNER = process.env.REACT_APP_OWNER;
  const REPO = process.env.REACT_APP_REPO;

  const getIssueDetail = async (issueNumber) => {
    await axios
      .get(`https://api.github.com/repos/${OWNER}/${REPO}/issues/${issueNumber}`, {
        headers: {
          Authorization: `Basic ${TOKEN}`,
        },
      })
      .then((res) => setIssueInfo(res.data));
  };

  useEffect(() => {
    getIssueDetail(issue);
  }, []);

  return (
    <div className="Detail">
      <Header />
      {issueInfo && (
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
          <InfoBody>본문 {issueInfo.body}</InfoBody>
        </>
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
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 20px;

  p {
    font-size: 20px;
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;

const InfoBody = styled.div``;
