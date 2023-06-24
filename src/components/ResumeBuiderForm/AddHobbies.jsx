import * as A from "@mui/material";
import * as B from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addhobbies } from "../../redux/slice/hobboies";

const AddHobbies = () => {
  const [hobbie, setHobbies] = useState("");
  const dispatch = useDispatch();
  const hoobbiesData = useSelector((state) => {
    return state.hobbies;
  });

  const hobbiesDetails = (e) => {
    setHobbies(e.target.value);
  };
  const updateHobbies = () => {
    dispatch(addhobbies(hobbie));
    setHobbies("");
  };
  return (
    <A.Grid
      className="boxStyle"
      container
      spacing={2}
      sx={{ marginTop: "20px", height: "300px", padding: "10px" }}
    >
      <A.Grid xs={12}>
        <A.Typography variant="h4" sx={{ fontWeight: 500 }}>
          Hobbies & Interest
        </A.Typography>
        <A.TextField
          id="standard-basic"
          label=" Add Hobbies & interest"
          variant="standard"
          value={hobbie}
          onChange={hobbiesDetails}
        />
        <A.Button onClick={updateHobbies}>
          <B.AddCircleOutlineTwoTone
            sx={{ fontSize: "40px", color: "green" }}
          />
        </A.Button>
        <A.Grid xs={12}>
          {hoobbiesData?.map((hdata) => {
            return <li>{hdata}</li>;
          })}
        </A.Grid>
      </A.Grid>
    </A.Grid>
  );
};

export default AddHobbies;
