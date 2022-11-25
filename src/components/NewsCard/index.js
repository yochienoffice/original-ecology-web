import React from 'react'
import './index.css';

function NewsCard(style) {
  console.log(style.cardStyle)
  switch(style.cardStyle) {
    case 'square':
      return (
        <div className={'newscard-container-square ' + style.className}>
          <div className='newscard-image'>
            test image
          </div>
          <div className='newscard-wrapper'>
            <div className='newscard-header'>
              <div className='newscard-title'>
                Title
              </div>
              <div className='newscard-date'>
                2022-07-14
              </div>
            </div>
            <div className='newscard-content-abb'>
              NewsCard square content test
            </div>
          </div>
        </div>
      )
    default:
      return (
        <div className={'newscard-container-default ' + style.className}>
          <div className='newscard-header'>
            <div className='newscard-title'>
              Title
            </div>
            <div className='newscard-date'>
              2022-07-14
            </div>
          </div>
          <div className='newscard-content-de'>
            NewsCard Default content test
          </div>
        </div>
      )
  }
}

export default NewsCard;
