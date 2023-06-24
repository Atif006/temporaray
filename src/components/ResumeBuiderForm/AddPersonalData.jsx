import * as A from "@mui/material";
import * as B from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addpersonal } from "../../redux/slice/personalSlice";

const AddPersonalData = () => {
  const [perso, setPerso] = useState("");
  const dispatch = useDispatch();
  const persodata = useSelector((state) => {
    return state.personal;
  });

  const savedata = () => {
    dispatch(addpersonal(perso));
    console.log(perso);
  };
  const setdetails = (e) => {
    setPerso(e.target.value);
    console.log(perso);
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
          Personal Details
        </A.Typography>
        <A.TextField
          id="standard-basic"
          label=" Add Details"
          variant="standard"
          value={perso}
          onChange={setdetails}
        />
        <A.Button onClick={savedata}>
          <B.AddCircleOutlineTwoTone sx={{ fontSize: "40px" }} />
        </A.Button>
        <A.Grid xs={12}>
          {persodata?.map((pdata) => {
            return <li>{pdata}</li>;
          })}
        </A.Grid>
      </A.Grid>
    </A.Grid>
  );
};

export default AddPersonalData;
