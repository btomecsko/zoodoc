class AppointmentsController < ApplicationController

    def create
        appt = Appointment.create!(appt_params)
        render json: appt, status: :created
    end
    

    private

    def appt_params
        params.permit(:appt_time, :pet_id, :doctor_id, :title)
    end

end

#appointment.pet.user
    #if appointment.pet.user_id == @current_user.id