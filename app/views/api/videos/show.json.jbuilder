json.extract! @video, :id, :title, :description, :user_id, :user_name
json.vidUrl url_for(@video.vid)

