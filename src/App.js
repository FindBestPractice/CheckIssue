import { createContext, useEffect, useState } from 'react';
import Routers from './Router';
import GlobalStyle from './shared/GlobalStyle';
import { getIssueList } from './shared/axios';

export const IssueContext = createContext('defaultValue');
export const LodingContext = createContext('defaultValue');

const App = () => {
  const [issueData, setIssueData] = useState([]);
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    setIsLoding(true);
    getIssueList().then((result) => {
      setIssueData(result);
      setIsLoding(false);
    });
  }, []);

  return (
    <LodingContext.Provider value={isLoding}>
      <IssueContext.Provider value={issueData}>
        <GlobalStyle />
        <Routers />
      </IssueContext.Provider>
    </LodingContext.Provider>
  );
};

export default App;
