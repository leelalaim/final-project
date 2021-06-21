//Outer Dependencies
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";


import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

//Inner Dependencies
import { fetchLogIn } from "../reducers/users";

//Material UI
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// React-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const SignInButton = styled(Button)`
  color: #494949;
  border-color: #494949;
  :hover {
    border-color: #494949;
    background-color: rgba(224, 224, 224, 0.3);
  }
  @media (max-width: 780px) {
    border-color: white;
    color: white;
    margin-top: 5px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
border: 1px solid black;
padding: 0;
`;

const Input = styled(TextField)`
  // padding: 10px;
  // width: 100%;
`;


// MY STYLING

const Avatars = styled(Avatar)`
background-color: #eeca4a;
`

const HeaderWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 30px;
`


export const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);

  const errorMessage = useSelector((store) => store.users.errors);
  const successToast = () => toast.success("You have successfully signed in!");

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
        <HeaderWrapper>
          <Avatars className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatars>
        <DialogTitle id="form-dialog-title">Sign in!</DialogTitle>
        </HeaderWrapper>
        
        <DialogContent>
          {/* <DialogContentText>Sign in!</DialogContentText> */}
          <FormContainer>
            <Form className={classes.root} onSubmit={onFormSubmit}>
              <div>
                <Input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="standard-basic"
                  label="Email"
                />

                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="standard-basic"
                  label="Password"
                />
              </div>
              <div>
                <p>Don't have an account?</p>
                <a href="/signup">Sign up</a>
              </div>
              <Button
                type="submit"
                // href="/projects"
                onClick={() => {
                  handleClose();
                  successToast();
                }}
                color="primary"
              >
                Sign in
              </Button>
              <ToastContainer />
            </Form>
            <p>{errorMessage && errorMessage.errorCode}</p>
          </FormContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
