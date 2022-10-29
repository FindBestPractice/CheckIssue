import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { IssueContext } from '../App';

const List = () => {
  const issueList = useContext(IssueContext);

  return (
    <div className="List">
      <Header />
      {issueList &&
        issueList.map((issue) => {
          return (
            <IssueWrapper key={issue.id}>
              <IssueInfo>
                <div className="issueTitle">
                  <p className="issueNumber">#{issue.number}</p>
                  <span className="title">{issue.title}</span>
                </div>
                <div className="issueInfo">
                  <span className="writer">작성자: {issue.user.login},</span>
                  <span className="date">작성일: {issue.created_at},</span>
                </div>
              </IssueInfo>
              <div className="comment">코멘트: {issue.comments}</div>
            </IssueWrapper>
          );
        })}
    </div>
  );
};

export default List;

const IssueWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const IssueInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
