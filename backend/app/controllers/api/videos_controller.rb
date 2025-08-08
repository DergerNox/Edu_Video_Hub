class Api::VideosController < ApplicationController
  def index
    videos = Video.all.order(created_at: :desc)
    render json: videos
  end

  def show
    video = Video.find(params[:id])
    render json: video
  end

  def create
    video = Video.new(video_params)
    if video.save
       render json: { message: 'Video uploaded successfully', video:{
          id: video.id,
          title: video.title,
          description: video.description,
          file_url: url_for(video.file)
        } 
       }, status: :created
    else
      render json: { errors: video.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def video_params
    params.require(:video).permit(:title, :description, :file)
  end
end
