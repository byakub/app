import React, { useEffect } from "react";

export const Characters: React.FC<any> = ({ handleInitAction }) => {
  useEffect(() => {
    handleInitAction();
  }, []);
  return <>Hello from Chars!</>;
};

export default Characters;
