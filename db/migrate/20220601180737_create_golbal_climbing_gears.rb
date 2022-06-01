class CreateGolbalClimbingGears < ActiveRecord::Migration[6.1]
  def change
    create_table :golbal_climbing_gears do |t|
      t.string :name
      t.float :number
      t.integer :route_id

      t.timestamps
    end
  end
end
