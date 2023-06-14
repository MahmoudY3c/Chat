import React from "react";
import { Link } from "react-router-dom";

const MobileNavActions = (props) => {
  return (
    <Link to={props?.path} className="mobile-auth">
      <img className="mobile-auth__img" src={props?.img} alt={props?.title} />
      <p className="mobile-auth__title">{props?.title}</p>
    </Link>
  );
};

export default React.memo(MobileNavActions);
