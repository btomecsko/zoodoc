import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import {signUpUser} from '../actions/users';

import Button from "../styles/Button"; 
import Input from "../styles/Input";
import FormField from "../styles/FormField";
import Label from "../styles/Label";

function SignUpForm({ setLoad }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const user = { firstName, lastName, username, password }
    dispatch(signUpUser(user, setLoad))
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
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
    </form>
  );
}

export default SignUpForm;