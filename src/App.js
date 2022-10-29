import GlobalStyle from './shared/GlobalStyle';
import { createContext } from 'react';
import Routers from './Router';

export const IssueContext = createContext('defaultValue');

const App = () => {
  return (
    <IssueContext.Provider value="test">
      <GlobalStyle />
      <Routers />
    </IssueContext.Provider>
  );
};

export default App;
