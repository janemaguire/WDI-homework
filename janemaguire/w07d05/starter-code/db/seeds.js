const mongoose = require('mongoose');
const db = require('../config/db');
const Bird = require('../models/bird');

mongoose.connect(db.uri);

Bird.collection.drop();

Bird.create([{
  name: 'Paul',
  breed: 'Cockatoo',
  image: 'http://imagecache6.allposters.com/LRG/61/6160/DRWG100Z.jpg'
},{
  name: 'Brad',
  breed: 'Budgie',
  image: 'http://1.bp.blogspot.com/_oOL7ac9vK80/TURHqULt43I/AAAAAAAADUA/aNncIkMujHQ/s1600/1264715295477.jpg'
},{
  name: 'Stephanie',
  breed: 'Hummingbird',
  image: 'http://www.hummingbirds.net/images/elliott.jpg'
}], (err, birds) => {
  if(err) console.log('There was an error creating birds', err);

  console.log(`${birds.length} birds created!`);
  mongoose.connection.close();
});
