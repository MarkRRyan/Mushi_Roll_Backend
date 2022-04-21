'use strict';

const { User } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const anime = [
      {
      title: 'Jujutsu Kaizen',
      releaseDate: 'Oct 2, 2020',
      episodes: 24,
      seasons: 1,
      description: 'Yuji Itadori, a kind-hearted teenager, joins his schools Occult Club for fun, but discovers that its members are actual sorcerers who can manipulate the energy between beings for their own use. He hears about a cursed talisman - the finger of Sukuna, a demon - and its being targeted by other cursed beings.',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZrMHj7KrczRd3jmUMeIHGwHaJ4%26pid%3DApi&f=1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Demon Slayer',
      releaseDate: 'Apr 6, 2019',
      episodes: 44,
      seasons: 2,
      description: 'Teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister Nezuko turned into a demon',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6wl0D05aBaWjgqgNn9RwLAHaKE%26pid%3DApi&f=1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Hunter x Hunter',
      releaseDate: 'Oct 16, 1999',
      episodes: 62,
      seasons: 1,
      description: 'Gon Freecss is a young boy living on Whale Island. He learns from "Hunter" Kite, that his father, who he was told was dead, is still alive somewhere as a top "Hunter," risking his life to seek unknown items, such as hidden treasures, curiosa, exotic living creatures, etc. Gon decides to become a professional Hunter and leaves the island. To become a Hunter, he must pass the Hunter Examination, where he meets and befriends three other applicants: Kurapika, Leorio and Killua. Can Gon pass this formidable hurdle, the Hunter Examination, to become "the Best Hunter in the World" and eventually meet his father?',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMWY2OTQwNWUtZWUxYy00OGUzLTkxMmYtNzE4ZTI0ZTBlYTU5XkEyXkFqcGdeQXVyMTA3OTEyODI1._V1_UY1200_CR116%2C0%2C630%2C1200_AL_.jpg&f=1&nofb=1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Fullemetal Alchemist Brotherhood',
      releaseDate: 'Apr 5, 2009',
      episodes: 64,
      seasons: 1,
      description: 'Brothers Edward and Alphonse Elric search for the Philsophers Stone, hoping to restore their bodies, which were lost when they attempted to use their alchemy skills to resurrect their deceased mother. Edward, who lost only limbs, joins the State Military, which gives him the freedom to continue the search as he tries to restore his brother, whose soul is tethered to earth by a suit of armor. However, Edward and Alphonse are not the only ones seeking the powerful stone. And as they search, they learn of a plot to transmute the entire country for reasons they cannot comprehend.',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mTJzFdfcm7D9eeEcYJXWlAHaKX%26pid%3DApi&f=1 ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Trigun',
      releaseDate: 'Apr 1 1998',
      episodes: 26,
      seasons: 1,
      description: 'Vash the Stampede is a gunfighter with a legend so ruthless that he has a $$60,000,000,000 bounty on his head. Entire towns evacuate at the rumor of his arrival. However, the real Vash the Stampede is not the same man that rumor portrays him to be. The enigmatic and conflicted lead character in Trigun is actually more heroic in nature; as well as a complete and utter idiot at times. ',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Sol7lPIfhhMnJzrW68MmHwHaLH%26pid%3DApi&f=1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Cowboy Bebop',
      releaseDate: 'Oct 24, 1998',
      episodes: 26,
      seasons: 1,
      description: 'Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters.',
      image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7YB0pH4bIh-KsdIIjkukMQHaLH%26pid%3DApi&f=1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'My Hero Academia',
      releaseDate: 'Apr 3, 2016',
      episodes: 113,
      seasons: 5,
      description: `Despite being born powerless into a super-powered world, Izuku refuses to give up on his dream of becoming a hero. He enrolls himself in a prestigious hero academy with a deadly entrance exam. To make the grade, he'll have to put in some serious study time with the mightiest hero of all.`,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.bcPMHHg36EieGOtWnWSxCQHaKe%26pid%3DApi&f=1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: `Dragon Ball`,
      releaseDate: `Feb 26, 1986`,
      episodes: 153,
      seasons: 9,
      description: `A fateful encounter that would lead to many adventures. The story begins when a then monkey-tailed boy named Son Gokū meets a girl named Bulma. Where years after crash-landing onto the planet Earth is offered the chance to join Bulma in her journey to find all 7 magical Dragon Balls.`,
      image: `https://www.themoviedb.org/t/p/w1280/tZ0jXOeYBWPZ0OWzUhTlYvMF7YR.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: `Dragon Ball Z`,
      releaseDate: `Apr 26, 1989`,
      episodes: 291,
      seasons: 9,
      description:` Dragon Ball Z picks up five years after the end of the Dragon Ball anime, with Goku now a young adult and father to his son, Gohan.. A humanoid alien named Raditz arrives on Earth in a spacecraft and tracks down Goku, revealing to him that he is his long-lost older brother and that they are members of a near-extinct alien warrior race called the Saiyans`,
      image: `https://www.themoviedb.org/t/p/w1280/6VKOfL6ihwTiB5Vibq6QTfzhxA6.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      title: `Dragon Ball GT`,
      releaseDate: `Feb 7, 1996`,
      episodes: 64,
      seasons: 4,
      description: `Emperor Pilaf finally has his hands on the Black Star Dragon Balls after years of searching, which are said to be twice as powerful as Earth's normal ones. Pilaf is about to make his wish for world domination when he is interrupted by Gokuu Son. As a result, Pilaf flubs his wish and accidentally turns Gokuu back into a child.`,
      image: `https://www.themoviedb.org/t/p/w1280/rLHhDpv6rrhuzBjNzaMRNv2fng.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: `Dragon Ball Super`,
      releaseDate: `Jul 5, 2015`,
      episodes: 131,
      seasons: 5,
      description: `Six months after the defeat of Majin Buu, The mighty Saiyan Son Goku continues his quest on becoming stronger. With Majin Buu defeated half-a-year prior, peace returns to Earth, where Son Goku (now a radish farmer) and his friends now live peaceful lives. However, a new threat appears in the form of Beerus, the God of Destruction.`,
      image: `https://cdn.anime-planet.com/anime/primary/dragon-ball-super-1.jpg?t=1625755425`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: `Sailor Moon`,
      releaseDate: 'Mar 7, 1992',
      episodes: 200,
      seasons: 5,
      description: `The magical action-adventures of a teenage girl who learns of her destiny as the legendary warrior Sailor Moon and must band together with the other Sailor Scouts to defend the Earth and Galaxy. The story centers around an air-headed crybaby, named Usagi, and her friends Ami, Rei, Makato, and Minako.`,
      image: `https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftalkingcomicbooks.com%2Fwp-content%2Fuploads%2F2014%2F11%2FSailor-Moon-Anime-.jpg&f=1&nofb=1`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: `With a Dog AND a Cat, Every Day is Fun`,
      releaseDate: 'Oct 2, 2020',
      episodes: 24,
      seasons: 1,
      description:`A hard-working way-too-cute dog and a scary-faced but lovable cat. Living with them makes every day fun. Their owner's days are filled with laughter and sentiment. Are you a cat-lover? A dog-lover? Or both? This anime is a present for the people out there who love both dogs and cats so much they can't choose.`,
      image: `https://cdn.anime-planet.com/anime/primary/with-a-dog-and-a-cat-every-day-is-fun-1.jpg?t=1625788742`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Neon Genesis Evangelion',
      releaseDate: 'Oct 4, 1995',
      episodes: 26,
      seasons: 1,
      description: `Evangelion is a giant humanoid being of near-godlike power, created by NERV from samples of the First Angel, Adam. Evangelions were supposedly created to combat the Angel threat, although their most important function (and one of their greatest secrets) is to initiate Third Impact to evolve humanity further. `,
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EI6wUWODAFqi-asmCU3lxAHaKj%26pid%3DApi&f=1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'FLCL',
      releaseDate: 'Apr 26, 2000',
      episodes: 18,
      seasons: 3,
      description: `Naota Nandaba is an ordinary sixth grader living in a city where nothing amazing ever seems to happen. After his brother Tasuku leaves town to play baseball in America, Naota takes it upon himself to look after everything Tasuku left behind—from his top bunk bed to his ex-girlfriend Mamimi Samejima, who hasn't stopped clinging to Naota since Tasuku left. `,
      image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb0%2Fb2%2F4a%2Fb0b24a3e84b481e3efc095e7e4b69a53.jpg&f=1&nofb=1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Log Horizon',
      releaseDate: 'Oct 5, 2013',
      episodes: 25,
      seasons: 1,
      description: `In the blink of an eye, thirty thousand bewildered Japanese gamers are whisked from their everyday lives into the world of the popular MMORPG, Elder Tale, after the game's latest update—unable to log out. Among them is the socially awkward college student Shiroe, whose confusion and shock lasts only a moment as, a veteran of the game, he immediately sets out to explore the limits of his new reality.`,
      image:'https://m.media-amazon.com/images/M/MV5BOGJhM2U4NTgtMWI0ZC00Njc5LWJmMjktMzQzMDgzZTIzMzI0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Inuyasha',
      releaseDate: 'Oct, 16, 2000',
      episodes: 167,
      seasons: 7,
      description: `InuYasha follows Kagome Higurashi, a fifteen-year-old girl whose normal life ends when a demon drags her into a cursed well on the grounds of her family's Shinto shrine. Instead of hitting the bottom of the well, Kagome ends up 500 years in the past during Japan's violent Sengoku period with the demon's true target, a wish-granting jewel called the Shikon Jewel, reborn inside of her.`,
      image:'https://i.ebayimg.com/images/i/151204248887-0-1/s-l1000.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Death Parade',
      releaseDate: 'Jan 9, 2015',
      episodes: 12,
      seasons: 1,
      description: `After death, either Heaven or Hell awaits most humans. But for a select few, death brings them to Quindecim—a bar where only pairs of people who die at the same time can enter. Attending the bar is an enigmatic figure known as Decim, who also acts as the arbiter. He passes judgment on those who wind up at Quindecim by challenging them to a life-threatening game. These games determine if the patron's soul will reincarnate into a new life, or be sent into the void, never to be seen again.`,
      image:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpm1.narvii.com%2F5681%2Fc59de09a940feda4ab625bc623002a660bfde184_hq.jpg&f=1&nofb=1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Noragami',
      releaseDate: 'Jan 5, 2014',
      episodes: 12,
      seasons: 1,
      description: `In times of need, if you look in the right place, you just may see a strange telephone number scrawled in red. If you call this number, you will hear a young man introduce himself as the Yato God.`,
      image:'https://img.moviesrankings.com/t/p/w1280/5VfXMChjnJsiRJM0FC5KBncccD2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Death Note',
      releaseDate: 'Oct 4, 2006',
      episodes: 37,
      seasons: 1,
      description: `Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten.`,
      image: 'https://vignette.wikia.nocookie.net/deathnote/images/7/76/DEATH_NOTE_anime.jpg/revision/latest?cb=20170720215429',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]
    
  
    await queryInterface.bulkInsert('animes', anime)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('animes')
  }
};
