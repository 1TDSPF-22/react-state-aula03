import React, { useState } from "react";

export default (props) => {
  const { children } = props;
  return (
    <>
      <div>
        <h2>{props.children}</h2>
      </div>
    </>
  );
};
