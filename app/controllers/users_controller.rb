class UsersController < ApplicationController
    #filter to skip the authorization clause to allow a user to be created
    skip_before_action :authorize, only: [:create]
    #GET /me
    def show
        render json: @current_user
    end

    #POST /users to create new users
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
  
    private

    def user_params
        params.permit(:firstName, :lastName, :username, :password)
    end

end