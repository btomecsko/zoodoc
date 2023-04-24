class Appointment < ApplicationRecord
  belongs_to :pet
  belongs_to :doctor

  validates :appt_time, uniqueness: { scope: :doctor_id, message: "This time slot is already booked." }

  def date_format
    self.appt_time.strftime("%B %d, %Y at %l:%M%p")
  end


end
