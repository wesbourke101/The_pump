class RoutesController < ApplicationController
    before_action :beforeRoute, only: [:destroy, :update]
    def index
        render json: Route.all, status: :ok
    end
    def create
        route = Route.create!(var_params)
        render json: route, status: :created
    end
    def destroy
        @findRoute.destroy
        # head :no_content
        render json: @findRoute, status: :accepted
    end
    def update
        @findRoute.update!(var_params)
        render json: @findRoute, status: :accepted
    end
    
    private
    def var_params
        params.permit(:approved, :description, :latitude, :longitude, :route_name, :directions)
    end
    #to be used with show,update and destroy
    def beforeRoute
        @findRoute = Route.find(params[:id])
    end
end
