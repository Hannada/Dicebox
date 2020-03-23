json.extract! @video, :id, :title, :description, :user_id, :user_name
json.vidUrl url_for(@video.vid)


json.comments do 
    @video.comments.each do |comment|
        json.set! comment.id do 
            json.extract! comment, :id, :body, :user_id
            json.creatd_at comment.creatd_at.to_s  
        end
    end
end
