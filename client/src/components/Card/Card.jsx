import React from "react";

const Card = (props) => {
  // console.log(props.extended)
  return (
    <div className={
      `
      card-content 
      ${props.extended ? 'card-content--extended' : ''}
      ${props.shadow ? 'card-content--shadow' : ''}
      ${props.border ? 'card-content--border' : ''}
      `
      }>
      <div className="card-content__container">
        <div className="card-content__container__img">
          <img src={props.img} alt={props.title} />
        </div>
      </div>
      <div className="card-content__container">
        <div className="card-content__container__title">
          {props.title}
        </div>
        <div className="card-content__container__description">
          {props.description}
        </div>
        {/* <div className="card-content_link">
        {props.link}
      </div> */}
      </div>
    </div>
  );
};

export default Card;
