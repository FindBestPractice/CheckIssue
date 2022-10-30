import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import styled from 'styled-components';
import { getIssuesDetail, getComment } from '../shared/axios';
import Header from '../components/Header';
import DetailTitle from '../components/DetailTitle';
import DetailContent from '../components/DetailContent';
import DetailComment from '../components/DetailComment';

const Detail = () => {
  const { commentBuckets, setCommentBuckets, setComment } = useContext(GlobalContext);
  const params = useParams();
  const fetchData = async () => {
    await getIssuesDetail(params.id).then(({ data }) => {
      setCommentBuckets(data);
    });
    await getComment(params.id).then(({ data }) => {
      setComment(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    commentBuckets && (
      <DetailContainer>
        <Header />
        <DetailTitle />
        <DetailContent />
        <DetailComment />
      </DetailContainer>
    )
  );
};

export default Detail;

const DetailContainer = styled.div`
  width: 100%;
  background-color: white;
`;
