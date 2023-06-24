import * as A from "@mui/material";

const Education = ({ data }) => {
  return (
    <A.Container>
      <A.Typography
        variant="h5"
        sx={{ fontWeight: 500, marginTop: "10px", marginBottom: "5px" }}
      >
        {`${data.course} | ${data.passingYear} |  ${data.percentage}`}
      </A.Typography>
      <A.Typography sx={{ fontWeight: 500, marginBottom: "10px" }}>
        {data.board_University}
      </A.Typography>
    </A.Container>
  );
};

export default Education;
