class UserAdminSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :profile_img, :preferred_climbing_style, :is_admin
end
