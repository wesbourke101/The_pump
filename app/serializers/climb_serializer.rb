class ClimbSerializer < ActiveModel::Serializer
  attributes :id, :user_admin_id, :route_id, :user_admin_id, :comment, :star_rating
  belongs_to :user_admin
  belongs_to :route
  
end
