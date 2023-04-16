class DoctorsController < ApplicationController

    skip_before_action :authorize, only: [:index]
    def index
        doctors = Doctor.all
        render json: doctors
    end

    def show
        doctor = find_doctor
        render json: doctor, include: :appointments
    end

    private

    def find_doctor
        Doctor.find(params[:id])
    end
end
