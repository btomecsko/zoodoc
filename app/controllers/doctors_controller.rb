class DoctorsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        doctors = Doctor.all
        render json: doctors
    end
end
