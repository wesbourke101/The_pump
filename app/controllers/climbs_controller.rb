class ClimbsController < ApplicationController

    def index
        render json: Climb.all, status: :ok
    end
end

