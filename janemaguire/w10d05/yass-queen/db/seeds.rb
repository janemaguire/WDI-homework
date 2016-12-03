# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ActiveRecord::Base.connection.execute("TRUNCATE venues RESTART IDENTITY")
ActiveRecord::Base.connection.execute("TRUNCATE queens, venues RESTART IDENTITY")

rvt = Venue.create!(
  name:"Royal Vauxhall Tavern",
  image: "http://www.outmag.co.uk/site/images/stories/royalvauxhalltavern2.png",
  city: "London",
  country: "UK",
  opened: 1863
)

pantibar = Venue.create!(
  name:"PantiBar",
  image: "http://www.independent.ie/incoming/article34772332.ece/ALTERNATES/h342/pa.jpg",
  city: "Dublin",
  country: "Ireland",
  opened: 2007
)

pyramid = Venue.create!(
  name:"Pyramid Club",
  image: "https://thenypost.files.wordpress.com/2015/02/rupaul1.jpg?quality=90&strip=all",
  city: "New York",
  country: "USA",
  opened: 1979
)

cruz = Venue.create!(
  name:"Cruz 101",
  image: "http://www.gaylifemanchester.com/wp-content/uploads/2013/07/cruz-101.jpg",
  city: "Manchester",
  country: "UK",
  opened: 1992
)

jacques = Venue.create!(
  name:"Jacque’s Cabaret",
  image: "https://bosguydotcom.files.wordpress.com/2015/04/jacques.png",
  city: "Boston",
  country: "USA",
  opened: 1938
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
# lily.venues << Venue.find_by_name(rvt.name)

myra = Queen.create!(
  name: "Myra DuBois",
  image: "http://gscene.com/wp-content/uploads/2015/10/Myra-dubois_MG_7534.jpg",
  description: "",
  nationality: "British",
  hometown: "Rotherham",
  catchphrases: "",
  website: "http://www.myradubois.co.uk/"
)
# myra.venues << Venue.find_by_id(rvt.id)

jujubee = Queen.create!(
  name: "Jujubee",
  image: "http://soundnh.com/wp-content/uploads/2015/01/STAGEdrag_jujubee_from_rupauls_drag_race_courtesy_photo.jpg",
  description: "",
  nationality: "American",
  hometown: "Boston",
  catchphrases: "I feel like I'm super hero diva and my power is glitter, I want fried chicken now",
  website: "http://www.jujubeeonline.com/"
)
# jujubee.venues << Venue.find_by_name(jacques.name)

tina = Queen.create!(
  name: "Tina C",
  image: "https://ichef.bbci.co.uk/images/ic/640x360/p01l83bq.jpg",
  description: "",
  nationality: "American",
  hometown: "Tennessee",
  catchphrases: "If you can't live without me, why weren't you dead when I met you?,",
  website: "http://www.christophergreen.net/tina-c/"
)
# tina.venues << Venue.find_by_name(rvt.name)

tim = Queen.create!(
  name: "Timberlina",
  image: "http://www.qxmagazine.com/wp-content/uploads/2011/06/TimberlinabyMikeKear2011-copy.jpg",
  description: "",
  nationality: "British",
  hometown: "London",
  catchphrases: "It's a rollover!",
  website: "http://www.timberlina.co.uk/"
)
# tim.venues << Venue.find_by_name(rvt.name)

ru = Queen.create!(
  name: "RuPaul",
  image: "http://www.adweek.com/files/rupaul-cover-hed-2014.jpg",
  description: "",
  nationality: "American",
  hometown: "San Diego",
  catchphrases: "If you don't love yourself, how in the hell you gonna love somebody else?, We're born naked, and the rest is drag.",
  website: "http://www.rupaul.com/"
)
# ru.venues << Venue.find_by_name(pyramid.name)

liq = Queen.create!(
  name: "Liquorice Black",
  image: "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c160.0.640.640/13398578_265786943777690_1801630703_n.jpg?ig_cache_key=MTI3NjY5MDIyMjEzNzk2NTEwNA%3D%3D.2.c",
  description: "",
  nationality: "British",
  hometown: "Manchester",
  catchphrases: "",
  website: "https://www.instagram.com/liquorice_black/"
  )
# liq.venues << Venue.find_by_name(cruz.name)

panti = Queen.create!(
  name: "Panti Bliss",
  image: "http://www.abc.net.au/news/image/7208530-1x1-700x700.jpg",
  description: "",
  nationality: "Irish",
  hometown: "Dublin",
  catchphrases: "I am thoroughly, deeply, delightedly happy to be gay. It suits me! I'm really good at it.",
  website: "https://twitter.com/PantiBliss"
  )
# panti.venues << Venue.find_by_name(pantibar.name)
