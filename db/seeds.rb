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

  game1 = Game.create!(
    name: 'Cult of the Lamb',
    description: 'Start your own cult in a land of false prophets, venturing out into diverse and mysterious regions to build a loyal community of woodland Followers and spread your Word to become the one true cult.',
    uploader_id: 3
  )

  file = URI.open('https://turbine-seeds-aa.s3.us-west-1.amazonaws.com/lamb2.jpg')

  game1.images.attach(io: file, filename: 'lamb2.jpg')

  Game.create!(
    name: 'Eastward',
    description: 'Welcome to the charming world of Eastward - population declining! Journey through a society on the brink of collapse. Discover delightful towns, strange creatures and even stranger people! Wield a trusty frying pan and mystic powers on an adventure into the unknown…',
    uploader_id: 2
  )

  Game.create!(
    name: 'Jedi Fallen Order',
    description: 'A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, a 3rd person action-adventure title from Respawn. An abandoned Padawan must complete his training, develop new powerful Force abilities, and master the art of the lightsaber - all while staying one step ahead of the Empire.',
    uploader_id: 1
  )

  Game.create!(
    name: 'Satisfactory',
    description: 'Satisfactory is a first-person open-world factory building game with a dash of exploration and combat. Play alone or with friends, explore an alien planet, create multi-story factories, and enter conveyor belt heaven!',
    uploader_id: 5
  )

  Game.create!(
    name: 'Squadrons',
    description: 'Master the art of starfighter combat in the authentic piloting experience STAR WARS™: Squadrons. Feel the adrenaline of first-person multiplayer space dogfights alongside your squadron, and buckle up in a thrilling STAR WARS™ story.',
    uploader_id: 4
  )

  Game.create!(
    name: 'Steelrising',
    description: "Paris, 1789. The French Revolution has been suppressed with bloodshed by Louis XVI and his merciless mechanical army. Aegis, a mysterious automaton masterpiece, must confront the king's army alone to save history in this challenging action-RPG.",
    uploader_id: 6
  )

  Game.create!(
    name: 'Temtem',
    description: "Temtem is a massively multiplayer creature-collection adventure. Seek adventure in the lovely Airborne Archipelago alongside your Temtem squad. Catch every Temtem, battle other tamers, customize your house, join a friend's adventure or explore the dynamic online world.",
    uploader_id: 7
  )

  Game.create!(
    name: 'Rimworld',
    description: 'A sci-fi colony sim driven by an intelligent AI storyteller. Generates stories by simulating psychology, ecology, gunplay, melee combat, climate, biomes, diplomacy, interpersonal relationships, art, medicine, trade, and more.',
    uploader_id: 8
  )

  Game.create!(
    name: 'Spiderman Remastered',
    description: "In Marvel’s Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel’s New York. Web-swing through vibrant neighborhoods and defeat villains with epic... ",
    uploader_id: 9
  )






  # More users
  # 10.times do 
  #   User.create!({
  #     username: Faker::Internet.unique.username(specifier: 3),
  #     email: Faker::Internet.unique.email,
  #     password: 'password'
  #   }) 
  # end

  puts "Done!"
end