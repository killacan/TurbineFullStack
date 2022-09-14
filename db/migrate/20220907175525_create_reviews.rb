class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.references :game, foreign_key: true, null: false
      t.references :reviewer, foreign_key: { to_table: :users }, null: false

      t.timestamps
    end
  end
end
