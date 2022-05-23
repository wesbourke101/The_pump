class RoutesController < ApplicationController
    def index
        render json: Route.all, status: :ok
    end

    def create
     route = Route.create!(var_params)
     render json: route, status: :created
    end
    
    private
    #goes under private
    def var_params
     params.permit(:approved, :description, :latitude, :longitude, :route_name)
    end
end
