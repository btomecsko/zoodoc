class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :appt_time, :date_format, :title
  has_one :pet
  has_one :doctor
end
