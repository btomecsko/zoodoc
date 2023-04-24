import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";
import Button from "../styles/Button";
//import Error from "../styles/Error";
import Input from "../styles/Input";
import FormField from "../styles/FormField";
import Label from "../styles/Label";
import { useEffect } from "react";
import { editPet } from "../actions/pets";

const EditPet = () => {
    const {pets} = useSelector(store => store.usersReducer)
    const [ formData, setFormData ] = useState({
        name: "",
        petType: "",
        age: "",
        image: ""
    });

    console.log(pets)
    const { id }  = useParams();
    const navigate = useNavigate();
    const dispatch =  useDispatch();

    useEffect(() => {
        const petToEdit = pets.find(pet => pet.id === parseInt(id));
        setFormData({
            name: petToEdit.name,
            petType: petToEdit.petType,
            age: petToEdit.age,
            image: petToEdit.image
            });
    }, [id, pets]);

    console.log(formData)

    const handleChange = e => {
        const { name, value } = e.target;
        console.log(value)
        setFormData({
          ...formData,
          [name]: value
        })
      }
      const handleSubmit = e => {
        e.preventDefault();
        dispatch(editPet(id, formData, navigate))
      }

    return (
        <Wrapper>
          <WrapperChild>
            <h2>Edit Profile</h2>
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
                  Update
                </Button>
              </FormField>
            </form>
          </WrapperChild>
        </Wrapper>
      );
}

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

export default EditPet;