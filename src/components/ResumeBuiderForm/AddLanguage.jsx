import * as A from "@mui/material";
import * as B from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLanguage } from "../../redux/slice/languageSlice";

const AddLanguage = () => {
  const [language, setLanguage] = useState("");
  const dispatch = useDispatch();
  const langData = useSelector((state) => {
    return state.language;
  });
  const inputLanguage = (e) => {
    setLanguage(e.target.value);
  };
  const updateLanguage = () => {
    dispatch(addLanguage(language));
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
          Languages
        </A.Typography>
        <A.TextField
          id="standard-basic"
          label=" Add Language"
          variant="standard"
          value={language}
          onChange={inputLanguage}
        />
        <A.Button onClick={updateLanguage}>
          <B.AddCircleOutlineTwoTone sx={{ fontSize: "40px" }} />
        </A.Button>
        <A.Grid xs={12}>
          {langData?.map((ldata) => {
            return <li>{ldata}</li>;
          })}
        </A.Grid>
      </A.Grid>
    </A.Grid>
  );
};

export default AddLanguage;
