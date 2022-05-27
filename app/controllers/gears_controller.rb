class GearsController < ApplicationController
    before_action :findGear, only: [:destroy]
    def index
        render json: Gear.all, status: :ok
    end
    def create
        newGear = Gear.create!(gear_params)
        render json: newGear, status: :created
    end
    def destroy
        @gearFound.destroy
        #  head :no_content
        render json: @gearFound, status: :accepted
    end
   
   private
   #goes under private
    def gear_params
        params.permit(:number_cam, :brand_cam, :cam, :number_nut, :brand_nut, :nut, :user_admin_id)
    end
    #to be used with show,update and destroy
    def findGear
        @gearFound = Gear.find(params[:id])
    end
end
