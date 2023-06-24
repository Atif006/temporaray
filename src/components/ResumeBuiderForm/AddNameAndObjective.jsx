import * as A from "@mui/material";
import * as B from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addName } from "../../redux/slice/nameSlice";
let profileDetails = {
  name: "",
  objective: "",
  profile: "",
};
const AddNameAndObjective = () => {
  const [profile, setProfile] = useState(profileDetails);
  const dispatch = useDispatch();
  const updateprofile = () => {
    dispatch(addName(profile));
    console.log(profile);
  };
  const saveProfile = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    console.log(profile);
  };

  return (
    <A.Grid
      className="boxStyle"
      container
      spacing={2}
      sx={{
        marginTop: "20px",
        height: "300px",
        padding: "10px",
        marginLeft: "20px",
      }}
    >
      <A.Grid xs={12}>
        <A.Typography variant="h4" sx={{ fontWeight: 500 }}>
          Profile Details
        </A.Typography>
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label=" Name : "
          variant="standard"
          value={profile.name}
          name="name"
          onChange={saveProfile}
        />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label=" objective "
          variant="standard"
          value={profile.objective}
          name="objective"
          onChange={saveProfile}
        />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label=" Profile "
          variant="standard"
          value={profile.profile}
          name="profile"
          onChange={saveProfile}
        />
      </A.Grid>
      <A.Grid>
        <A.Button variant="contained" onClick={updateprofile}>
          save
        </A.Button>
      </A.Grid>
      <A.Grid xs={6}></A.Grid>
    </A.Grid>
  );
};

export default AddNameAndObjective;
