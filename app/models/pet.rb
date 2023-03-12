class Pet < ApplicationRecord
  
  belongs_to :user
  has_many :appointments
  has_many :doctors, through: :appointments

  #validators
  validates :petType, inclusion: {in: ["Dog", "Cat", "Exotic", "Pocket", "Avian", "Large Animal"]}

end
