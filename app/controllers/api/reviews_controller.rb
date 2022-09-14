class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
    end

    def show
        @review = Review.find(params[:id])
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        render :show
    end

    private
    def review_params
        params.require(:review).permit(:body, :game_id, :reviewer_id)
    end
end
