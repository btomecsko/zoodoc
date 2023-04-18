

const AddAppt = () => {

    return(
        <form>
            <div>
            <label htmlFor="appt_time">Appointment Time:</label>
            <input type="datetime-local" id="appt_time" name="appt_time" />
            </div>
        </form>
    )

}

export default AddAppt;

