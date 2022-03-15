require('dotenv').config()
const { default: mongoose } = require('mongoose')
const Product = require('./models/comics')
const db = require('./models/db.js')

const seeds =
[
    {
          name: 'The Batman Who Laughs: The Grimm Knight',
          description: 'The origin of the most dangerous Dark Knight of all!',
          img: 'https://m.media-amazon.com/images/I/51GLdq5L8LL.jpg',
          price: 4.99,
          qty: 5
        }, {
          name: 'Batman: The Imposter #3',
          description: 'The battle against the imposter poisoning the Batman\’s name heats up, while Detective Blair Wong makes a deadly decision!',
          img: 'https://s3.amazonaws.com/comicgeeks/comics/covers/medium-3134333.jpg?1637489289',
          price: 6.99,
          qty: 2
        }, {
          name: 'Milestone Returns: Static Season One #1',
          description: 'At long last, the most famous face of the Milestone Universe is making his shocking return!',
          img: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2021/06/STATICS1_01_CV_60bfbf1bb99f11.33191153.jpg?itok=ZtnQmtkL',
          price: 3.99,
          qty: 7
    }
]

const seedDB = async () => {
    await Product.deleteMany({})
    await Product.insertMany(seeds)
}

seedDB().then(() =>{
    mongoose.connection.close()
})
