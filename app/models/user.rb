class User < ApplicationRecord
    has_many :pets

    has_secure_password

    #validators
    validates :firstName, :lastName, presence: true, length:{maximum: 15}
    validates :username, presence: true, uniqueness: true, length: {in: 5..15}
end
