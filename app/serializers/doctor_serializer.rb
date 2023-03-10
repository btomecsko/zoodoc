class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :specialty, :location
  has_many :appointments
end
