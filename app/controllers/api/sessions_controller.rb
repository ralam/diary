class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      render json: "Welcome back #{@user.username}"
    else
      render json: "Invalid username or password", status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: {}
    else
      render json: "Nobody signed in", status: 404
    end
  end
end