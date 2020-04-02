@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description, :user_id, :user_name, :video_comments
        json.vidUrl url_for(video.vid)
    end
end