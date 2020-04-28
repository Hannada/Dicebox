json.comments do 
    @video.comments.each do |comment|
        json.set! comment.id do 
            json.extract! comment, :id, :body, :user_id, :created_at
            json.creatd_at comment.created_at.to_s  
        end
    end
end