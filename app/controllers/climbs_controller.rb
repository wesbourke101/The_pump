class ClimbsController < ApplicationController

    def index
        render json: Climb.all, status: :ok
    end
    
    def create
    new_climb = Climb.create!(var_params)
        render json: new_climb, status: :created
    end

    def climberReturn
        render json: Climb.find(params[:id])
    end 
   
   private
   #goes under private
   def var_params
    params.permit(:user_admin_id, :route_id, :comment)
   end
end

