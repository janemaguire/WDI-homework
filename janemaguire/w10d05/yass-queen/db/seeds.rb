# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.connection.execute("TRUNCATE queens RESTART IDENTITY")

Queen.create!([{

  name: "Lily Savage",
  image: "http://images.npg.org.uk/800_800/9/7/mw15297.jpg",
  description: "",
  nationality: "British",
  hometown: "Liverpool",
  catchphrases: "If I wanted your opinion, I'd slap it outta ya",
  website: ""
},
{
  name: "Myra DuBois",
  image: "http://gscene.com/wp-content/uploads/2015/10/Myra-dubois_MG_7534.jpg",
  description: "",
  nationality: "British",
  hometown: "Rotherham",
  catchphrases: "",
  website: "http://www.myradubois.co.uk/"
  },
  {
  name: "Jujubee",
  image: "http://soundnh.com/wp-content/uploads/2015/01/STAGEdrag_jujubee_from_rupauls_drag_race_courtesy_photo.jpg",
  description: "",
  nationality: "American",
  hometown: "Boston",
  catchphrases: "I feel like I'm super hero diva and my power is glitter, I want fried chicken now",
  website: "http://www.jujubeeonline.com/"
  },
  {
  name: "Tina C",
  image: "https://ichef.bbci.co.uk/images/ic/640x360/p01l83bq.jpg",
  description: "",
  nationality: "American",
  hometown: "Tennessee",
  catchphrases: "If you can't live without me, why weren't you dead when I met you?,",
  website: "http://www.christophergreen.net/tina-c/"
  }])
