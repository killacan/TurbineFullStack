json.game do
    json.extract! @game, :id, :name, :description, :uploader_id
    json.photoUrls @game.images.map {|image| image.url}
end
json.reviews do 
    @game.reviews.map do |review| 
        json.set! review.id do
            json.extract! review, :id, :body, :reviewer_id
            json.reviewer review.reviewer.username
        end
    end
end

