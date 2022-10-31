import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IssueContext, LodingContext } from '../App';
import { getMoreIssueList } from '../shared/axios';
import Header from '../components/Header';
import Loding from '../components/Loding';
import Add from '../components/Add';

const List = () => {
  const isLoding = useContext(LodingContext);
  const issueList = useContext(IssueContext);
  const navigate = useNavigate();

  const [issueData, setIssueData] = useState(issueList);
  const [scrollLoding, setScrollLoding] = useState(false);
  const [page, setPage] = useState(1);
  const [endPage, setEndPage] = useState(false);
  const [target, setTarget] = useState(null);

  useEffect(() => {
    if (scrollLoding && !endPage) {
      getMoreIssueList(page).then((result) => {
        setIssueData((issueData) => issueData.concat(result));
        setPage((page) => page + 1);
        setScrollLoding(false);
        if (result.length < 1) {
          setEndPage(true);
        }
      });
    }
  }, [scrollLoding]);

  useEffect(() => {
    let observer;
    if (target && !endPage) {
      observer = new IntersectionObserver(
        async (entries, observer) => {
          if (entries[0].isIntersecting && !scrollLoding) {
            observer.unobserve(entries[0].target);
            setScrollLoding(true);
            observer.observe(entries[0].target);
          }
        },
        {
          threshold: 0.5,
        }
      );
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target, scrollLoding]);

  const moveIssueDetail = (issueNum) => {
    navigate(`/detail/${issueNum}`);
  };

  // TODO 반응형
  // TODO mui 등 스타일 !!
  return (
    <div className="List">
      <Header />
      <ul>
        {isLoding ? (
          <Loding />
        ) : (
          issueData &&
          issueData.map((issue) => {
            if (issue === 'add') {
              return <Add key={'add'} />;
            } else {
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
            }
          })
        )}
      </ul>
      {scrollLoding && <Loding />}
      <div ref={setTarget}></div>
    </div>
  );
};

export default List;

const IssueListWrapper = styled.li`
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
