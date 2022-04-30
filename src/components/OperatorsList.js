import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Operator } from "./Operator";

export function OperatorsList({ setOperator }) {
  const [operators, setOperators] = useState([
    { id: "1", name: "Megafon" },
    { id: "2", name: "MTS" },
    { id: "3", name: "Beeline" },
  ]);

  return (
    <Grid container>
      {operators.map((operator) => (
        <Operator
          key={operator.id}
          setOperator={setOperator}
          operator={operator}
        />
      ))}
    </Grid>
  );
}
