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
        @comment.video_id = comment_params["video_id"]
        # authorname = current_user.username
        # @comment.author = authorname
        # debugger
        if @comment.save
            @video = Video.find(@comment.video_id)
            # render :show 
        else
            render json: @comment.errors.full_messages, status: 422 
        end
    end

    def update
        @comment = current_user.comment.find(params[:id])

        if @comment 
            if @comment.update(comment_params)
                render :show 
            else
                render json: ["You didn't post that."], status: 422
            end
        end
    end

    def destroy
        @comment = current_user.comment.find(params[:id])

        if @comment
            @comment.destroy
            render :show 
        else
            render json: ["You didn't post that."], status: 422
        end
    end

    private 

    def comment_params
        params.require(:comment).permit(:id, :body, :user_id, :video_id)
        # author in the params isnt working
        # params.permit(:id, :body, :user_id, :video_id, :author)

    end 
    # Issue seems to be in the params. Claiming either permit is undefined? 
end
