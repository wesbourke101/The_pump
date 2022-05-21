class UserAdmin < ApplicationRecord
    has_secure_password

    has_many :climbs
    has_many :routes, through: :climbs
    
    has_many :gears

end
