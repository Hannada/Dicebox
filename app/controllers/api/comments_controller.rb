class Api::CommentsController < ApplicationController
    def show
        @comment = Comment.find(params[:id])
        render :show 
    end

    def index
    end

    def create
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
