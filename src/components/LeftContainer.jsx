import React from "react";
import * as A from "@mui/material";

import styled from "@emotion/styled";
import Avatars from "./Avatars";
import HeadingComponent from "./HeadingComponent";
import { useSelector } from "react-redux";
const LeftSide = styled(A.Box)`
  flex: 3;
  padding: 15px;
  background: #2c3539;
`;

const LeftContainer = () => {
  const skildata = useSelector((state) => {
    return state.skilldata;
  });
  const hobidata = useSelector((state) => {
    return state.hobbies;
  });
  const persata = useSelector((state) => {
    return state.personaldata;
  });
  const langdata = useSelector((state) => {
    return state.languagedata;
  });

  return (
    <LeftSide>
      <Avatars />
      {skildata ? (
        <HeadingComponent heading={"Skills"} data={skildata} />
      ) : null}
      {hobidata ? (
        <HeadingComponent heading={"Hobbies & Interest"} data={hobidata} />
      ) : null}
      {persata ? (
        <HeadingComponent heading={"personal details"} data={persata} />
      ) : null}

      {langdata ? (
        <HeadingComponent heading={"language"} data={langdata} />
      ) : null}
    </LeftSide>
  );
};

export default LeftContainer;
