class Video < ApplicationRecord
    validates :title, :description, presence: true 

    # validate :ensure_vid
    
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

    def video_comments
        comments.all
    end

    # define comments.all

    def self.search(params)
        str = "%#{params}"
        @videos = Video 
            .joins("LEFT OUTER JOIN users on videos.user_id = users.id")
            .where(
                "UPPER(videos.title) LIKE UPPER(:query) OR
                UPPER(videos.description) LIKE UPPER(:query) OR
                UPPER(users.username) LIKE UPPER(:query)", query: str)
    end
    


end
