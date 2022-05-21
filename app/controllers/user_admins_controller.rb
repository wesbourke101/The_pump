class UserAdminsController < ApplicationController

  def index
    render json: UserAdmin.all, status: :ok
  end 

  def show
    useradmin = User.find_by(id: session[:user_admin_id])
    if useradmin
      render json: useradmin
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end
end
