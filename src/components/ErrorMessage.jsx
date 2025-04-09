import React from 'react';

const ErrorMessage = ({ message }) => {
  return <div className="text-red-500 font-semibold mt-4">{message}</div>;
};

export default ErrorMessage;
