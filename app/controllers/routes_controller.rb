class RoutesController < ApplicationController
    def index
        render json: Route.all, status: :ok
    end
end
