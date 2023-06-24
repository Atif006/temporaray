import React from "react";
import * as A from "@mui/material";

import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const MainContainer = () => {
  return (
    <A.Container sx={{ display: "flex", padding: "5px" }}>
      <LeftContainer />
      <RightContainer />
    </A.Container>
  );
};

export default MainContainer;
