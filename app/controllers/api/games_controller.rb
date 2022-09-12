class Api::GamesController < ApplicationController

    def index 
        @games = Game.all
        # render json: @games
    end

    def show
        @game = Game.find(params[:id])
        # render json: @game
    end

    def create
        @game = Game.new(game_params)
        render json: @game.errors.full_messages, status: 422 if !@game.save

    end

    private

    def game_params
        params.require(:game).permit(:name, :description, :uploader_id, images: [])
    end
end
