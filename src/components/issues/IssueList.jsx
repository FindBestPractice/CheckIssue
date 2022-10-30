import { useEffect, useState, useContext } from 'react';
import { getIssues } from '../../shared/axios';
import Issue from './Issue';
import Ad from './Ad';
import IssueContext from '../../context/issueContext';
import Spinner from '../../elements/Spinner';

const IssueList = () => {
  const [issue, setIssue] = useState();
  const issueContext = useContext(IssueContext);

  useEffect(() => {
    const getIssue = async () => {
      const { data: issues } = await getIssues();
      setIssue(issues);
    };
    getIssue();
  }, []);
  if (!issue) return <Spinner />;
  return <div>{issue?.map((issue, i) => (i === 4 ? <Ad key={i} /> : <Issue key={issue.id} issue={issue} />))}</div>;
};

export default IssueList;
