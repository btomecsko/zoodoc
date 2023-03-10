class UserSerializer < ActiveModel::Serializer
  attributes :firstName, :lastName, :username
  has_many :pets
end
