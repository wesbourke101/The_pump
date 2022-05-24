class SessionsController < ApplicationController
    # skip_before_action :authorized, only: :create

    def create
        useradmin = UserAdmin.find_by(user_name: params[:username])
            if useradmin&.authenticate(params[:password])
                session[:user_admin_id] = useradmin.id
                render json: useradmin, status: :created
            else    
                render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
            end    
    end   

    def show
        client = UserAdmin.find(session[:user_admin_id])
            if client
                render json: client
            else
                render json: { error: "Not authorized" }, status: :unauthorized
            end
    end

    def destroy
        session.delete :user_admin_id
    end
end
