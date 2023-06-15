import React from "react";

const SectionTitle = (props) => {
  return (
    <div className="section-title-content">
      <div className="section-title-content__title">
        {props.title}
      </div>
      {
        props.description &&
        <div className="section-title-content__description">
          {props.description}
        </div>
      }
    </div>
  );
};

export default SectionTitle;
