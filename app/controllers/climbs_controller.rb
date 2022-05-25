class ClimbsController < ApplicationController
    before_action :beforeClimb, only: [:destroy]
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
    def destroy
        @findClimb.destroy
        # head :no_content
        render json: @findClimb, status: :accepted
    end
    
    private
    #goes under private
    def var_params
        params.permit(:user_admin_id, :route_id, :comment)
    end
    def beforeClimb
        @findClimb = Climb.find(params[:id])
    end
end

