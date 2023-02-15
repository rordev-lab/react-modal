import React from "react";

import "./style.css";

const Button = (props) => {
  const { onClick, children } = props;
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
