class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :specialty, :location
end
