@carts.map do |cart_item| 
    json.set! cart_item.id do
        json.extract! cart_item, :id, :user_id, :game_id
        json.game cart_item.game.name
        json.photoUrls cart_item.game.images.map {|image| image.url}
    end
end