//Outer Dependencies
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//Inner Dependencies
import { fetchLogIn } from "../reducers/user";

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
      <SignInButton
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Sign in
      </SignInButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sign in!</DialogTitle>
        <DialogContent>
          <DialogContentText>Sign in!</DialogContentText>
          <FormContainer>
            <Form onSubmit={onFormSubmit}>
              <div>
                <label>E-mail</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
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
