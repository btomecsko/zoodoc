class PetsController < ApplicationController

    def index
        pets = Pet.all
        render json: pets, include: :appointments
    end

    def show
        pet = find_pet
        render json: pet, include: :appointments
    end

    def create
        pet = Pet.create!(pet_params)
        render json: pet, status: :created
    end
    
    def update
        pet = find_pet
        pet.update(pet_params)
        render json: pet, status: :accepted
    end
    
    def destroy
        pet = find_pet
        pet.destroy
        head :no_content
    end

    private

    def find_pet
        Pet.find(params[:id])
    end

    def pet_params
        params.permit(:petType, :name, :age, :user_id)
    end
end
