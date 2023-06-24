import React from "react";
import * as A from "@mui/material";
import * as B from "@mui/icons-material";
import Education from "./Education";
import { useSelector } from "react-redux";

const EducationContainer = () => {
  const educationdata = useSelector((state) => {
    return state.education;
  });

  return (
    <A.Box>
      <A.Box sx={{ bgcolor: "white", display: "flex", alignItems: "center" }}>
        <B.SchoolSharp
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
          Education Or Certifates
        </A.Typography>
      </A.Box>
      {educationdata?.map((edcudata) => {
        return <Education data={edcudata} />;
      })}
    </A.Box>
  );
};

export default EducationContainer;
