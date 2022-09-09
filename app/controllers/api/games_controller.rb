class Api::GamesController < ApplicationController

    def index 
        @games = Game.all
        render :index
    end

    def show
        @game = Game.find(params[:id])
        render :show
    end

    private

    def game_params
        params.require(:game).permit(:name, :description, :uploader_id)
    end
end
