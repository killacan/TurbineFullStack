class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password'] + ['profile_pic_url']

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
  end

  def update
    @user = User.find(params[:id])
    puts(@user)
    puts(user_params)
    if @user.update(user_params)
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end


  private

  def user_params
    params.require(:user).permit(:id, :email, :username, :password, :bio, :profile_pic_url)
  end
end
