class AddTitleToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :title, :string
  end
end
