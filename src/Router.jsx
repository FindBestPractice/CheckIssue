import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/List';
import Detail from './pages/Detail';
import { GlobalContext } from './context/GlobalContext';

const Router = () => {
  const [scroll, setScroll] = useState(1);
  const [buckets, setBuckets] = useState([]);
  const [commentBuckets, setCommentBuckets] = useState();
  const [comment, setComment] = useState([]);
  return (
    <BrowserRouter>
      <GlobalContext.Provider
        value={{
          scroll,
          setScroll,
          buckets,
          setBuckets,
          commentBuckets,
          setCommentBuckets,
          comment,
          setComment,
        }}
      >
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
