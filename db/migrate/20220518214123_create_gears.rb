class CreateGears < ActiveRecord::Migration[6.1]
  def change
    create_table :gears do |t|
      t.decimal :number_cam
      t.string :brand_cam
      t.boolean :cam
      t.decimal :number_nut
      t.string :brand_nut
      t.boolean :nut
      t.integer :user_admin_id

      t.timestamps
    end
  end
end
