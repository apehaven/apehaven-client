import React from "react";
import Box from "./Box";

const Section = (props) => {
  return <Box py={[5, null, "80px", 7]} px={[3, 0]} {...props} />;
};

export default Section;
