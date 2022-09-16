require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Game.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:


  



  User.create!(
    username: 'Demo-lition', 
    email: 'demo@user.io', 
    password: 'password'
  )

  User.create!(
    username: 'Tatoo Tim',
    email: 'TimtheTatMan@gmail.com',
    password: 'password'
  )

  User.create!(
    username: 'Llama Jim',
    email: 'llamatime@gmail.com',
    password: 'password'
  )

  User.create!(
    username: 'Will the Real Franklin Please Stand Up',
    email: 'franklin@email.com',
    password: 'password'
  )

  User.create!(
    username: 'Factory Man',
    email: 'builder@builder.com',
    password: 'password'
  )

  User.create!(
    username: 'Viva la Revolution',
    email: 'eattherich@disroot.com',
    password: 'password'
  )

  User.create!(
    username: 'Temtem Master',
    email: 'lemmings@gmail.com',
    password: 'password'
  )

  User.create!(
    username: 'Survivor of the Cataclysm',
    email: 'cataclysmic@gmail.com',
    password: 'password'
  )

  User.create!(
    username: 'The Great and Powerful',
    email: 'poweroverwhelming@email.com',
    password: 'password'
  )



puts "creating games"

  lambGame = Game.create!(
    name: 'Cult of the Lamb',
    description: 'Start your own cult in a land of false prophets, venturing out into diverse and mysterious regions to build a loyal community of woodland Followers and spread your Word to become the one true cult.',
    uploader_id: 3,
    price: 24.99
  )

  lambHeader = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/LambHeader.jpg'), filename: 'LambHeader.jpg'}


  lamb1 = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/lamb1.jpg'), filename: 'lamb1.jpg'}
  

  lamb2 = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/lamb2.jpg'), filename: 'lamb2.jpg'}
  

  lamb3 = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/lamb3.jpg'), filename: 'lamb3.jpg'}
  
  lamb4 = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/lamb4.jpg'), filename: 'lamb4.jpg'}

  lamb5 = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/lamb5.jpg'), filename: 'lamb5.jpg'}

  lamb6 = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/lamb6.jpg'), filename: 'lamb6.jpg'}

  lamb7 = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/lamb7.jpg'), filename: 'lamb7.jpg'}

  lamb8 = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/lamb8.jpg'), filename: 'lamb8.jpg'}

  lamb9 = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/lamb9.jpg'), filename: 'lamb9.jpg'}

  lamb10 = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/lamb10.jpg'), filename: 'lamb10.jpg'}

  lamb11 = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/lamb11.jpg'), filename: 'lamb11.jpg'}

  lamb12 = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/lamb12.jpg'), filename: 'lamb12.jpg'}

  lamb13 = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/lamb13.jpg'), filename: 'lamb13.jpg'}

  lamb14 = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/lamb14.jpg'), filename: 'lamb14.jpg'}

  lamb15 = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/lamb15.jpg'), filename: 'lamb15.jpg'}

  lamb16 = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/lamb16.jpg'), filename: 'lamb16.jpg'}

  lamb17 = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/lamb17.jpg'), filename: 'lamb17.jpg'}

  lamb18 = {io: URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb/lamb18.jpg'), filename: 'lamb18.jpg'}

  lambGame.images.attach([lambHeader, lamb1, lamb2, lamb3, lamb4, lamb5, lamb6, lamb7, lamb8, lamb9, lamb10, lamb11, lamb12, lamb13, lamb14, lamb15, lamb16, lamb17, lamb18])

  eastGame = Game.create!(
    name: 'Eastward',
    description: 'Welcome to the charming world of Eastward - population declining! Journey through a society on the brink of collapse. Discover delightful towns, strange creatures and even stranger people! Wield a trusty frying pan and mystic powers on an adventure into the unknown…',
    uploader_id: 2,
    price: 24.99
  )

  puts "eastward"

  eastArr = [{io: URI.open("https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/Eastward/EastwardHeader.jpg"), filename: "EastwardHeader.jpg"}]

  # 11.times do |index|
  #   eastimg = {io: URI.open("https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/Eastward/Eastward#{index + 1}.jpg"), filename: "Eastward#{index + 1}.jpg"}
  #   eastArr << eastimg
  # end

  eastGame.images.attach(eastArr)

  jedi_fallen = Game.create!(
    name: 'Jedi Fallen Order',
    description: 'A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, a 3rd person action-adventure title from Respawn. An abandoned Padawan must complete his training, develop new powerful Force abilities, and master the art of the lightsaber - all while staying one step ahead of the Empire.',
    uploader_id: 1,
    price: 39.99
  )

  jediArr = [{io: URI.open("https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/Jedi_Fallen_Order/FallenHeader.jpg"), filename: "FallenHeader.jpg"}]

# 15.times do |index|
#   jediArr << {io: URI.open("https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/Jedi_Fallen_Order/Fallen#{index + 1}.jpg"), filename: "Fallen#{index + 1}.jpg"}
# end

jedi_fallen.images.attach(jediArr)

  satisfactory = Game.create!(
    name: 'Satisfactory',
    description: 'Satisfactory is a first-person open-world factory building game with a dash of exploration and combat. Play alone or with friends, explore an alien planet, create multi-story factories, and enter conveyor belt heaven!',
    uploader_id: 5,
    price: 29.99
  )

  satisfactoryArr = [{io: URI.open("https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/Satisfactory/SatisfactoryHeader.jpg"), filename: "SatisfactoryHeader.jpg"}]

# 16.times do |index|
#   satisfactoryArr << {io: URI.open("https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/Satisfactory/Satisfactory#{index + 1}.jpg"), filename: "Satisfactory#{index + 1}.jpg"}
# end

satisfactory.images.attach(satisfactoryArr)

  puts "satisfactory"

  squadrons = Game.create!(
    name: 'Squadrons',
    description: 'Master the art of starfighter combat in the authentic piloting experience STAR WARS™: Squadrons. Feel the adrenaline of first-person multiplayer space dogfights alongside your squadron, and buckle up in a thrilling STAR WARS™ story.',
    uploader_id: 4,
    price: 39.99
  )

  squadronsArr = [{io: URI.open("https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/Squadrons/SquadronsHeader.jpg"), filename: "SquadronsHeader.jpg"}]

  # 9.times do |index|
  #   squadronsArr << {io: URI.open("https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/Squadrons/Squadrons#{index + 1}.jpg"), filename: "Squadrons#{index + 1}.jpg"}
  # end

  squadrons.images.attach(squadronsArr)

  steelrising = Game.create!(
    name: 'Steelrising',
    description: "Paris, 1789. The French Revolution has been suppressed with bloodshed by Louis XVI and his merciless mechanical army. Aegis, a mysterious automaton masterpiece, must confront the king's army alone to save history in this challenging action-RPG.",
    uploader_id: 6,
    price: 49.99
  )

  steelrisingArr = [{io: URI.open("https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/Steelrising/SteelHeader.jpg"), filename: "SteelHeader.jpg"}]

  # 6.times do |index|
  #   steelrisingArr << {io: URI.open("https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/Steelrising/Steel#{index + 1}.jpg"), filename: "Steel#{index + 1}.jpg"}
  # end

  steelrising.images.attach(steelrisingArr)


  temtemGame = Game.create!(
    name: 'Temtem',
    description: "Temtem is a massively multiplayer creature-collection adventure. Seek adventure in the lovely Airborne Archipelago alongside your Temtem squad. Catch every Temtem, battle other tamers, customize your house, join a friend's adventure or explore the dynamic online world.",
    uploader_id: 7,
    price: 44.99
  )

  temtemArr = [{io: URI.open("https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/Temtem/TemtemHeader.jpg"), filename: "TemtemHeader.jpg"}]

  # 8.times do |index|
  #   temtemArr << {io: URI.open("https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/Temtem/Temtem#{index + 1}.jpg"), filename: "Temtem#{index + 1}.jpg"}
  # end

  temtemGame.images.attach(temtemArr)

  rimGame = Game.create!(
    name: 'Rimworld',
    description: 'A sci-fi colony sim driven by an intelligent AI storyteller. Generates stories by simulating psychology, ecology, gunplay, melee combat, climate, biomes, diplomacy, interpersonal relationships, art, medicine, trade, and more.',
    uploader_id: 8,
    price: 34.99
  )

  rimArr = [{io: URI.open("https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/Rimworld/RimHeader.jpg"), filename: "RimHeader.jpg"}]

  # 20.times do |index|
  #   rimArr << {io: URI.open("https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/Rimworld/Rim#{index + 1}.jpg"), filename: "Rim#{index + 1}.jpg"}
  # end

  rimGame.images.attach(rimArr)

  spdrGame = Game.create!(
    name: 'Spiderman Remastered',
    description: "In Marvel’s Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel’s New York. Web-swing through vibrant neighborhoods and defeat villains with epic... ",
    uploader_id: 9,
    price: 59.99
  )

  spdrArr = [{io: URI.open("https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/Spiderman_Remastered/SpiderCover.jpg"), filename: "SpiderCover.jpg"}]

  # 10.times do |index|
  #   spdrArr << {io: URI.open("https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/Spiderman_Remastered/Spider#{index + 1}.jpg"), filename: "Spider#{index + 1}.jpg"}
  # end

  spdrGame.images.attach(spdrArr)

  Review.create(
    game_id: 1,
    reviewer_id: 1,
    body: "This game is amazing. I love the story and the gameplay. I can't wait for the next one!"
  )

  Review.create(
    game_id: 1,
    reviewer_id: 2,
    body: "It is great that such a small studio is able to make such an amazing game! I hope that they make another game!"
  )

  Review.create(
    game_id: 3,
    reviewer_id: 3,
    body: "Jedi Fallen Order is a masterpice. I love Star Wars and always have. I think that they did this universe justice."
  )

  Review.create(
    game_id: 3,
    reviewer_id: 4,
    body: "story of the game is very well done. I did encounter some glitches while playing but nothing that ruined the experience for me. If you don't mind sometimes getting stuck because the floor colision detection is not very good, I would highly reccomend."
  )

  Review.create(
    game_id: 2,
    reviewer_id: 3,
    body: "A very artistic game with a great story. If you get this game, get ready to feel completely absorbed into the world."
  )

  Review.create(
    game_id: 4,
    reviewer_id: 5,
    body: "Satisfactory is a beautiful game that takes production to the next level. You will never run out of things to do. Your production will never be enough, and your factory can always be made more efficient. I love this game."
  ) 

  Review.create(
    game_id: 5,
    reviewer_id: 6,
    body: "Squadrons is a rough game to play. While I love that they don't have SBMM, it sometimes makes the game more difficult to play. I will get into a lobby with a lot of good pilots and I will get destroyed. They need a ranked mode for all the sweaty pilots out there."
  )

  puts "Done!"
end