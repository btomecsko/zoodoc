class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
    
    #login session
      def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user
        else
          render json: { errors: ["Wrong information, are you sure you belong here?"] }, status: :unauthorized
        end
      end
    
      #logout session
      def destroy
        session.delete :user_id
        head :no_content
      end
    
end