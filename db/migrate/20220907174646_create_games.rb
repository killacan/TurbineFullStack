class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :name, null: false, index: { unique: true }
      t.string :description, null: false
      t.float :price, null: false
      t.references :uploader, foreign_key: { to_table: :users }, null: false

      t.timestamps
    end
  end
end
