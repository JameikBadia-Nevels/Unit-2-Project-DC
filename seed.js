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
       },{
        name: 'JLA #118',
        description: 'The two concluding issues written by Geoff Johns (THE FLASH, TEEN TITANS) and Allan Heinberg (The O.C.) double-ship in September! In JLA #118, part 4 of the 5-part "Crisis of Conscience," the knockdown-dragout battle between Martian Manhunter and Despero continues, as the fight that began on the JLA Watchtower ends on Earth! Meanwhile, Superman intervenes in the Justice League\'s vote to mindwipe the Secret Society of Super Villains, and Zatanna makes a fateful decision.',
        img: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/07/jla_118_5b3bc3dc0ac6d3.49721026.jpg?itok=jNAke0b6',
        author: 'Allan Heinberg, Geoff Johns',
        art: 'David Baron, Rags Morales, Mark Farmer, Chris Batista',
        price: 2.50,
        qty: 20,
        mc:'JLA'
       },{
        name: 'AQUAMEN #1',
        description: 'Dive deeper following the thrilling conclusions of Aquaman: The Becoming and Black Manta! When a terrorist in Middle America is revealed as an Atlantean sleeper agent seemingly gone rogue, the Aquamen—Arthur Curry and Jackson Hyde—are on the case. But it soon becomes clear that the tragedy was not just a single bad actor, but the beginnings of a much larger and more dangerous chain reaction…and the heart of an explosive Atlantean conspiracy! If Arthur’s not careful, the secrets he’s keeping—from Mera, Tula, Tempest, Atlantis, the surface, and even Jackson—could cause a rift from which the Aquamen might never recover!',
        img: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2022/02/AQMEN_Cv1_00111_DIGITAL_6201859e448dd3.79326951.jpg?itok=ZvIJ5Vxr',
        author: 'Brandon Thomas',
        art: 'Diego Olortegui',
        price: 3.99,
        qty: 11,
        mc:'aquaman'
       },{
        name: 'BATMAN THE LONG HALLOWEEN: CATWOMAN: WHEN IN ROME DELUXE EDITION',
        description: 'In this sequel to Batman: The Long Halloween, an Eisner Award-winning creative team takes Catwoman on a mysterious trip to Italy to hunt the deadly Falcone crime family. Collects the six-issue miniseries with a gallery of behind-the-scenes extras.',
        img: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/gn-covers/2022/02/BMLH_CWWIR%20%28Cover%29_621d78604b8f32.29101440.jpg?itok=6Pdm-HW9',
        author: 'Jeph Loeb',
        art: 'Tim Sale',
        price: 49.99,
        qty: 24,
        mc:'catwoman'
       },{
        name: 'DOOMSDAY CLOCK PART 2',
        description: 'The fate of the DC Universe is decided in a confrontation between Superman and Dr. Manhattan in this concluding hardcover collecting Doomsday Clock #7-12! With the Earth teetering on the brink of an international super-war, Black Adam and his followers make their move! And while our heroes are busy elsewhere, Dr. Manhattan has set his endgame into motion. The Doomsday Clock continues to tick toward midnight with the fate of the Multiverse hanging in the balance. ',
        img: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/gn-covers/2020/05/DDCLOCKv2_236-001_HD_5eb4a7c6252279.45067191.jpg?itok=ztnVFUnI',
        author: 'Geoff Johns',
        art: 'Gary Frank',
        price: 24.99,
        qty: 10,
        mc:'MTO'
       },{
        name: 'ACTION COMICS #974',
        description: '“MILD MANNERED” part two! The mystery of the human Clark Kent unravels! Lois stalks Clark’s trail, but all signs point to something big on the horizon. Even the relative safety of their upstate farm can’t protect Superman and his family from the threat they never expected: Clark Kent?!',
        img: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2018/06/actioncomics_974_5b1c1e8f380dd1.59610442.jpg?itok=CpXcfliq',
        author: 'Dan Jurgens',
        art: 'Art Thibert, Stephen Segovia, Patrick Zircher, Clay Mann, Gary Frank',
        price: 2.99,
        qty: 14,
        mc:'superman'
       },{
        name: 'STATIC: SEASON ONE #6',
        description: 'At long last, the most famous face of the Milestone Universe is making his shocking return! Welcome to the 6th installment of season one!',
        img: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2022/02/STATIC_S1_Cv6_DIGITAL_62195fe15bf7d7.38492420.jpg?itok=Y1xE4FGm',
        author: 'Vita Ayala',
        art: 'Nikolas Draper-Ivey',
        price: 3.99,
        qty: 30,
        mc:'static'
       },{
        name: 'AQUAMAN: THE BECOMING #1',
        description: 'Jackson Hyde finally has it all. Mentors who support him, a community that loves him, an honest relationship with his mother, a cute new guy in Amnesty Bay who’s caught his eye, and access to Aquaman’s private training facility in Atlantis. Well, he had it all-until that training facility and half of the Atlantean palace got blown to kingdom come with Jackson in them. Now Jackson stands accused of wrecking the life he worked so hard to build. Aqualad’s going to need all of his skills, wit, and cunning just to prove his own innocence, let alone graduate from sidekick to Aquaman!',
        img: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2021/09/AQMTB_Cv1_00111_DIGITAL_613b7ac9f1ea33.58765814.jpg?itok=I-eee_HD',
        author: 'Brandon Thomas',
        art: 'Diego Olortegui',
        price: 3.99,
        qty: 12,
        mc:'aquman'
       },{
        name: 'ROBIN #12',
        description: 'Demon versus detective! The Lazarus Tournament is over, and Damian returns to Gotham a changed hero! But there is one last opponent he might fight to the death…himself. This lead-in issue to the epic Shadow War event is one you dare not miss!',
        img: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2022/02/ROBIN_Cv12_01211_DIGITAL_621d79131852c0.78702079.jpg?itok=CLT9aYfQ',
        author: 'Joshua Williamson',
        art: 'Roger Cruz',
        price: 3.99,
        qty: 10,
        mc:'robin'
       },{
        name: 'NAOMI #1',
        description: 'When a fight between Superman and Mongul crashes into a small Northwestern town, Naomi (last name?) begins a quest to uncover the last time a super-powered person visited her home—and how that might tie into her own origins and adoption.Follow Naomi’s journey on a quest that will take her to the heart of the DC Universe and unfold a universe of ideas and stories that have never been seen before. Join writers Brian Michael Bendis, David Walker and breakout artist Jamal Campbell in Wonder Comics’ massively ambitious new series and star...NAOMI.',
        img: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2019/01/NAOMI_01_300-001_HD_5c33e817a9d332.52756509.jpg?itok=2ZI9JjHM',
        author: 'David F. Walker, Brian Michael Bendis',
        art: 'Jamal Campbell',
        price: 3.99,
        qty: 20,
        mc:'naomi'
       },{
        name: 'WONDER TWINS #1',
        description: 'Exiled from their home planet, alien heroes Zan and Jayna must navigate life as teens on Earth at South Metropolis High School, where they’re even bigger outsiders than the typical awkward young adults. Under the watchful eye of Superman, the brother and sister pull monitor duty at the Hall of Justice as interns, while also trying to overcome the pitfalls of Zan’s brash confidence and Jayna’s shy but streetwise persona. If you think you know the Wonder Twins, think again—this book takes the form of the unexpected.',
        img: ' https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2019/01/DCWWT_01_300-001_HD_5c4faa523566d6.86836541.jpg?itok=THaHhOHE',
        author: ' Mark Russell',
        art: ' Stephen Byrne, Dustin Nguyen',
        price: 3.99,
        qty: 12,
        mc:'wonder twins'
       },{
        name: 'DEATHSTROKE INC. #7',
        description: 'Father versus daughter as Slade Wilson’s daughter Ravager guest-stars! Ravager wants to know why Deathstroke has claimed the title of “King of the Super-Villains” and brings along the mysterious Respawn with her. Past secrets explode with a cliffhanger that leads directly into the “Shadow War” crossover!',
        img: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2022/02/DSKINC_Cv7_00711_DIGITAL_621d78ef7b4cc4.00913622.jpg?itok=T9qreDJ-',
        author: 'Joshua Williamson',
        art: 'Stephen Segovia',
        price: 3.99,
        qty: 12,
        mc:'deathstroke'
       },{
        name: 'SUPERMAN: YEAR ONE #2',
        description: 'Clark Kent’s journey of self-discovery continues in the second installment of Frank Miller and John Romita Jr.’s remarkable reimagining of Superman’s origin story. This chapter takes young Clark to the Pacific coast and beyond, as he discovers a place as sensational as he is…Atlantis! There he meets new people, finds love, clashes with gargantuan beasts and discovers the man he’s meant to be.',
        img: ' https://imgix-media.wbdndc.net/ingest/book/preview/09453e94-4ba3-4ade-a59f-571da51e37ed/b7fba753-6b92-4324-a87f-c869b80ff9ad/0.jpg',
        author: 'Frank Miller',
        art: 'Alex Sinclair, Danny Miki, John Romita Jr.',
        price: 4.99,
        qty: 11,
        mc:'superman'
       },{
        name: 'THE BRAVE AND THE BOLD #75',
        description: 'Revelers celebrating the "year of the bat" in Gotham City\'s Chinatown are interrupted by the arrival of Shang-Zi, an ancient spirit who blocks off Chinatown from the rest of Gotham City with a mystical barrier as part of a plan to reinstate his 1,000-year rule on the Earth. Trapped inside the city, Batman attempts to stop Shang-Zi, and is joined by the Spectre, who was able to transverse through the barrier. While the Spectre matches might and magic with Shang-Zi, Batman tracks down the source of Shang-Zi\'s power, a magical wheel, and smashes it with a Batarang just as Shang-Zi is gaining the upper hand against the Spectre.',
        img: ' https://imgix-media.wbdndc.net/ingest/book/preview/7b123a9f-1ed5-43f3-9a60-882421796785/e6f258e3-1028-49cc-a287-b7303d31eb76/0.jpg',
        author: ' Henry Boltinoff, Bob Haney',
        art: ' Ross Andru, Mike Esposito, Neal Adams',
        price: 5.99,
        qty: 15,
        mc:'spectre'
       },

       
]

const seedDB = async () => {
    await Product.deleteMany({})
    await Product.insertMany(seeds)
}

seedDB().then(() =>{
    mongoose.connection.close()
})
