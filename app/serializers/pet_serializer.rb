class PetSerializer < ActiveModel::Serializer
  attributes :id, :petType, :name, :age
  belongs_to :user
  has_many :appointments
end
