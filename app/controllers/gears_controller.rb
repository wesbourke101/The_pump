class GearsController < ApplicationController

    def index
        render json: Gear.all, status: :ok
    end
end
