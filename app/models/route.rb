class Route < ApplicationRecord
    has_many :climbs
    has_many :user_admins, through: :climbs
    has_many :global_climbing_gears
end
