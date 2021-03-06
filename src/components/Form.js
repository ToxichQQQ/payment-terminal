import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputMask from "react-input-mask";
import { validation } from "../validation";
import Alert from "@mui/material/Alert";
import { useNavigate, useParams } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

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
  const navigate = useNavigate();

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

    if (res.result === "success") {
      setTimeout(() => navigate("/"), 4000);
    }
  };

  useEffect(() => {
    const val = validation(phone, amount);
    setValidData(val);
  }, [phone, amount]);

  const formatValue = (value) => value.replace(/[^\d]/g, "");

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
            onChange={(e) => setPhone(formatValue(e.target.value))}
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
            onChange={(e) => setAmount(formatValue(e.target.value))}
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
        </Grid>
        <Grid container justifyContent="space-evenly">
          <Button
            startIcon={<KeyboardBackspaceIcon />}
            color="secondary"
            onClick={() => navigate("/")}
            variant="contained"
          >
            Back
          </Button>
          <Button
            endIcon={<SendIcon />}
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
