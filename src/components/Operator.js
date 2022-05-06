import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  listItem: {
    width: "100%",
    cursor: "pointer",
    padding: 10,
    marginBottom: "10px !important",
    border: "1px solid grey",
    borderRadius: 20,
  },
}));

export function Operator({ operator }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleChangeOperator = () => {
    navigate(`/terminal/${operator.name}`);
  };

  return (
    <Grid container justifyContent="center" onClick={handleChangeOperator}>
      <Grid item xs={7} className={classes.listItem}>
        <Typography
          align="center"
          component="h6"
          variant="h6"
          className={classes.itemText}
        >
          {operator.name}
        </Typography>
      </Grid>
    </Grid>
  );
}
