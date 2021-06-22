//Outer Dependencies
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

//Inner Dependencies
import { fetchLogIn } from "../reducers/users";

// React-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Material UI
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

//Styled Components
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
  @media (min-width: 1400px) {
    width: 100px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  padding: 0;
`;

const Input = styled(TextField)`
  padding: 10px;
`;

const Avatars = styled(Avatar)`
  background-color: #eeca4a;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 95%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const NoAccountWrapper = styled.div`
  display: flex;
  margin: 10px 0 0;
`;
const NoAccountParagraph = styled.p`
  margin: 0;
  font-size: 12px;
`;

const SignUp = styled.a`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  margin-left: 5px;
`;

const ButtonInner = styled(Button)`
  background-color: #f5c81e;
  color: white;
  border-radius: 50px;
  border: none;
  width: 50%;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  align-items: center;
  margin-top: 30px;
`;

const InputField = styled(Input)`
  padding: 0 0px 10px;
  width: 100%;
`;

const CancelButton = styled(Button)``;

//Component
export const Signin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);

  const errorMessage = useSelector((store) => store.users.errors);
  // const user = useSelector((store) => store.users.user);

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
          <FormContainer>
            <Form className={classes.root} onSubmit={onFormSubmit}>
              <InputWrapper>
                <InputField
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="standard-basic"
                  label="Email"
                />

                <InputField
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="standard-basic"
                  label="Password"
                />
                <NoAccountWrapper>
                  <NoAccountParagraph>
                    Don't have an account?{" "}
                  </NoAccountParagraph>
                  <SignUp href="/signup"> Sign up</SignUp>
                </NoAccountWrapper>
              </InputWrapper>
              <ButtonWrapper>
                <ButtonInner type="submit" color="primary">
                  Sign in
                </ButtonInner>
              </ButtonWrapper>

              <ToastContainer />
            </Form>
            <p>{errorMessage && errorMessage.errorCode}</p>
          </FormContainer>
        </DialogContent>
        <DialogActions>
          <CancelButton onClick={handleClose} color="primary">
            Cancel
          </CancelButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};
