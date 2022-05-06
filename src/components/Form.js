import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputMask from "react-input-mask";
import { validation } from "../validation";
import Alert from "@mui/material/Alert";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  input: {
    padding: 5,
    borderRadius: 7,
    border: "1px solid grey",
    margin: "10px 0 !important",
  },
  operator: {
    fontSize: "24px !important",
    fontWeight: "bold !important",
  },
  alert: {
    marginTop: 20,
  },
}));

export function Form() {
  const classes = useStyles();

  const { operator } = useParams();
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [isValidData, setValidData] = useState(false);
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = () => {
    setSubmitting(true);
    let res = null;

    if (Math.random() > 0.5) {
      res = {
        result: "success",
        title: "Your balance has been successfully topped up",
      };
    } else {
      res = { result: "error", title: "Ohhh,something went wrong" };
    }

    setTimeout(() => {
      setSubmitting(false);
      setStatus(res);
    }, 2000);
  };

  useEffect(() => {
    const val = validation(phone, amount);
    setValidData(val);
  }, [phone, amount]);

  const handleSetValue = (value, setFunc) => {
    const val = value.replace(/[^\d]/g, "");
    setFunc(val);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={4}>
        <Grid container direction="column">
          <Typography align="center" className={classes.operator}>
            {operator}
          </Typography>
          <InputMask
            mask="+7(999) 999 99 99"
            disabled={false}
            maskChar=" "
            value={phone}
            onChange={(e) => handleSetValue(e.target.value, setPhone)}
          >
            {() => (
              <TextField
                label="Phone"
                variant="standard"
                className={classes.input}
              />
            )}
          </InputMask>
          <InputMask
            mask="9999RU"
            disabled={false}
            maskChar=" "
            value={amount}
            onChange={(e) => handleSetValue(e.target.value, setAmount)}
          >
            {() => (
              <TextField
                helperText="Minimal possible amount - 1 RU, maximum - 1000 RU"
                variant="standard"
                label="Amount"
                className={classes.input}
              />
            )}
          </InputMask>
          <Button
            onClick={onSubmit}
            disabled={!isValidData || submitting}
            variant="contained"
          >
            Submit
          </Button>
        </Grid>
        {status && (
          <Alert
            className={classes.alert}
            onClose={() => setStatus(null)}
            severity={status.result}
          >
            {status.title}
          </Alert>
        )}
      </Grid>
    </Grid>
  );
}
