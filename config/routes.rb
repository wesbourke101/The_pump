Rails.application.routes.draw do

  resources :golbal_climbing_gears
  post "/login", to: "sessions#create"
  get "/auth", to: "sessions#show"
  delete '/logout', to: 'sessions#destroy'

  get "/climb_id/:id", to: 'climbs#climberReturn'
  
  resources :climbs
  resources :routes
  resources :gears
  resources :user_admins
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
