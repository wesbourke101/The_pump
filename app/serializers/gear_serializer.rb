class GearSerializer < ActiveModel::Serializer
  attributes :id, :number_cam, :brand_cam, :cam, :number_nut, :brand_nut, :nut, :user_admin_id
  belongs_to :user_admin
end
