json.reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :body, :game_id, :reviewer_id, :created_at, :updated_at
    end
  end
end
# json.game do
#   @reviews.game.map do |game|
#     json.set! game.id do
#       json.extract! game, :id, :name, :description, :uploader_id, :price
#     end
#   end
# end