class RoutSerializer < ActiveModel::Serializer
  attributes :id, :description, :directions, :picture, :climb_id, :approved, :longitude, :latitude
end
