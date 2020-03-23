class Video < ApplicationRecord
    validates :title, :description, presence: true 

    validate :ensure_vid
    
    belongs_to :user 
    has_many :comments 
    has_one_attached :vid


    def user_name
        user.username
    end

    def ensure_vid
        unless self.vid.attached? 
            errors[:vid] << "Must be attached"
        end
    end

end
