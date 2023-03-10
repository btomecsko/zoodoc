class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :appt_time
  belongs_to :pet
  belongs_to :doctor
end
