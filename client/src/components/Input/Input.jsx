import React from "react";

const Input = (props) => (
  <div className="form-group">
    {props.label && <label htmlFor="input-field">{props.label}</label>}
    <input
      type={props.type ? props.type : 'text'}
      value={props.value}
      name={props.name}
      className="form-control"
      placeholder={props.placeholder}
      onChange={props.onChange}
      {...props}
    />
  </div>
);

export default Input;
