# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.connection.execute("TRUNCATE birds RESTART IDENTITY")

Bird.create!([{
  name: "Bert",
  breed: "Budgie",
  image: "https://s-media-cache-ak0.pinimg.com/originals/75/74/73/757473d29cafff37642291a50b5f4630.jpg",
  age: 3,
  toys: "Bell"
},
{
  name: "Larry",
  breed: "Lovebird",
  image: "http://www.birdcrazyresort.com/uploads/1/6/7/8/16784516/1509926_orig.jpg",
  age: 3,
  toys: "Ladder"
},
{
  name: "Marmaduke",
  breed: "Macaw",
  image: "http://gallery.mogfc.com/_data/i/upload/2015/03/18/20150318070956-4948b33b-cu_s9999x410.jpg",
  age: 3,
  toys: "Mirror"
}])
