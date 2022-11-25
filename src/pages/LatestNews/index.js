import React from 'react'
import NewsCard from '../../components/NewsCard';
import './index.css';
function LatestNews() {
  return (
    <div>
      LatestNews
      <div className='newscard-list'>
        <NewsCard cardStyle='square'/>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  )
}

export default LatestNews;
