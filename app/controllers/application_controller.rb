class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    helper_method :current_user

    def login!(user)
        @current_user = user
        session[:session_token] = user.session_token
    end

    def current_user
        return nil if session[:session_token].nil?
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def require_current_user!
        render json: {base: ['Invalid credentials']}, status: 401 if current_user.nil?
    end
end
