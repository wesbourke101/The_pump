class ClimbsController < ApplicationController
    before_action :beforeClimb, only: [:destroy, :update]
    def index
        render json: Climb.all, status: :ok
    end
    def create
        new_climb = Climb.create!(var_params)
        render json: new_climb, status: :created
    end
    def destroy
        @findClimb.destroy
        # head :no_content
        render json: @findClimb, status: :accepted
    end
    def update
        @findClimb.update!(var_params)
        render json: @findClimb, status: :accepted
    end
    
    private
    #goes under private
    def var_params
        params.permit( :comment, :star_rating, :id, :climb)
    end
    def beforeClimb
        @findClimb = Climb.find(params[:id])
    end
end

