import * as A from "@mui/material";
import * as B from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addeductaion } from "../../redux/slice/educationSlice";
let initialEducation = {
  course: "",
  passingYear: "",
  board_University: "",
  percentage: 0,
};

function AddEducations() {
  const [education, setEducation] = useState(initialEducation);
  const dispatch = useDispatch();
  const educationdata = useSelector((state) => {
    return state.education;
  });
  const educationdetails = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
    console.log(education);
  };
  const setdata = () => {
    dispatch(addeductaion(education));
  };
  return (
    <A.Box
      className="boxStyle"
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
            Education{" "}
          </A.Typography>
        </A.Grid>
        <A.Grid xs={6}>
          <A.TextField
            id="standard-basic"
            label="Course"
            variant="standard"
            name="course"
            value={education.course}
            onChange={educationdetails}
          />
        </A.Grid>
        <A.Grid xs={6}>
          <A.TextField
            id="standard-basic"
            label="Passing year  "
            variant="standard"
            value={education.passingYear}
            name="passingYear"
            onChange={educationdetails}
          />
        </A.Grid>
        <A.Grid xs={6}>
          <A.TextField
            id="standard-basic"
            label="Board And University  "
            variant="standard"
            value={education.board_University}
            name="board_University"
            onChange={educationdetails}
          />
        </A.Grid>
        <A.Grid xs={6}>
          <A.TextField
            id="standard-basic"
            label="Percentage "
            variant="standard"
            value={education.percentage}
            name="percentage"
            onChange={educationdetails}
          />
        </A.Grid>
        <A.Grid xs={6}>
          <A.Button onClick={setdata}>
            <B.AddCircleOutlineTwoTone sx={{ fontSize: "40px" }} />
          </A.Button>
        </A.Grid>
      </A.Grid>
      <A.Grid xs={12} sx={{ marginTop: "50px" }}>
        {educationdata?.map((edudata) => {
          return <li>{edudata.course}</li>;
        })}
      </A.Grid>
    </A.Box>
  );
}

export default AddEducations;
