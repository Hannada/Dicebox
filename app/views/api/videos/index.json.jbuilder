@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description, :user_id
        json.vidUrl url_for(video.vid)
    end
end