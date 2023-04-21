class PetSerializer < ActiveModel::Serializer
  attributes :id, :petType, :name, :age, :image
  belongs_to :user
  has_many :appointments
end
