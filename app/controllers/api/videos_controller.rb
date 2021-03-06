class Api::VideosController < ApplicationController
    def show
        @video = Video.find(params[:id])
        render :show
    end

    def index
        if params[:searchResults]
            @videos = Video.search(params[:searchResults])
            render :index
        else
            @videos = Video.all 
            render :index 
        end
    end

    def create
        return false unless logged_in? 
        @video = Video.new(video_params)
        @user = current_user 
        # @video.user_id = current_user.id 
        if @video.save
            render :show 
        else
            render json: @video.errors.full_messages, status: 422 
        end

    end

    # def edit
    # end

    def destroy 
        @video = Video.find_by(id: params[:id])
        @user = @video.user_id

        if (@video && (current_user.id == @user.id))
            @video.destroy
            render :show 
        else
            render json: ["You cannot delete videos you haven't posted"], status: 422
        end
    end


    private 

    def video_params
        params.require(:video).permit(:id, :title, :description, :vid, :user_id, :searchResults)
    end
    
end
