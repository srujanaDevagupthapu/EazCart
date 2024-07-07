

import React from 'react'

const WomenCollection = (props) => {
    const {title, image11, image12, image13, image14, image15, image16}=props.ladiesFashion
  return (
    <div className='collectionSection'>
    <h2>{title}</h2>
    <div className='bannerSection'>
        <div className="bannerBox">
            <img src='assets/women.gif' alt='banner'></img></div></div>
    
<div className='menImages'>
<img src={image11} alt={title}/>
<img src={image12} alt={title}/>
<img src={image13} alt={title}/>
<img src={image14} alt={title}/>
<img src={image15} alt={title}/>
<img src={image16} alt={title}/>
</div>
</div>
 )
}

export default WomenCollection;