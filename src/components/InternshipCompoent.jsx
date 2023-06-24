import * as A from "@mui/material";
import React from "react";

const InternshipCompoent = (data) => {
  return (
    <A.Container>
      <A.Typography
        variant="h5"
        sx={{ fontWeight: 500, marginTop: "10px", marginBottom: "10px" }}
      >
       {`${data.job_role}  |  ${data.company}`}
      </A.Typography>
      <A.Typography sx={{ fontWeight: 500, marginBottom: "10px" }}>
        {`${data.duration}`}
      </A.Typography>
      <A.Typography sx={{ marginBottom: "10px" }}>
        {`${data.description}`}
      </A.Typography>
    </A.Container>
  );
};

export default InternshipCompoent;
