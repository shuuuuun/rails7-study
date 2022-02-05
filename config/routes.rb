Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root 'home#index'

  resources :posts

  resources :rooms do
    resources :messages
  end
end
