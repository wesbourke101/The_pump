class CreateRoutes < ActiveRecord::Migration[6.1]
  def change
    create_table :routes do |t|
      t.string :description
      t.string :directions
      t.string :picture
      t.integer :climb_id
      t.boolean :approved
      t.decimal :longitude
      t.decimal :latitude

      t.timestamps
    end
  end
end
