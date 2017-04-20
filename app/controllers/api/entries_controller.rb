class Api::EntriesController < ApplicationController
    before_action :require_current_user!

    def create
        @entry = Entry.create(entry_params)
        if @entry.save
            render json: @entry
        else
            render json: @entry.errors.full_messages, status: 422
        end
    end

    def update
        @entry = Entry.find(params[:id])
        if @entry.update(entry_params)
            render json: @entry
        else
            render json: @entry.errors.full_messages, status: 422
        end
    end

    def index
        @entries = current_user.entries
    end

    def show
        @entry = Entry.find(params[:id])
        if @entry.user_id != current_user.id
            render json: ["Invalid request"], status: 403
        elsif @entry
            render json: @entry
        else
            render json: @entry.errors.full_messages, status: 422
        end
    end

    private

    def entry_params
        params.require(:entry).permit(:content, :create_date, :user_id)
    end
end
