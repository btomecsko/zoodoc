class User < ApplicationRecord
    has_many :pets

    #validators
    validates :firstName, presence: true
    validates :lastName, presence: true
    validates :username, presence: true, uniqueness: true
end
