# == Schema Information
#
# Table name: game_tags
#
#  id         :bigint           not null, primary key
#  game_id    :bigint           not null
#  tag_id     :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class GameTag < ApplicationRecord
end
