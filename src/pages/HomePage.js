import React from "react";
import { OperatorsList } from "../components/OperatorsList";
import Grid from "@mui/material/Grid";
import { Header } from "../components/Header";

export function HomePage() {
  return (
    <Grid container>
      <Header helperText="Please choose your operator" />
      <OperatorsList />
    </Grid>
  );
}
