class EditUsersIcons < ActiveRecord::Migration[7.0]
  def up
    remove_column :users, :profile_pic_url, :string, default: ""
    add_column :users, :profile_pic_url, :integer, default: 0
  end

  def down
    remove_column :users, :profile_pic_url, :integer, default: 0
    add_column :users, :profile_pic_url, :string, default: ''
  end
end
