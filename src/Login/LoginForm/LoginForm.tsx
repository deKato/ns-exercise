import React, { useContext, useState } from "react";
import Button from "../../Common/Button/Button";
import FormInput from "../../Common/Form/FormInput";
import AuthContext from "../../store/auth/AuthContext";
import { StyledLoginError } from "./LoginForm.styled";

const checkIfValueEmpty = (value: string) => {
  return !value || value.trim().length === 0;
};

const LoginForm = () => {
  const authCtx = useContext(AuthContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const isUsernameEmpty = checkIfValueEmpty(username);
    const isPasswordEmpty = checkIfValueEmpty(password);

    if (isUsernameEmpty || isPasswordEmpty) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  };

  const showErrors = () => {
    if (checkIfValueEmpty(username)) {
      setUsernameError("Username is required");
    }

    if (checkIfValueEmpty(password)) {
      setPasswordError("Password is required");
    }
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      authCtx.login(username.trim(), password.trim());
    } else {
      showErrors();
    }
  };

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputs: { [key: string]: () => void } = {
      username: () => {
        setUsernameError("");
        setUsername(e.target.value);
      },
      password: () => {
        setPasswordError("");
        setPassword(e.target.value);
      },
    };
    inputs[e.target.name]();
    validateForm();
  };

  return (
    <>
      {authCtx.loginError && (
        <StyledLoginError>Invalid username or password</StyledLoginError>
      )}
      <form onSubmit={onSubmitHandler} style={{ width: "90%" }}>
        <FormInput
          type="text"
          errorMessage={usernameError}
          value={username}
          name={"username"}
          placeholder={"Username"}
          onChange={onInputChangeHandler}
        />
        <FormInput
          type={"password"}
          errorMessage={passwordError}
          value={password}
          name={"password"}
          placeholder={"Password"}
          onChange={onInputChangeHandler}
        />
        <Button title="Login" type="submit" disabled={authCtx.loginInProgress}>
          {authCtx.loginInProgress ? "Logging in...." : "Login"}
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
