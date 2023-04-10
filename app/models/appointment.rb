class Appointment < ApplicationRecord
  belongs_to :pet
  belongs_to :doctor

  #validate :valid_date?

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
