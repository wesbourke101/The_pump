class CreateClimbs < ActiveRecord::Migration[6.1]
  def change
    create_table :climbs do |t|
      t.integer :user_admin_id
      t.integer :route_id
      t.string :comment
      t.integer :star_rating

      t.timestamps
    end
  end
end
