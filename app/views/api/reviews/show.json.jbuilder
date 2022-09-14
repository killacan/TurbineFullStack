json.extract! @review, :id, :body, :reviewer_id
json.reviewer @review.reviewer.username