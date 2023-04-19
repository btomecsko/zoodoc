import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadDoctors } from "../actions/doctors";
import { addAppt } from "../actions/appointments";

const AddAppt = () => {
    const {user} = useSelector(store => store.usersReducer)
    const {doctors} = useSelector((store) => store.doctorsReducer);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const initialState = {
        appt_time: "",
        pet_id: 0,
        doctor_id: 0
      }
    const [ formData, setFormData ] = useState(initialState);

    useEffect(() => {
        dispatch(loadDoctors())
      }, [dispatch]);

    const handleInputChange = e => {
        const { name, value } = e.target;
        console.log(value)
        setFormData({
            ...formData,
            [name]: value
        })
      };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addAppt(formData, navigate));
      };
    
    const petList = user.pets?.map(pet => <option key={pet.id} value={ pet.id }> {pet.name} </option>)
    const docList = doctors.map(doc => <option key={doc.id} value={ doc.id }> {doc.name} </option>)

    return(
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="appt_time">Appointment Time:</label>
            <input type="datetime-local" id="appt_time" name="appt_time" value={formData.appt_time} onChange={handleInputChange}/>
            </div>
            <div>
            <label htmlFor="pet_id">Pet:</label>
        <select id="pet_id" name="pet_id" value="pet_id" onChange={handleInputChange}>
          <option value="">Select a pet</option>
          {petList}
        </select>
            </div>
            <div>
        <label htmlFor="doctor_id">Doctor:</label>
        <select id="doctor_id" name="doctor_id" value="doctor_id" onChange={handleInputChange}>
            <option value="">Select a Doctor</option>
            {docList}
        </select>
        </div>
        <button>Schedule</button>
        </form>
    )

}

export default AddAppt;

