import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { addPet } from "../actions/pets";

import styled from "styled-components";
import Button from "../styles/Button";
import Error from "../styles/Error";
import Input from "../styles/Input";
import FormField from "../styles/FormField";
import Label from "../styles/Label";
//import Textarea from "../styles/TextArea";

const AddPet = () => {

  const initialState = {
    name: "",
    petType: "",
    age: 0
  }  
  const [ formData, setFormData ] = useState(initialState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(value)
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e) {
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
            <Label htmlFor="petType">Pet Type</Label>
            <select id="petType" name="petType" value={formData.petType} onChange={ handleChange }>
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
          <FormField>
            <Error />
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
