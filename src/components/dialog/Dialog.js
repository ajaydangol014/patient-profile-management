import React, { useState } from "react";

const Dialog = (props) => {
  return (
    <div className="dialog-container">
      <div className="dialog">
        <div className="dialog-header">
          <div className="dialog-header__title">
            <h5>Delete</h5>
          </div>
          <div className="dialog-header__close" onClick={props.onClose}>
            X
          </div>
        </div>
        <div className="dialog-content">
          <p>Are you sure want to delete it?</p>
        </div>
        <div className="dialog-footer">
          <button className="btn btn--danger">Yes</button>
          <button className="btn btn--primary" onClick={props.onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
