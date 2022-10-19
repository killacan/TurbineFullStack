json.extract! @review, :id, :body, :reviewer_id, :game_id
json.reviewer @review.reviewer.username