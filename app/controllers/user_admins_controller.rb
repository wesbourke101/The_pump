class UserAdminsController < ApplicationController

  def index
    render json: UserAdmin.all, status: :ok
  end 

  
end
