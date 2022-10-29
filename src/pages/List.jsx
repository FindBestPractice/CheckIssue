import React, { useContext } from 'react';
import Header from '../components/Header';
import { IssueContext } from '../App';

const List = () => {
  const value = useContext(IssueContext);
  return (
    <div className="List">
      <Header />
      {value}
    </div>
  );
};

export default List;
