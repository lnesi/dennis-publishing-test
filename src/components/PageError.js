import React from "react";

const PageError = props => (
  <div className="PageError col">
    <div className="alert alert-warning" role="alert">
      <h6>Somtheing went wrong:!</h6>
      <p>{props.message}</p>
    </div>
  </div>
);

export default PageError;
