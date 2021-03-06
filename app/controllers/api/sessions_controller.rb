class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user 
            login(@user)
            render "show"
        else 
            render json: ["Invalid email/password combination"], status: 401
            # email check currently working as intedned but not pusing after login.
        end 
    end

    def email_check 
        @user = User.find_by(email: params[:email])
        if @user 
            render json: {verified: true}
        else
            render json: {verified: false}, status: 401 
        end

        # Might need to refactor the check to make up for props push, added error status
    end

    def destroy 
        @user = current_user 
        if @user 
            logout
            render "show"
        else
            render json: ["No logged in user"], status: 404 
        end
    end 
end
