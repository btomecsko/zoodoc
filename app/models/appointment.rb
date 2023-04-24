class Appointment < ApplicationRecord
  belongs_to :pet
  belongs_to :doctor

  #validate :valid_date?

  # validates :appt_time, inclusion: { in: (Time.current.beginning_of_day + 7.hours)..(Time.current.beginning_of_day + 19.hours), message: "Appointments can only be scheduled between 7am and 7pm." }
  validates :appt_time, uniqueness: { scope: :doctor_id, message: "This time slot is already booked." }

  def date_format
    self.appt_time.strftime("%B %d, %Y at %l:%M%p")
  end

  private

  # def valid_date?
  #   if Appointment.where(appt_time: self.appt_time)
  #     errors.add(:appt_time, "Slot no longer available")
  #   end
  # end

end
