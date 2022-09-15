class Api::CartsController < ApplicationController

    def index
        @current_user = current_user
        @carts = current_user.cart_items
    end

    def show
        @cart = Cart.find(params[:id])
    end

    def create
        @current_user = current_user
        @cart = Cart.new(cart_params)
        if @cart.save
            @carts = current_user.cart_items
            render :index
        else
            render json: @cart.errors.full_messages, status: 422 if !@cart.save
        end
    end

    def destroy
        @cart = Cart.find(params[:id])
        @cart.destroy
        @carts = Cart.all
        render :index
    end

    private

    def cart_params
        params.require(:cart).permit(:user_id, :game_id)
    end
end
