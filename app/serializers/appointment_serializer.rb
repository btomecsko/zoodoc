class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :appt_time, :date_format
  belongs_to :pet
  belongs_to :doctor
end
