//Outer Dependencies
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

//Inner Dependencies
import { fetchLogIn } from "../reducers/user";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const SignInButton = styled(Button)`
  margin-top: 50px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  padding: 100px;
`;

export const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);

  const errorMessage = useSelector((store) => store.user.errors);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLogIn(email, password));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <SignInButton
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Sign in
      </SignInButton> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sign in!</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Sign in!</DialogContentText> */}
          <FormContainer>
            <Form onSubmit={onFormSubmit}>
              <div>
                <div>
                  <TextField 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="standard-basic" 
                    label="Email" />
                </div>
                <div>
                  <TextField 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="standard-basic" 
                    label="Password" />
                </div>
              </div>
              <div>
                <p>Don't have an account?</p> 
                <a href="/signup">Sign up</a>
              </div>
            </Form>
            <p>{errorMessage && errorMessage.errorCode}</p>
          </FormContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {
            handleClose()
            console.log("CLICK")
            }} color="primary">
            Sign in
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
