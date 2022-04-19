'use strict';

const { User } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const anime = [{
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
    }
  ]
    
  
    await queryInterface.bulkInsert('animes', anime)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('animes')
  }
};
