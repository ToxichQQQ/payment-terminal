import React from "react";
import Grid from "@mui/material/Grid";
import { Operator } from "./Operator";
import { operatorsArray } from "../constants";

export function OperatorsList() {

  return (
    <Grid container>
      {operatorsArray.map((operator) => (
        <Operator key={operator.id} operator={operator} />
      ))}
    </Grid>
  );
}
