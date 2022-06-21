//comp. child

import React from "react";
import { useEffect } from "react";

const Display = ({ getData }) => {
  useEffect(() => {
    console.log("getData change");
  }, [getData]);

  const counterData = getData();

  return counterData.map((item) => <p key={item}> {item} </p>);
};

export default Display;
