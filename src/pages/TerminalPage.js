import React from "react";
import Grid from "@mui/material/Grid";
import { Header } from "../components/Header";
import { Form } from "../components/Form";


export function TerminalPage() {
  return (
    <Grid container>
      <Header helperText="Please enter your data" />
      <Form />
    </Grid>
  );
}
