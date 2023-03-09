class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :appt_time
  has_one :pet
  has_one :doctor
end
