class Api::VideosController < ApplicationController
    def show
        @video = Video.find(params[:id])
        render :show
    end

    def index
        @videos = Video.all 
        render :index 
    end

    def create
        return false unless logged_in? 
        
    end

    def delete 
    end
end
