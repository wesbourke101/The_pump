class ClimbsController < ApplicationController

    def index
        render json: Climb.all, status: :ok
    end

    def climberReturn
        render json: Climb.find(params[:id])
    end    
end

