import React, { useRef, useState } from "react";
import plusIcon from "../../assests/plus-circle.svg";

const FaqRaw = (props) => {
  const [open, setOpen] = useState(false);
  const content = useRef();
  return (
    <div className="faq__raw">
      <div
        className="faq__raw__container"
        onClick={() => (open ? setOpen(false) : setOpen(true))}
      >
        <div className="faq__raw__container__icon">
          <img src={plusIcon} alt="faq raw icon" />
        </div>
        <div className="faq__raw__container__title">{props.question}</div>
      </div>
      <div
        className="faq__raw__container"
        style={{
          maxHeight: open
            ? content.current
              ? content.current.scrollHeight + "px"
              : null
            : 0,
          height: "auto",
          overflow: "hidden",
        }}
      >
        <div className="faq__raw__container__description" ref={content}>
          {props.answer}
        </div>
      </div>
    </div>
  );
};

export default FaqRaw;
