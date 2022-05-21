class Route < ApplicationRecord
    has_many :climbs
    has_many :user_admins, through: :climbs
end
