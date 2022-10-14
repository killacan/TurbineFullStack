class EditUsers < ActiveRecord::Migration[7.0]
  def change
      change_table :users do |t|
        t.text :bio, null: false, default: ''
        t.string :profile_pic_url, default: ''
      end
  end
end
