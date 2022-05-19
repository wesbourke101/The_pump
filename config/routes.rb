Rails.application.routes.draw do
  
  resources :climbs
  resources :routes
  resources :gears
  resources :user_admins
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"
end
