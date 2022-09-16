@users.each do |user|
    user.set! user.id do
        user.extract! user, :id, :username, :email
    end
end