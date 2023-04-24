class PetsController < ApplicationController

    def show
        pet = find_pet
        render json: pet, include: :appointments
    end

    def create
        pet = @current_user.pets.create!(pet_params)
        render json: pet, status: :created
    end
    
    def update
        pet = find_pet
        if pet.user_id == @current_user.id
            pet.update(pet_params)
            render json: pet, status: :accepted
        else
            not_authorized
        end
    end
    
    def destroy
        pet = find_pet
        if pet.user_id == @current_user.id
            pet.destroy
            head :no_content
        else
            not_authorized
        end
    end

    private

    def find_pet
        Pet.find(params[:id])
    end

    def pet_params
        params.permit(:petType, :name, :age, :image, :user_id)
    end

    def not_authorized
        render json: { errors: ["Not authorized"] }, status: :unauthorized
    end
end
