import React from "react";
import * as A from "@mui/material";
import * as B from "@mui/icons-material";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
// import EmailIcon from "@mui/icons-material/Email";
const AvatarContainer = styled(A.Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Avatars = () => {
  const avtardata = useSelector((state) => {
    return state.picdata;
  });

  return (
    <AvatarContainer>
      <A.Avatar
        alt="Remy Sharp"
        src={avtardata ? avtardata[0].image : `assets/profile.jpg`}
        sx={{
          width: 120,
          height: 150,
          objectFit: "cover",
          marginBottom: "20px",
          border: "2px solid white",
        }}
      />
      <A.Box
        sx={{
          display: "flex",
          flexDirection: "column",

          justifyContent: "start",
          marginBottom: "20px",
        }}
      >
        <A.Typography color={"white"}>
          <B.AddIcCall
            sx={{ color: "white", fontSize: "16px", marginRight: "10px" }}
          />
          {avtardata ? avtardata[0].contactNo : null}
        </A.Typography>
        <A.Typography color={"white"}>
          <B.EmailOutlined
            sx={{ color: "white", fontSize: "16px", marginRight: "10px" }}
          />
          {avtardata ? avtardata[0].emailId : null}
        </A.Typography>
        <A.Typography color={"white"}>
          <B.LocationCity
            sx={{ color: "white", fontSize: "16px", marginRight: "10px" }}
          />
          {avtardata ? avtardata[0].city : null}
        </A.Typography>
        <A.Typography color={"white"}>
          <B.LinkedIn
            sx={{ color: "white", fontSize: "16px", marginRight: "10px" }}
          />
          {avtardata ? avtardata[0].linkedIn : null}
        </A.Typography>
      </A.Box>
    </AvatarContainer>
  );
};

export default Avatars;
