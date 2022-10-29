import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { IssueContext } from '../App';
import { useNavigate } from 'react-router-dom';

const List = () => {
  const issueList = useContext(IssueContext);
  const navigate = useNavigate();
  const moveIssueDetail = (issueNum) => {
    navigate(`/detail/${issueNum}`);
  };

  return (
    <div className="List">
      <Header />
      {issueList &&
        issueList.map((issue) => {
          return (
            <IssueWrapper key={issue.id} onClick={() => moveIssueDetail(issue.number)}>
              <IssueInfo>
                <div className="issueTitle">
                  <p className="issueNumber">#{issue.number}</p>
                  <span className="title">{issue.title.slice(0, 60)}...</span>
                </div>
                <div className="issueInfo">
                  <span className="writer">작성자: {issue.user.login},</span>
                  <span className="date"> 작성일: {issue.created_at.slice(0, 10)}</span>
                </div>
              </IssueInfo>
              <Comment className="comment">코멘트: {issue.comments}</Comment>
            </IssueWrapper>
          );
        })}
    </div>
  );
};

export default List;

const IssueWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  cursor: pointer;
`;

const IssueInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 20px;
`;

const Comment = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: end;
  width: 100px;
`;
