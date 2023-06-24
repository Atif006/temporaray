import * as A from "@mui/material";
import * as B from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addexperience } from "../../redux/slice/experience";
let initialExperience = {
  job_Role: "",
  Company: "",
  duration: "",
  description: "",
};

function AddExperience() {
  const [experience, setExperiance] = useState(initialExperience);
  const dispatch = useDispatch();
  const experienceData = useSelector((state) => {
    return state.experience;
  });
  const experianceDetails = (e) => {
    setExperiance({ ...experience, [e.target.name]: e.target.value });
  };
  const saveExperience = () => {
    dispatch(addexperience(experience));
  };
  return (
    <A.Box
      className="boxStyle"
      container
      spacing={2}
      sx={{
        marginTop: "20px",
        height: "300px",
        width: "48%",
        padding: "10px",
        marginLeft: "-15px",
      }}
    >
      <A.Grid container spacing={2} sx={{ height: "150px", padding: "15px" }}>
        <A.Grid xs={12}>
          <A.Typography variant="h4" sx={{ fontWeight: "500" }}>
            {" "}
            Experience Or Certification
          </A.Typography>
        </A.Grid>
        <A.Grid xs={6}>
          <A.TextField
            id="standard-basic"
            label="Job Role"
            variant="standard"
            value={experience.job_Role}
            name="job_Role"
            onChange={experianceDetails}
          />
        </A.Grid>
        <A.Grid xs={6}>
          <A.TextField
            id="standard-basic"
            label="Company Name "
            variant="standard"
            value={experience.Company}
            name="Company"
            onChange={experianceDetails}
          />
        </A.Grid>
        <A.Grid xs={6}>
          <A.TextField
            id="standard-basic"
            label="Duration "
            variant="standard"
            value={experience.duration}
            name="duration"
            onChange={experianceDetails}
          />
        </A.Grid>
        <A.Grid xs={6}>
          <A.TextField
            id="standard-basic"
            label="Descriptions "
            variant="standard"
            value={experience.description}
            name="description"
            onChange={experianceDetails}
          />
        </A.Grid>
        <A.Grid xs={12}>
          <A.Button onClick={saveExperience}>
            <B.AddCircleOutlineTwoTone sx={{ fontSize: "40px" }} />
          </A.Button>
        </A.Grid>
      </A.Grid>

      <A.Grid xs={12} sx={{ height: "150px", marginTop: "50px" }}>
        {experienceData?.map((exdata) => {
          return <li>{exdata.Company}</li>;
        })}
      </A.Grid>
    </A.Box>
  );
}

export default AddExperience;
