import { useState } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import ResumeHome from "./components/ResumeBuiderForm/ResumeHome";
import * as A from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [togg, settogg] = useState(false);
  const toggle = () => {
    settogg(!togg);
  };
  return (
    <>
      {
        // {togg ? <MainContainer /> : <ResumeHome />}
        // <A.Box sx={{ display: "flex", alignItems: "center", marginTop: "25px" }}>
        //   <A.Button
        //     sx={{
        //       bgcolor: "green",
        //       color: "white",
        //       width: "60%",
        //       marginLeft: "20%",
        //     }}
        //     onClick={toggle}
        //   >
        //     preview
        //   </A.Button>
        // </A.Box>
      }
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResumeHome />} />
          <Route path="/preview" element={<MainContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
