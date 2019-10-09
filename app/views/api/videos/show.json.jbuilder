json.extract! @video, :id, :title, :description, :user_id
json.vidUrl url_for(@video.vid)
