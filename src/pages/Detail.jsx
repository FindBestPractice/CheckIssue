import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import { getIssueDetail } from '../shared/axios';
import Header from '../components/Header';
import Loding from '../components/Loding';

const Detail = () => {
  const { issue } = useParams();
  const [issueInfo, setIssueInfo] = useState({});
  const [isLoding, setIsLoding] = useState(true);

  // FIXME 마크다운 화면 수정필요
  // TODO 데이터 받는 부분 useContext로 변경해보기
  useEffect(() => {
    getIssueDetail(issue).then((result) => {
      setIssueInfo(result);
      setIsLoding(false);
    });
  }, []);

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
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{issueInfo.body}</ReactMarkdown>
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

const InfoBody = styled.div``;
