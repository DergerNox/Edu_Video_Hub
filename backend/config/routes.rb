Rails.application.routes.draw do
  namespace :api do
    devise_for :users,
      path: '',
      path_names: {
        sign_in: 'login',
        sign_out: 'logout',
        registration: 'signup'
      },
      controllers: {
        sessions: 'api/sessions',
        registrations: 'api/registrations'
      }
    resources :videos, only: [:index, :show, :create]
  end
end