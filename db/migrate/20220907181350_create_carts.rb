class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.references :user, foreign_key: true, null: false
      t.references :game, foreign_key: true, null: false

      t.timestamps
    end
  end
end
