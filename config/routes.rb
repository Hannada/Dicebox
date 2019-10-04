Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults:  {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end 

  get 'email_check', to: "session#email_check", defaults:  {format: :json}
  
  root "static_pages#root"
end
