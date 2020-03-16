Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults:  {format: :json} do 
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :videos, only: [:index, :show, :create, :destroy] do 
      resources :comments, only: [:index, :create, :update, :destroy]
    end
    get 'email_check', to: "sessions#email_check", defaults:  {format: :json}
  end 

  
  root "static_pages#root"
end


# Need to add comment routes