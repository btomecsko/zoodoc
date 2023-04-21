user1 = User.create(firstName: "Becky", lastName: "Gonzalez", username: "bgonzalez", password: "pass123")
user2 = User.create(firstName: "Samantha", lastName: "Romero", username: "sromero", password: "pass456")
user3 = User.create(firstName: "Zachary", lastName: "Rancho", username: "zrancho", password: "pass789")

pet1 = Pet.create(petType: "Exotic", name: "Godzilla",age: 3,user_id: user2.id, image: "https://as1.ftcdn.net/v2/jpg/01/63/12/16/1000_F_163121616_76WYhq1hFN5B3BJYfASSp9ekLUBWUvhR.jpg")
pet2 = Pet.create(petType: "Cat", name: "Anime", age: 8, user_id: user1.id, image: "https://as1.ftcdn.net/v2/jpg/01/63/12/16/1000_F_163121616_76WYhq1hFN5B3BJYfASSp9ekLUBWUvhR.jpg")
pet3 = Pet.create(petType: "Dog", name: "Penelope", age: 6, user_id: user3.id, image: "https://as1.ftcdn.net/v2/jpg/01/63/12/16/1000_F_163121616_76WYhq1hFN5B3BJYfASSp9ekLUBWUvhR.jpg")
pet4 = Pet.create(petType: "Dog", name: "Bailey", age: 6, user_id: user3.id, image: "https://as1.ftcdn.net/v2/jpg/01/63/12/16/1000_F_163121616_76WYhq1hFN5B3BJYfASSp9ekLUBWUvhR.jpg")
pet5 = Pet.create(petType: "Exotic", name: "Donatello", age: 1, user_id: user2.id, image: "https://as1.ftcdn.net/v2/jpg/01/63/12/16/1000_F_163121616_76WYhq1hFN5B3BJYfASSp9ekLUBWUvhR.jpg")

doctor1 = Doctor.create(name: "Dr. Rita Geigel, VMD", specialty: "General" , location: "Windsor Park Veterinary Clinic", image: "https://t3.ftcdn.net/jpg/05/16/27/58/240_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg")
doctor2 = Doctor.create(name: "Dr. David Allaman", specialty: "Orthopedic", location: "Windsor Park Veterinary Clinic", image: "https://t3.ftcdn.net/jpg/05/16/27/58/240_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg")
# doctor3 = Doctor.create(name: "", specialty: "", location: "")
# doctor4 = Doctor.create(name: "", specialty: "", location: "")
# doctor5 = Doctor.create(name: "", specialty: "", location: "")
# doctor6 = Doctor.create(name: "", specialty: "", location: "")
# doctor7 = Doctor.create(name: "", specialty: "", location: "")
# doctor8 = Doctor.create(name: "", specialty: "", location: "")
# doctor9 = Doctor.create(name: "", specialty: "", location: "")
# doctor10 = Doctor.create(name: "", specialty: "", location: "")


Appointment.create(pet_id: pet1.id, doctor_id: doctor1.id, appt_time: DateTime.new(2023,5,3,4,0))

