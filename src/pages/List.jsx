import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { IssueContext } from '../App';
import { useNavigate } from 'react-router-dom';

const List = () => {
  const issueList = useContext(IssueContext).sort((a, b) => b.comments - a.comments);
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
        })}
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
