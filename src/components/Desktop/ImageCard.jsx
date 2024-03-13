import React from "react";
import PropTypes from "prop-types";


const ImageCard = ({ imageUrl, title, description, link }) => {
  return (
    <a href={link} className="image-card-link">
      <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src={imageUrl} alt={title} />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>{title}</h3>
          <div>{description}</div>
        </div>
      </div>
    </a>
  );
};

ImageCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ImageCard;
