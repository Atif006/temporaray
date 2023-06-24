import React from "react";
import * as A from "@mui/material";

import styled from "@emotion/styled";

import InternShipContainer from "./InternShipContainer";
import EducationContainer from "./EducationContainer";
import { useSelector } from "react-redux";
const RightSide = styled(A.Box)`
  flex: 9;
  background: #f8f8ff;
`;

const RightContainer = () => {
  const namedetails = useSelector((state) => {
    return state.namedata1;
  });

  console.log("name " + namedetails);

  return (
    <RightSide>
      <A.Container>
        <A.Typography
          variant="h2"
          sx={{
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "10px",
          }}
        >
          {namedetails ? namedetails[0].name : "Name"}
        </A.Typography>
        <A.Typography variant="h6" sx={{ marginBottom: "10px" }}>
          {namedetails ? namedetails[0].profile : "profile"}
        </A.Typography>
        <A.Typography sx={{ marginBottom: "15px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </A.Typography>
      </A.Container>
      <InternShipContainer />
      <EducationContainer />
    </RightSide>
  );
};

export default RightContainer;
