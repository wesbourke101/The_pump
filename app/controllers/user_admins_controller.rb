class UserAdminsController < ApplicationController
  # skip_before_action :authorized, only: [:index, :create]
  before_action :find_user_admin, only: [:update]
  
  def index
    render json: UserAdmin.all, status: :ok
  end 

  def create
    newUser = UserAdmin.create!(var_params)
    render json: newUser, status: :created
  end

  def update
  #don't forget to add before action
    @user_data.update!(var_params)
    render json: @user_data, status: :accepted
  end
  
  private
  #goes under private
  def var_params
    params.permit(:first_name, :last_name, :user_name, :password, :preferred_climbing_style, :is_admin, :password_confirmation)
  end

  #to be used with show,update and destroy
  def find_user_admin
    @user_data = UserAdmin.find(params[:id])
   end
 
  
end
