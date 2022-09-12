json.extract! @game, :id, :name, :description, :uploader_id
json.photoUrl url_for(@game.images)