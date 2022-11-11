# TurbineFullStack

Hello and welcome to the project! This is a fullstack application built on a React frontend and Ruby on Rails backend. 

## MVPs 

The primary functions of the website are:

1. ## Hosting on Heroku
	- Website will be listed and functional.
2. ## New Account Creation, Login, and Demo Login
	- Users will be able to create an account and sign in. 
	- Users will be able to log in to a dummy account to view the website as if signed in without creating an account. 
	- Users will not be able to post games or reviews without an account. 
	- Users should also be able to add friends.
3. ## Buying Games
	- Arguable one of the most important features other than being able to sign in. Website will have an almost functional purchase features
4. ## Shopping Cart and Checkout.
	- After adding a game to the cart, customer will be able to do all of the things that lead to checkout. 
5. ## User Reviews 
	- Users will be able to leave reviews of a game, and there will be a scoring system based on total reviews. 
		- This hopefully will be separated by recent reviews, and all time. 
	- Users will be able to to create, update, and delete their own reviews.
	- Everybody will be able to see reviews of games. 
1. ## User Account customization 
	- Users should be able to set a profile photo, and a description. 
	- Ideally there will be other customizations such as a animated background. 
2. ## Production Readme

# Backend Routes

```ruby

namespace :api, defaults: { format: :json } do
  resources :users, only: [:create, :destroy, :show, :update, :index]
  resources :games, only: [:show, :index]
  resources :reviews, only: [:create, :destroy, :update, :index]
  resources :carts, only: [:create, :destroy, :index, :show]
  resource :session, only: [:create, :destroy, :show]
end

```

- Users
	- create, user creation
	- destroy, user deletion
	- show, user show page/profile page
	- edit, where you can edit info about a user. 
- Games
	- games/:gameId
		- shows a game, and gets its reviews
	- games index
		- shows all games
- reviews
	- user is able to create, destory, and update reviews that they have authored.

