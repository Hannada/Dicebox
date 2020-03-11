class Api::CommentsController < ApplicationController
    def show
        @comment = Comment.find(params[:id])
        render :show 
    end

    def index
        video = Video.find(params[:video_id])
        @comments = video.comments 
        render :index 
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id #unsure if this is gonna register properly
        @comment.video_id = params[:video_id]

        if @comment.save
        else
        end
    end

    def update
    end

    def destroy
    end

    private 

    def comment_params 
        params.require(:comment).permit(:id, :body, :user_id, :video_id)
    end 
end
