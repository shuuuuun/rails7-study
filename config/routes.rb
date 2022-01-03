Rails.application.routes.draw do
  resources :rooms
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root 'home#index'

  resources :posts
end
