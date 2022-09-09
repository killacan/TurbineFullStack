@games.each do |game|
    json.set! game.id do
        json.extract! game, :name,
    end
end