import React from "react";
import * as A from "@mui/material";
import * as B from "@mui/icons-material";
import styled from "@emotion/styled";
import InternshipCompoent from "./InternshipCompoent";
import { useSelector } from "react-redux";
const Container = styled(A.Box)``;

const InternShipContainer = () => {
  const interData = useSelector((state) => {
    return state.experience;
  });
  return (
    <Container>
      <A.Box sx={{ bgcolor: "white", display: "flex", alignItems: "center" }}>
        <B.BusinessCenterOutlined
          sx={{ bgcolor: "blue", color: "white", fontSize: "30px" }}
        />
        <A.Typography
          sx={{
            paddingLeft: "10px",
            textTransform: "uppercase",
            color: "white",
            width: "100%",
            height: "30px",
            bgcolor: "#2C3539",
          }}
        >
          Internship or experience
        </A.Typography>
      </A.Box>
      {interData?.map((indata) => {
        return <InternshipCompoent data={indata} />;
      })}
    </Container>
  );
};

export default InternShipContainer;
