class CreateGameTags < ActiveRecord::Migration[7.0]
  def change
    create_table :game_tags do |t|
      t.references :game, foreign_key: true, null: false
      t.references :tag, foreign_key: true, null: false

      t.timestamps
    end
  end
end
