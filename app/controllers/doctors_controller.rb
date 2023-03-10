class DoctorsController < ApplicationController

    def index
        doctors = Doctor.all
        render json: doctors, include: :appointments
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
