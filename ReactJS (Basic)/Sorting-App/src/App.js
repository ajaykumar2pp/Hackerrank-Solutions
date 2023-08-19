import React, { useState } from 'react';
import Articles  from './components/Articles';
function App({articles}) {

  const [sortedArticles, setSortedArticles] = useState([...articles].sort((a, b) => b.upvotes - a.upvotes));

  const sortByVotes = () => {
    setSortedArticles([...articles].sort((a, b) => b.upvotes - a.upvotes));
  };

  const sortByRecent = () => {
    setSortedArticles([...articles].sort((a, b) => new Date(b.date) - new Date(a.date)));
  };
  return (

    
    <div className="App">
    
    <div className="layout-row align-items-center justify-content-center my-20 navigation">
      <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
      <button data-testid="most-upvoted-link" className="small" onClick={sortByVotes}>
        Most Upvoted
      </button>
      <button data-testid="most-recent-link" className="small" onClick={sortByRecent}>
        Most Recent
      </button>
    </div>
    <Articles articles={sortedArticles} />
  </div>
  );
}

export default App;
