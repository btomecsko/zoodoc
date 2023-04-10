class AppointmentsController < ApplicationController

    def index
        appts = Appointment.all
        render json: appts
    end

    def show
        appt = find_appt
        render json: appt
    end

    def create
        appt = Appointment.create!(appt_params)
        render json: appt, status: :created
    end
    
    def update
        appt = find_appt
        appt.update(appt_params)
        render json: appt, status: :accepted
    end
    
    def destroy
        appt = find_appt
        appt.destroy
        head :no_content
    end

    private

    def find_appt
        Appointment.find(params[:id])
    end

    def appt_params
        params.permit(:appt_time, :pet_id, :doctor_id, :title)
    end
end

#appointment.pet.user
    #if appointment.pet.user_id == @current_user.id