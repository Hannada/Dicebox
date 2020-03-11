class Video < ApplicationRecord
    validates :title, :description, presence: true 
    
    belongs_to :user 
    has_many :comments 
    has_one_attached :vid

    def user_name
        user.username
    end

end
