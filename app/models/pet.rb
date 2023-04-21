class Pet < ApplicationRecord
  
  belongs_to :user
  has_many :appointments
  has_many :doctors, through: :appointments

  #validators
  validates :petType, presence: true, inclusion: {in: ["Dog", "Cat", "Exotic", "Pocket", "Avian", "Large Animal"]}
  validates :name, presence: true, length: {in: 5..15}
  validates :age, presence: true, numericality: {greater_than_or_equal_to: 0, less_than_or_equal_to: 30}
  validates :image, presence: true, format: {
    with: /\.(png|jpg|jpeg|gif)\z/i,
    message: "must be a URL for PNG, JPG, JPEG or GIF image"
  }
end
