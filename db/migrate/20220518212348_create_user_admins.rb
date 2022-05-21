class CreateUserAdmins < ActiveRecord::Migration[6.1]
  def change
    create_table :user_admins do |t|
      t.string :user_name
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :profile_img
      t.string :preferred_climbing_style
      t.boolean :is_admin
      
      t.timestamps
    end
  end
end
