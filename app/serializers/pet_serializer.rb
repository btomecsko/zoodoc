class PetSerializer < ActiveModel::Serializer
  attributes :id, :petType, :name, :age
  has_one :user
end
