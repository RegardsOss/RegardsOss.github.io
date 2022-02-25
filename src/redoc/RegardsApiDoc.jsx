import React from 'react';
import Redoc from '@theme/Redoc';
import "./redoc.css";

function RegardsApiDoc({ spec }) {
  return (
    <Redoc spec={spec} />
  );
}

export default RegardsApiDoc;
