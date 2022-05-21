Climb.destroy_all
Gear.destroy_all
Route.destroy_all
UserAdmin.destroy_all

50.times do
    Route.create!(description: Faker::Quotes::Chiquito.expression, directions: Faker::Address.street_address, picture: "null" , climb_id: rand(1...50), approved: true, longitude: Faker::Address.longitude, latitude: Faker::Address.latitude)
end  
puts "Routes created" 
UserAdmin.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, profile_img: "null", preferred_climbing_style: (['traditional', 'sport', "bouldering"]).sample, is_admin: Faker::Boolean, user_name: "wes123", password: '123' )
50.times do
    UserAdmin.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, profile_img: "null", preferred_climbing_style: (['traditional', 'sport', "bouldering"]).sample, is_admin: Faker::Boolean, user_name: Faker::Name.unique.name, password: '123' )
end    
puts "userAdmin created"
50.times do
    Gear.create!(number_cam: ([1,2,3,4,5,6,7]).sample, brand_cam: Faker::Ancient.primordial, cam: true, user_admin_id: rand(1...50))
end    
puts "Gear created" 
50.times do
    Climb.create!(user_admin_id: rand(1...50), route_id: rand(1...50), comment: Faker::Quote.famous_last_words, star_rating: rand(1...5))
end
puts "Climbs created"


puts "seeding completed"

