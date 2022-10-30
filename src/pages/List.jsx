import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IssueContext, LodingContext } from '../App';
import Header from '../components/Header';
import Loding from '../components/Loding';

const List = () => {
  const isLoding = useContext(LodingContext);
  const issueList = useContext(IssueContext).sort((a, b) => b.comments - a.comments);
  const navigate = useNavigate();
  const moveIssueDetail = (issueNum) => {
    navigate(`/detail/${issueNum}`);
  };

  // TODO 5번째 행에 광고 이미지 출력
  // TODO 무한스크롤
  // TODO 반응형
  // TODO mui 등 스타일 !!
  return (
    <div className="List">
      <Header />
      {isLoding ? (
        <Loding />
      ) : (
        issueList &&
        issueList.map((issue) => {
          return (
            <IssueListWrapper key={issue.id} onClick={() => moveIssueDetail(issue.number)}>
              <IssueWrapper>
                <div className="issueTitle">
                  <p className="number">#{issue.number}</p>
                  <p className="title">{issue.title.slice(0, 60)}...</p>
                </div>
                <div className="issueInfo">
                  <span className="writer">작성자: {issue.user.login},</span>
                  <span className="date"> 작성일: {issue.created_at.slice(0, 10)}</span>
                </div>
              </IssueWrapper>
              <Comment className="comment">코멘트: {issue.comments}</Comment>
            </IssueListWrapper>
          );
        })
      )}
    </div>
  );
};

export default List;

const IssueListWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  border: 1px solid grey;
  padding: 10px 10px;

  cursor: pointer;
`;

const IssueWrapper = styled.div`
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

const Comment = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: end;
  width: 100px;
`;
