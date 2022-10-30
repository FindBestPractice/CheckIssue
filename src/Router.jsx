import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/List';
import Detail from './pages/Detail';
import IssueContext from './context/issueContext';

const Router = () => {
  return (
    <BrowserRouter>
      <IssueContext.Provider>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </IssueContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
