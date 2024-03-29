import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { addPet } from "../actions/pets";
import { clearErrors } from "../actions/errors";

import styled from "styled-components";
import Button from "../styles/Button";
import Input from "../styles/Input";
import FormField from "../styles/FormField";
import Label from "../styles/Label";


const AddPet = ({loading}) => {
  const initialState = {
    name: "",
    petType: "",
    age: "",
    image: ""
  }  
  const [ formData, setFormData ] = useState(initialState);
  const { loggedIn } = useSelector(store => store.usersReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && !loggedIn) {
      navigate("/login");
    }
    return () => {
      dispatch(clearErrors());
    };
  }, [loading, loggedIn, navigate, dispatch]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPet(formData, navigate))
  }

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Add Your Pet</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={ formData.name }
              onChange={ handleChange }
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="age">Age</Label>
            <Input
              type="number"
              name="age"
              id="age"
              value={ formData.age }
              onChange={ handleChange }
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="image">Pet Pic</Label>
            <Input
              type="text"
              name="image"
              id="image"
              value={ formData.image }
              onChange={ handleChange }
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="petType">Pet Type</Label>
            <select id="petType" name="petType" value={formData.petType} onChange={ handleChange }>
            <option value="">Select Pet Type</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Exotic">Exotic</option>
                <option value="Avian">Avian</option>
                <option value="Pocket">Pocket</option>
                <option value="Large Animal">Large Animal</option>
            </select>
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              Add Pet
            </Button>
          </FormField>
        </form>
      </WrapperChild>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 600px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default AddPet;
