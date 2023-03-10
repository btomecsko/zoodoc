class PetSerializer < ActiveModel::Serializer
  attributes :id, :petType, :name, :age
  has_one :user
  has_many :appointments
end
