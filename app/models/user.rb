class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true 
    validates :password, length: {minimum: 6, allow_nil: true}
    after_initialize :ensure_session_token
    attr_reader :password

    def find_by_credentials(user) 
        user = User.find_by(user.id)
        user && user.is_password?(password) ? user : nil 
    end

    def is_password?
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 

    def password=(password)
        @password = password
        self.password_digest = BCrypt::password.create(password)
    end 

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end 
    
    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end 

    private 

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end 

end
