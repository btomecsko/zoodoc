import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { clearErrors } from '../actions/errors';
import { signUpUser } from '../actions/users';

import Button from "../styles/Button"; 
import Input from "../styles/Input";
import FormField from "../styles/FormField";
import Label from "../styles/Label";

function SignUpForm({loading}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loggedIn } = useSelector((store) => store.usersReducer);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // code here is what happens on mount
    if(!loading && loggedIn) {
      navigate("/")
    }
    return () => {
      dispatch(clearErrors())
    }
  }, [loading, loggedIn, navigate, dispatch])

  function handleSubmit(e) {
    e.preventDefault();
    const user = { firstName, lastName, username, password }
    dispatch(signUpUser(user, navigate))
  }

  return (
    <form onSubmit={handleSubmit}>
        <FormField>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          type="text"
          id="firstName"
          autoComplete="off"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormField>
      <FormField>
      <Label htmlFor="lastName">Last Name</Label>
        <Input
          type="text"
          id="lastName"
          autoComplete="off"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormField>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Button type="submit">Sign Up</Button>
      </FormField>
    </form>
  );
}

export default SignUpForm;