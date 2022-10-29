import GlobalStyle from './shared/GlobalStyle';
import { createContext, useEffect, useState } from 'react';
import Routers from './Router';
import axios from 'axios';

export const IssueContext = createContext('defaultValue');

const App = () => {
  const TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
  const OWNER = process.env.REACT_APP_OWNER;
  const REPO = process.env.REACT_APP_REPO;

  const [issueData, setIssueData] = useState([]);

  const getIssueList = async () => {
    await axios
      .get(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
        headers: {
          Authorization: `Basic ${TOKEN}`,
        },
      })
      .then((res) => {
        const data = res.data.filter((issue) => issue.state === 'open');
        setIssueData(data);
      });
  };

  useEffect(() => {
    getIssueList();
  }, []);

  return (
    <IssueContext.Provider value={issueData}>
      <GlobalStyle />
      <Routers />
    </IssueContext.Provider>
  );
};

export default App;
