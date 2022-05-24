class ClimbSerializer < ActiveModel::Serializer
  attributes :id, :user_admin_id, :route_id, :user_admin_id, :comment
  belongs_to :user_admin
  
end
