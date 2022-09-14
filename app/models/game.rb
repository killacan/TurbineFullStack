# == Schema Information
#
# Table name: games
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  uploader_id :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Game < ApplicationRecord

    validates :name, presence: true, uniqueness: true
    validates :description, presence: true
    validates :uploader, presence: true

    belongs_to :uploader,
        foreign_key: :uploader_id,
        class_name: :User
    
    has_many_attached :images

    has_many :cart_items,
        foreign_key: :game_id,
        class_name: :Cart,
        dependent: :destroy

    has_many :reviews,
        foreign_key: :game_id, 
        class_name: :Review,
        dependent: :destroy

    has_many :reviewers,
        through: :reviews,
        source: :reviewer

    
end
