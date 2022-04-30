import React from "react";
import Grid from "@mui/material/Grid";
import { Header } from "../components/Header";
import { Form } from "../components/Form";

export function TerminalPage({ operator }) {
  return (
    <Grid container>
      <Header helperText="Please enter your data" />
      <Form operator={operator} />
    </Grid>
  );
}
