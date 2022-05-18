Climb.destroy_all
Gear.destroy_all
Rout.destroy_all
User_admmin.destroy_all

50.times do
    Climb.create(user_admin_id: rand(1...50), route_id: rand(1...50), comment: Faker::Quote, star_rating: rand(1...5))
end
50 times do
    Gear.create(number_cam: rand(1...12), brand_cam: Faker::Ancient, cam: Faker::Boolean)
end    

