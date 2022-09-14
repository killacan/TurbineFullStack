json.game do
    json.extract! @game, :id, :name, :description, :uploader_id
    json.photoUrls @game.images.map {|image| image.url}
end
json.reviews @game.reviews.map do |review| 
    json.extract! review, :id, :body, :reviewer_id
    json.reviewer review.reviewer.username
end

