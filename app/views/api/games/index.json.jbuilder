@games.each do |game|
    json.set! game.id do
        json.extract! game,:id, :name, :description, :uploader_id
    end
end