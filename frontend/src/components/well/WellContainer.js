import React from "react";

const WellContainer = (props) => {
  return (
    <div className="well">
      <div className="well__content">
        <h3>{props.title}</h3>
      </div>
      {props.children}
    </div>
  );
};

export default WellContainer;
