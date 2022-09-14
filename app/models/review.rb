# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  body        :text             not null
#  game_id     :bigint           not null
#  reviewer_id :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord

    validates :body, presence: true

    belongs_to :game

    belongs_to :reviewer,
        foreign_key: :reviewer_id,
        class_name: :User


end
