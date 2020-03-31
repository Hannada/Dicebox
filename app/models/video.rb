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
    
    #     def self.search(params)
    #    str = "%#{params}%"
    #    @projects = Project
    #        .joins("LEFT OUTER JOIN users ON projects.creator_id = users.id")
    #        .joins("LEFT OUTER JOIN categories ON projects.category_id = categories.id")
    #        .where(
    #            "UPPER(projects.title) LIKE UPPER(:query) OR
    #            UPPER(projects.subtitle) LIKE UPPER(:query) OR
    #            UPPER(projects.description) LIKE UPPER(:query) OR
    #            UPPER(users.username) LIKE UPPER(:query) OR
    #            UPPER(categories.name) LIKE UPPER(:query)", query: str)
    # end

end
