import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { loadDoctors } from "../actions/doctors";
import { addAppt } from "../actions/appointments";

import styled from "styled-components";
import Button from "../styles/Button";
//import Error from "../styles/Error";
import Input from "../styles/Input";
import FormField from "../styles/FormField";
import Label from "../styles/Label";

const AddAppt = () => {
  const { pets } = useSelector((store) => store.usersReducer);
  const { doctors } = useSelector((store) => store.doctorsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    appt_time: "",
    pet_id: "",
    doctor_id: "",
  };
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    dispatch(loadDoctors());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAppt(formData, navigate));
  };

  const petList = pets.map((pet) => (
    <option key={pet.id} value={pet.id}>
      {pet.name}
    </option>
  ));
  const docList = doctors.map((doc) => (
    <option key={doc.id} value={doc.id}>
      {doc.name}
    </option>
  ));

  return (
    <Wrapper>
      <WrapperChild>
      <h2>Schedule an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="appt_time">Appointment Time:</Label>
            <Input
              type="datetime-local"
              id="appt_time"
              name="appt_time"
              value={formData.appt_time}
              onChange={handleInputChange}
            />
          </FormField>
          <FormField>
            <Label htmlFor="pet_id">Pet:</Label>
            <select
              id="pet_id"
              name="pet_id"
              value={formData.pet_id}
              onChange={handleInputChange}
            >
              <option value="">Select a pet</option>
              {petList}
            </select>
          </FormField>
          <FormField>
            <Label htmlFor="doctor_id">Doctor:</Label>
            <select
              id="doctor_id"
              name="doctor_id"
              value={formData.doctor_id}
              onChange={handleInputChange}
            >
              <option value="">Select a Doctor</option>
              {docList}
            </select>
          </FormField>
          <Button>Schedule</Button>
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

export default AddAppt;
