import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { clearErrors } from "../actions/errors";
import { loginUser } from "../actions/users";

import Button from "../styles/Button";
import Input from "../styles/Input";
import FormField from "../styles/FormField";
import Label from "../styles/Label";

const LoginForm = ({ loading }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loggedIn } = useSelector((store) => store.usersReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && loggedIn) {
      navigate("/");
    }
    return () => {
      dispatch(clearErrors());
    };
  }, [loading, loggedIn, navigate, dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    //setIsLoading(true);
    const user = { username, password };
    dispatch(loginUser(user, navigate));
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button variant="fill" color="primary" type="submit">
          Login
        </Button>
      </FormField>
    </form>
  );
};

export default LoginForm;
