// PostCard.js
import React, { useState } from 'react';
import '../CSS/PostCard.css'; // Add styles for your post card here
const description = "Fast food is a type of mass-produced food designed for commercial resale, with a strong priority placed on speed of service. It is a commercial term, limited to food sold in a restaurant or store with frozen, preheated or precooked ingredients and served in packaging for take-out/takeaway.Fast food is a type of mass-produced food designed for commercial resale, with a strong priority placed on speed of service. It is a commercial term, limited to food sold in a restaurant or store with frozen, preheated or precooked ingredients and served in packaging for take-out/takeaway.Fast food is a type of mass-produced food designed for commercial resale, with a strong priority placed on speed of service. It is a commercial term, limited to food sold in a restaurant or store with frozen, preheated or precooked ingredients and served in packaging for take-out/takeaway."
const imageSrc = '/images/adminpanel.png'
export const PostCard = ({ title, description,imageSrc,userName= "Parth Sharma", onDisable,postTime = " 1h ago", onUnflag }) => {

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };


  const truncatedDescription = description ? description.split(' ').slice(0, 50).join(' ') : '';
  const remainingDescription = description ? description.split(' ').slice(50).join(' ') : '';

  return (
    <div className="post-card">
        
        <div className='Header'>
        <div className="user-name">
            <p>{userName}</p>
        </div>
        <div className="post-time">
            <p>{postTime}</p>
          </div>
        </div>
        
      <div className="flag-indicator">
        <span>Flagged Post</span>
      </div>
      <div className="content-box">
      
        <div className='Title'>
          <h3>"Fast Food"</h3>
        </div>
        <div className='Description-box'>
          <div className='Description'>
            <p>
              {showFullDescription ? description : truncatedDescription}
              {!showFullDescription && remainingDescription.length > 0 && (
                <span>
                  {' '}
                  <a href="#show-more" className="show-more-link" onClick={toggleDescription}>
                    Show More
                  </a>
                </span>
              )}
              {showFullDescription && remainingDescription.length > 0 && (
                <span>
                  {' '}
                  <a href="#show-less" className="show-less-link" onClick={toggleDescription}>
                    Show Less
                  </a>
                </span>
              )}
            </p>
            {imageSrc && (
              <div className="image-container">
                <img src={imageSrc} alt="Post" />
              </div>
            )}
          </div>
        </div>
         
          <div className="button-container">
            <button className='btn-disable' onClick={onDisable}>Disable</button>
            <button onClick={onUnflag}>Unflag</button>
          </div>
        </div>
      </div>
   
  );
};

export default PostCard;
