class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :specialty, :location, :image
  has_many :appointments
end
