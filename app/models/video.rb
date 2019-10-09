class Video < ApplicationRecord
    validates :title, :description, presence: true 
    
    belongs_to :user 
    has_one_attached :vid    
end
