import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  header: {
    paddingTop: 20,
    fontSize: "56px !important",
  },
  helperText: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 40,
  },
}));

export function Header({ helperText }) {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Typography
        align="center"
        component="h1"
        variant="h1"
        className={classes.header}
      >
        Payment Terminal
      </Typography>
      <p className={classes.helperText}>{helperText}</p>
    </Grid>
  );
}
