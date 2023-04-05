class User < ApplicationRecord
    has_many :pets

    #validators
    validates :firstName, :lastName, presence: true, length:{maximum: 15}
    validates :username, presence: true, uniqueness: true, length: {in: 5..15}
end
