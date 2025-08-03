Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    resources :videos, only: [:index, :show, :create]
  end

  get "up" => "rails/health#show", as: :rails_health_check
  # root "posts#index"
end
