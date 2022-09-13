json.extract! @game, :id, :name, :description, :uploader_id
json.photoUrls @game.images.map {|image| image.url}