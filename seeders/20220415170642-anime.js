'use strict';

const { User } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll({ raw:true })
    const anime = [...Array(7)].map((_) => ({
      title: 'Jujutsu Kaizen',
      releaseDate: 'Oct 2, 2020',
      episodes: 24,
      seasons: 1,
      description: 'Yuji Itadori, a kind-hearted teenager, joins his schools Occult Club for fun, but discovers that its members are actual sorcerers who can manipulate the energy between beings for their own use. He hears about a cursed talisman - the finger of Sukuna, a demon - and its being targeted by other cursed beings.',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZrMHj7KrczRd3jmUMeIHGwHaJ4%26pid%3DApi&f=1',
      watcherId: users[Math.floor(Math.random() * users.length)].id
    },
    {
      title: 'Demon Slayer',
      releaseDate: 'Apr 6, 2019',
      episodes: 44,
      seasons: 2,
      description: 'Teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister Nezuko turned into a demon',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6wl0D05aBaWjgqgNn9RwLAHaKE%26pid%3DApi&f=1',
      watcherId: users[Math.floor(Math.random() * users.length)].id
    },
    {
      title: 'Hunter x Hunter',
      releaseDate: 'Oct 16, 1999',
      episdoes: 62,
      seasons: 1,
      description: 'Gon Freecss is a young boy living on Whale Island. He learns from "Hunter" Kite, that his father, who he was told was dead, is still alive somewhere as a top "Hunter," risking his life to seek unknown items, such as hidden treasures, curiosa, exotic living creatures, etc. Gon decides to become a professional Hunter and leaves the island. To become a Hunter, he must pass the Hunter Examination, where he meets and befriends three other applicants: Kurapika, Leorio and Killua. Can Gon pass this formidable hurdle, the Hunter Examination, to become "the Best Hunter in the World" and eventually meet his father?',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMWY2OTQwNWUtZWUxYy00OGUzLTkxMmYtNzE4ZTI0ZTBlYTU5XkEyXkFqcGdeQXVyMTA3OTEyODI1._V1_UY1200_CR116%2C0%2C630%2C1200_AL_.jpg&f=1&nofb=1',
      watcherId: users[Math.floor(Math.random() * users.length)].id
    },
    {
      title: 'Fullemetal Alchemist Brotherhood',
      releaseDate: 'Apr 5, 2009',
      episode: 64,
      seasons: 1,
      description: 'Brothers Edward and Alphonse Elric search for the Philsophers Stone, hoping to restore their bodies, which were lost when they attempted to use their alchemy skills to resurrect their deceased mother. Edward, who lost only limbs, joins the State Military, which gives him the freedom to continue the search as he tries to restore his brother, whose soul is tethered to earth by a suit of armor. However, Edward and Alphonse are not the only ones seeking the powerful stone. And as they search, they learn of a plot to transmute the entire country for reasons they cannot comprehend.',
      image: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Fullmetal_Alchemist_Brotherhood_key_visual.png ',
      watcherId: users[Math.floor(Math.random() * users.length)].id
    },
    {
      title: 'Trigun',
      releaseDate: 'Apr 1 1998',
      episodes: 26,
      seasons: 1,
      description: 'Vash the Stampede is the man with a $$60,000,000,000 bounty on his head. The reason: hes a merciless villain who lays waste to all those that oppose him and flattens entire cities for fun, garnering him the title "The Humanoid Typhoon." He leaves a trail of death and destruction wherever he goes, and anyone can count themselves dead if they so much as make eye contact—or so the rumors say. In actuality, Vash is a huge softie who claims to have never taken a life and avoids violence at all costs.With his crazy doughnut obsession and buffoonish attitude in tow, Vash traverses the wasteland of the planet Gunsmoke, all the while followed by two insurance agents, Meryl Stryfe and Milly Thompson, who attempt to minimize his impact on the public. But soon, their misadventures evolve into life-or-death situations as a group of legendary assassins are summoned to bring about suffering to the trio. Vashs agonizing past will be unraveled and his morality and principles pushed to the breaking point.',
      image: 'https://cdn.myanimelist.net/images/anime/7/20310.jpg',
      watcherId: users[Math.floor(Math.random() * users.length)].id
    },
    {
      title: 'Cowboy Bebop',
      releaseDate: 'Oct 24, 1998',
      episodes: 26,
      seasons: 1,
      description: 'Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters.Spike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi.While developing bonds and working to catch a colorful cast of criminals, the Bebop crews lives are disrupted by a menace from Spikes past. As a rivals maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds.',
      image:'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
      watcherId: users[Math.floor(Math.random() * users.length)].id
    },
    {
      title: 'My Hero Academia',
      releaseDate: 'Apr 3, 2016',
      episodes: 113,
      seasons: 5,
      description: 'The appearance of "quirks," newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.Since he was a child, the ambitious middle schooler has wanted nothing more than to be a hero. Izukus unfair fate leaves him admiring heroes and taking notes on them whenever he can. But it seems that his persistence has borne some fruit: Izuku meets the number one hero and his personal idol, All Might. All Mights quirk is a unique ability that can be inherited, and he has chosen Izuku to be his successor!Enduring many months of grueling training, Izuku enrolls in UA High, a prestigious high school famous for its excellent hero training program, and this years freshmen look especially promising. With his bizarre but talented classmates and the looming threat of a villainous organization, Izuku will soon learn what it really means to be a hero.',
      image: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
      watcherId: users[Math.floor(Math.random() * users.length)].id
    }

    
    ))
    await queryInterface.bulkInsert('animes', anime)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('animes')
  }
};
