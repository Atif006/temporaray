import * as A from "@mui/material";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPrfoile } from "../../redux/slice/Slices";
let initialData = {
  image: "",
  contactNo: "",
  emailId: "",
  city: "",
  linkedIn: "",
};

function ImageTacker() {
  const [basicinfo, setBasicInfo] = useState(initialData);
  const dispatch = useDispatch();

  function saveData() {
    dispatch(addPrfoile(basicinfo));
  }
  function selectImage(e) {
    let da = URL.createObjectURL(e.target.files[0]);

    setBasicInfo({ ...basicinfo, image: da });
  }
  const inputData = (e) => {
    setBasicInfo({ ...basicinfo, [e.target.name]: e.target.value });
  };

  return (
    <A.Grid
      className="boxStyle"
      container
      spacing={2}
      sx={{
        marginTop: "20px",
        padding: "10px",
        height: "300px",
      }}
    >
      <A.Grid xs={12}>
        <A.TextField
          label="Profile Pic "
          variant="standard"
          type="file"
          id="standard"
          name="image"
          onChange={selectImage}
          sx={{ widows: "100px", color: "black" }}
        />
      </A.Grid>

      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label="Contact No"
          variant="standard"
          name="contactNo"
          value={basicinfo.contactNo}
          onChange={inputData}
        />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label="Email Id "
          variant="standard"
          name="emailId"
          value={basicinfo.emailId}
          onChange={inputData}
        />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label="Current City"
          variant="standard"
          name="city"
          value={basicinfo.city}
          onChange={inputData}
        />
      </A.Grid>
      <A.Grid xs={6}>
        <A.TextField
          id="standard-basic"
          label="Linkdin Id "
          variant="standard"
          name="linkedIn"
          value={basicinfo.linkedIn}
          onChange={inputData}
        />
      </A.Grid>
      <A.Grid sx={12}>
        <A.Button variant="contained" onClick={saveData}>
          Save
        </A.Button>
      </A.Grid>
    </A.Grid>

    // {

    //     <A.Box sx={{ display: "grid", gridTemplateColumns: "100px" }}>
    //     <A.TextField
    //     label="Profile Pic "
    //     variant="standard"
    //     type="file"
    //     id="standard"
    //     onChange={handleChange}
    //     sx={{ widows: "100px", color: "black" }}
    //     />
    // <A.TextField id="standard-basic" label="Contact No" variant="standard" />
    //     <A.TextField id="standard-basic" label="Email Id " variant="standard" />
    //     <A.TextField
    //     id="standard-basic"
    //     label="Current City"
    //     variant="standard"
    //     />
    //     <A.TextField id="standard-basic" label="Linkdin Id" variant="standard" />
    //     </A.Box>
    // }

    // {<div className="App">
    //   <h2>Add Image:</h2>
    //   <input type="file" onChange={handleChange} />
    // </div>}
  );
}

export default ImageTacker;
