class RouteSerializer < ActiveModel::Serializer
  attributes :id, :description, :directions, :picture, :climb_id, :approved, :longitude, :latitude, :route_name
  has_many :climbs
end
