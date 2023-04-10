class ApplicationController < ActionController::API
  include ActionController::Cookies

  #guard clause method useing a before_action filter to only allow wizards that are logged in based on the authorize private method
  before_action :authorize

  #error handler
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: {errors: ["Not authorized"]}, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
