require('dotenv').config()
const { default: mongoose } = require('mongoose')
const Product = require('./models/comics')
const db = require('./models/db.js')

const seeds =
[
    {
          name: 'The Batman Who Laughs: The Grimm Knight',
          description:'The origin of the most dangerous Dark Knight of all!',
          img: 'https://m.media-amazon.com/images/I/51GLdq5L8LL.jpg',
          author: 'Scott Snyder, James Tynion IV',
          art: 'Eduardo Risso',
          price: 4.99,
          qty: 5,
          mc:'batman'
        }, {
          name: 'Batman: The Imposter #3',
          description: 'The battle against the imposter poisoning the Batman\’s name heats up, while Detective Blair Wong makes a deadly decision!',
          img: 'https://s3.amazonaws.com/comicgeeks/comics/covers/medium-3134333.jpg?1637489289',
          author: 'Mattson Tomlin',
          art: 'Andrea Sorrentino, Jordie Bellaire',
          price: 6.99,
          qty: 2,
          mc:'batman'
        }, {
          name: 'Milestone Returns: Static Season One #1',
          description: 'At long last, the most famous face of the Milestone Universe is making his shocking return!',
          img: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2021/06/STATICS1_01_CV_60bfbf1bb99f11.33191153.jpg?itok=ZtnQmtkL',
          author: 'Vita Ayala',
          art: 'Nikolas Draper-Ivey, ChrisCross',
          price: 3.99,
          qty: 7,
          mc:'static'
        }, {
        name: 'Batgirl  #19',
        description: 'Will a battle of sibling rivalry lead to a death in the family? ',
        img: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/06/batgirl_v4_19_5b15d34f542b10.52622391.jpg?itok=ui10zKvN',
        author: 'Gail Simone',
        art: 'Vicente Cifuentes, Daniel Sampere',
        price: 2.99,
        qty: 10,
        mc:'batgirl'
       },{
        name: 'DC Nation #0',
        description: 'Just in time for Free Comic Book Day, this special comic priced at just $0.25 US features three brand-new stories from a lineup of superstar talent—and each tale serves as a prelude to some of the biggest DC events of 2018!First, find out how The Joker reacts when he discovers Catwoman has turned her back on crime and plans to marry his archnemesis. Can the Clown Prince of Crime stand to see Batman happy? Writer Tom King and artist Clay Mann set up the events that lead to BATMAN #50! Then, DARK NIGHTS: METAL shook the DC Universe to its deepest foundations—now it\’s time to rejoin legendary writer Scott Snyder, along with all-star artist Jorge Jimenez and co-writers James Tynion IV and Joshua Williamson, for the prelude to JUSTICE LEAGUE: NO JUSTICE! Discover what universe-shattering mysteries have emerged from the most wondrous and chaotic corners of the cosmos to hunt the Justice League in DC\’s summer blockbuster event! And get your first glimpse at Superman\’s new world in this exclusive preview of the upcoming six-issue miniseries MAN OF STEEL, written by Brian Michael Bendis with art by José Luis García-López. With Truth, Justice and the American Way all under attack, both Superman and Clark Kent find there\’s never been a more important time to stand up for what they believe in.',
        img: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/08/DCNO_00_300-001_HD_5b7f455bd138a7.64038527.jpg?itok=aGMcUAGa',
        author: 'Brian Michael Bendis, Joshua Williamson, James T Tynion IV, Scott Snyder',
        art: 'Jorge Jimenez, José Luis García-López',
        price: 0.25,
        qty: 30,
        mc:'MTO'
       },{
        name: 'Nightwing  #23',
        description: 'A city under siege as the Prankster\’s attacks take over Chicago! Can Nightwing find the madman before he kills again? And just what is the Prankster\’s endgame? Plus, don\’t miss Tony Zullo\’s shocking decision ',
        img: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/06/nightwing_v3_23_5b16ea3a6e32c0.61260395.jpg?itok=G9vOkKro',
        author: 'Kyle Higgins',
        art: 'Norm Rapmund, Brett Booth',
        price: 2.99,
        qty: 10,
        mc:'nightwing'
       },{
        name:'Batman #30',
        description: '“ZERO YEAR – SAVAGE CITY” begins! ',
        img: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/06/batman_v2_30_5b2ad787aabc36.98763382.jpg?itok=ZtBI3YnL',
        author: 'Scott Snyder',
        art: 'Danny Miki, Greg Capullo',
        price: 3.99,
        qty: 5,
        mc:'batman'
       },{
        name: 'Nightwing  #57',
        description: 'Will a battle of sibling rivalry lead to a death in the family? ',
        img: 'https://m.media-amazon.com/images/I/61812B+gDML.jpg',
        author: 'Chuck Dixon',
        art: 'Jesse Delperdang, Mark Farmer, Rick Leonardi',
        price: 2.25,
        qty: 20,
        mc:'nightwing'
       },
       
]

const seedDB = async () => {
    await Product.deleteMany({})
    await Product.insertMany(seeds)
}

seedDB().then(() =>{
    mongoose.connection.close()
})
