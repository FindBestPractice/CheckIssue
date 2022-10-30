import React, { useCallback, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { getIssuesList } from '../shared/axios';
import IssuesList from '../components/IssuesList';
import Header from '../components/Header';

const List = () => {
  const { scroll, setScroll, buckets, setBuckets } = useContext(GlobalContext);

  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setScroll(scroll + 1);
    }
  });

  const fetchData = useCallback(async () => {
    const payload = {
      sort: 'comments',
      per_page: 20,
      page: scroll,
    };

    await getIssuesList(payload)
      .then(({ data }) => {
        setBuckets([...buckets, ...data]);
      })

      .catch((e) => {});
  }, [scroll]);

  useEffect(() => {
    fetchData();
  }, [scroll]);

  return (
    <>
      <Header />
      <IssuesList />
    </>
  );
};

export default List;
