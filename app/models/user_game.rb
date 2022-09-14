# == Schema Information
#
# Table name: user_games
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  game_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class UserGame < ApplicationRecord

    belongs_to :user

    belongs_to :game
end
