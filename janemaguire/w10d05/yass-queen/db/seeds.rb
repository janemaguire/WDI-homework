# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.connection.execute("TRUNCATE queens RESTART IDENTITY")

rvt = Venue.create!(
  name:"Royal Vauxhall Tavern",
  image: "http://www.outmag.co.uk/site/images/stories/royalvauxhalltavern2.png",
  city: "London",
  country: "UK",
  opened: "1863"
)

panti = Venue.create!(
  name:"PantiBar",
  image: "http://www.outmag.co.uk/site/images/stories/royalvauxhalltavern2.png",
  city: "Dublin",
  country: "Ireland",
  opened: "2007"
)

pyramid = Venue.create!(
  name:"Pyramid Club",
  image: "http://www.outmag.co.uk/site/images/stories/royalvauxhalltavern2.png",
  city: "New York",
  country: "USA",
  opened: "1979"
)

lily = Queen.create!(

  name: "Lily Savage",
  image: "http://images.npg.org.uk/800_800/9/7/mw15297.jpg",
  description: "",
  nationality: "British",
  hometown: "Liverpool",
  catchphrases: "If I wanted your opinion, I'd slap it outta ya",
  website: ""
)

lily.venues << Venue.find_by_name(rvt.name)
# {
#   name: "Myra DuBois",
#   image: "http://gscene.com/wp-content/uploads/2015/10/Myra-dubois_MG_7534.jpg",
#   description: "",
#   nationality: "British",
#   hometown: "Rotherham",
#   catchphrases: "",
#   website: "http://www.myradubois.co.uk/"
#   },
#   {
#   name: "Jujubee",
#   image: "http://soundnh.com/wp-content/uploads/2015/01/STAGEdrag_jujubee_from_rupauls_drag_race_courtesy_photo.jpg",
#   description: "",
#   nationality: "American",
#   hometown: "Boston",
#   catchphrases: "I feel like I'm super hero diva and my power is glitter, I want fried chicken now",
#   website: "http://www.jujubeeonline.com/"
#   },
#   {
#   name: "Tina C",
#   image: "https://ichef.bbci.co.uk/images/ic/640x360/p01l83bq.jpg",
#   description: "",
#   nationality: "American",
#   hometown: "Tennessee",
#   catchphrases: "If you can't live without me, why weren't you dead when I met you?,",
#   website: "http://www.christophergreen.net/tina-c/"
#   },
#   {
#   name: "Timberlina",
#   image: "http://www.qxmagazine.com/wp-content/uploads/2011/06/TimberlinabyMikeKear2011-copy.jpg",
#   description: "",
#   nationality: "British",
#   hometown: "London",
#   catchphrases: "It's a rollover!",
#   website: "http://www.timberlina.co.uk/"
#   },
#   {
#   name: "RuPaul",
#   image: "http://www.adweek.com/files/rupaul-cover-hed-2014.jpg",
#   description: "",
#   nationality: "American",
#   hometown: "San Diego",
#   catchphrases: "If you don't love yourself, how in the hell you gonna love somebody else?, We're born naked, and the rest is drag.",
#   website: "http://www.rupaul.com/"
#   },
#   {
#   name: "Adore Delano",
#   image: "https://s-media-cache-ak0.pinimg.com/originals/ca/31/17/ca31171ff15dd8c91fa2948a7129f4b9.jpg",
#   description: "",
#   nationality: "American",
#   hometown: "Glendora",
#   catchphrases: "Party!, I wanted to show my hog body, I don't belong here",
#   website: "http://www.adoredelano.com/"
#   },
#   {
#   name: "Liquorice Black",
#   image: "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c160.0.640.640/13398578_265786943777690_1801630703_n.jpg?ig_cache_key=MTI3NjY5MDIyMjEzNzk2NTEwNA%3D%3D.2.c",
#   description: "",
#   nationality: "British",
#   hometown: "Manchester",
#   catchphrases: "",
#   website: "https://www.instagram.com/liquorice_black/"
#     }])
