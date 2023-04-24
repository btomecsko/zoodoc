class Doctor < ApplicationRecord
    has_many :appointments
    has_many :pets, through: :appointments

    validates :name, :specialty, :location, presence: true
end
