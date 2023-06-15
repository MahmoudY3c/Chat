import React from "react";
import plusIcon from '../../assests/plus-circle.svg'

const FaqRaw = (props) => {
  return (
    <li className="faq__raw">
      <div className="faq__raw__container">
        <div className="faq__raw__container__icon">
          <img src={plusIcon} alt="faq raw icon" />
        </div>
        <div className="faq__raw__container__title">
          {props.question}
        </div>
      </div>
      <div className="faq__raw__container" style={{
        height: props.open ? 'auto' : 20
      }}>
        <div className="faq__raw__container__description">
          {props.answer}
        </div>
      </div>
    </li>
  );
};

export default FaqRaw;
