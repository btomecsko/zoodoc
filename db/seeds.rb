user1 = User.create(firstName: "Becky", lastName: "Gonzalez", username: "bgonzalez", password: "pass123")
user2 = User.create(firstName: "Samantha", lastName: "Romero", username: "sromero", password: "pass456")
user3 = User.create(firstName: "Zachary", lastName: "Rancho", username: "zrancho", password: "pass789")

pet1 = Pet.create(petType: "Exotic", name: "Godzilla",age: 3,user_id: user2.id)
pet2 = Pet.create(petType: "Cat", name: "Anime", age: 8, user_id: user1.id)
pet3 = Pet.create(petType: "Dog", name: "Penelope", age: 6, user_id: user3.id)
pet4 = Pet.create(petType: "Dog", name: "Bailey", age: 6, user_id: user3.id)
pet5 = Pet.create(petType: "Exotic", name: "Donatello", age: 1, user_id: user2.id)

doctor1 = Doctor.create(name: "Dr. Rita Geigel, VMD", specialty: "General" , location: "Windsor Park Veterinary Clinic")
doctor2 = Doctor.create(name: "Dr. David Allaman", specialty: "Orthopedic", location: "Windsor Park Veterinary Clinic")
# doctor3 = Doctor.create(name: "", specialty: "", location: "")
# doctor4 = Doctor.create(name: "", specialty: "", location: "")
# doctor5 = Doctor.create(name: "", specialty: "", location: "")
# doctor6 = Doctor.create(name: "", specialty: "", location: "")
# doctor7 = Doctor.create(name: "", specialty: "", location: "")
# doctor8 = Doctor.create(name: "", specialty: "", location: "")
# doctor9 = Doctor.create(name: "", specialty: "", location: "")
# doctor10 = Doctor.create(name: "", specialty: "", location: "")


Appointment.create(pet_id: pet1.id, doctor_id: doctor1.id, appt_time: DateTime.new(2023,5,3,4,0))

