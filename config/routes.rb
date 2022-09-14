Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  # post 'api/test', to: 'application#test'
  # test.
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :destroy, :show, :update]
    resources :games, only: [:show, :index]
    resources :reviews, only: [:create, :destroy, :update]
    resource :session, only: [:create, :destroy, :show]
  end

  get '*path', to: "static_pages#frontend_index"
end