class Game < ApplicationRecord

    validates :name, presence: true, uniqueness: true
    validates :description, presence: true
    validates :uploader, presence: true

    belongs_to :uploader,
        foreign_key: :uploader_id,
        class_name: :User
    
    has_one_attached :image
end
