class SessionsController < ApplicationController

    def create
        
        useradmin = UserAdmin.find_by(user_name: params[:username])
        
        if useradmin&.authenticate(params[:password])
            
            session[:user_admin_id] = useradmin.id
            render json: useradmin, status: :created
        else    
            render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
        end    
    end    
end
