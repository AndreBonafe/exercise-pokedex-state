const pokemons = [
  {
      id: 25,
      name: "Pikachu",
      type: 'Electric',
      averageWeight: {
          value: "6.0",
          measurementUnit: "kg"
      },
      foundAt: [
        {
          location: 'Kanto Viridian Forest',
          map: 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
        },
        {
          location: 'Kanto Power Plant',
          map: 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
        },
      ],
      image: "https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)",
      about: `Pikachu is a short, chubby rodent Pokémon. It is covered in yellow fur with two horizontal brown stripes on its back. 
      It has a small mouth, long, pointed ears with black tips, and brown eyes. Each cheek is a red circle that contains a pouch for 
      electricity storage. It has short forearms with five fingers on each paw, and its feet each have three toes. At the base of its 
      lightning bolt-shaped tail is a patch of brown fur. A female will have a V-shaped notch at the end of its tail, which looks like 
      the top of a heart. It is classified as a quadruped, but it has been known to stand and walk on its hind legs.`
  },
  {
      id: 4,
      name: "Charmander",
      type: 'Fire',
      averageWeight: {
          value: "8.5",
          measurementUnit: "kg"
      },
      foundAt: [
        {
          location: 'Alola Route 3',
          map: 'https://cdn2.bulbagarden.net/upload/thumb/9/93/Alola_Route_3_Map.png/250px-Alola_Route_3_Map.png',
        },
        {
          location: 'Kanto Route 4',
          map: 'https://cdn2.bulbagarden.net/upload/2/24/Kanto_Route_4_Map.png',
        },
        {
            location: 'Kanto Rock Tunel',
            map: 'https://cdn2.bulbagarden.net/upload/6/6f/Kanto_Rock_Tunnel_Map.png',
        },
      ],
      image: "https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)",
      about: `Charmander is a bipedal, reptilian Pokémon with a primarily orange body and blue eyes. Its underside from the chest down and the soles of 
      its feet are cream-colored. It has two small fangs visible in its upper jaw and two smaller fangs in its lower jaw. A fire burns at the tip of this 
      Pokémon's slender tail and has blazed there since Charmander's birth. The flame can be used as an indication of Charmander's health and mood, burning 
      brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged. It is said that Charmander 
      dies if its flame goes out. However, if the Pokémon is healthy, the flame will continue to burn even if it gets a bit wet and is said to steam in the rain.`
  },
  {
      id: 10,
      name: "Caterpie",
      type: 'Bug',
      averageWeight: {
          value: "2.9",
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/8/83/Spr_5b_010.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
      id: 23,
      name: "Ekans",
      type: 'Poison',
      averageWeight: {
          value: "6.9",
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/1/18/Spr_5b_023.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)"
  },
  {
      id: 65,
      name: "Alakazam",
      type: 'Psychic',
      averageWeight: {
          value: "48.0",
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/8/88/Spr_5b_065_m.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)"
  },
  {
      id: 151,
      name: "Mew",
      type: 'Psychic',
      averageWeight: {
          value: "4.0",
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/4/43/Spr_5b_151.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)"
  },
  {
      id: 78,
      name: "Rapidash",
      type: 'Fire',
      averageWeight: {
          value: "95.0",
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/5/58/Spr_5b_078.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)"
  },
  {
      id: 143,
      name: "Snorlax",
      type: 'Normal',
      averageWeight: {
          value: "460.0",
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/4/40/Spr_5b_143.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)"
  },
  {
      id: 148,
      name: "Dragonair",
      type: 'Dragon',
      averageWeight: {
          value: "16.5",
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/2/2c/Spr_5b_148.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
  },
  {
    id: 196,
    name: "Espeon",
    type: 'Psychic',
    averageWeight: {
        value: "26.5",
        measurementUnit: "kg"
    },
    image: "https://cdn2.bulbagarden.net/upload/0/07/Spr_5b_196.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Espeon_(Pok%C3%A9mon)"
  },
  {
    id: 106,
    name: "Hitmonlee",
    type: 'Fighting',
    averageWeight: {
        value: "49.8",
        measurementUnit: "kg"
    },
    image: "https://cdn2.bulbagarden.net/upload/9/99/Spr_5b_106.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Hitmonlee_(Pok%C3%A9mon)"
  },
  {
    id: 104,
    name: "Cubone",
    type: 'Ground',
    averageWeight: {
        value: "6.5",
        measurementUnit: "kg"
    },
    image: "https://cdn2.bulbagarden.net/upload/a/a0/Spr_5b_104.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Cubone_(Pok%C3%A9mon)"
  },
  {
    id: 1,
    name: "Bulbasaur",
    type: 'Grass',
    averageWeight: {
        value: "6.9",
        measurementUnit: "kg"
    },
    image: "https://cdn2.bulbagarden.net/upload/7/76/Spr_5b_001.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)"
  },
  {
    id: 9,
    name: "Blastoise",
    type: 'Water',
    averageWeight: {
        value: "101.1",
        measurementUnit: "kg"
    },
    image: "https://cdn2.bulbagarden.net/upload/3/3d/Spr_5b_009.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Blastoise_(Pok%C3%A9mon)"
  },
  {
    id: 18,
    name: "Pidgeot",
    type: 'Flying',
    averageWeight: {
        value: "39.5",
        measurementUnit: "kg"
    },
    image: "https://cdn2.bulbagarden.net/upload/8/8a/Spr_5b_018.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pidgeot_(Pok%C3%A9mon)"
  },
  {
    id: 76,
    name: "Golem",
    type: 'Rock',
    averageWeight: {
        value: "300",
        measurementUnit: "kg"
    },
    image: "https://cdn2.bulbagarden.net/upload/3/31/Spr_5b_076.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Golem_(Pok%C3%A9mon)"
  },
  {
    id: 92,
    name: "Gastly",
    type: 'Ghost',
    averageWeight: {
        value: "0.1",
        measurementUnit: "kg"
    },
    image: "https://cdn2.bulbagarden.net/upload/f/f3/Spr_5b_092.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Gastly_(Pok%C3%A9mon)"
  },
  {
    id: 93,
    name: "Haunter",
    type: 'Ghost',
    averageWeight: {
        value: "0.1",
        measurementUnit: "kg"
    },
    image: "https://cdn2.bulbagarden.net/upload/6/6d/Spr_5b_093.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Haunter_(Pok%C3%A9mon)"
  },
  {
    id: 94,
    name: "Gengar",
    type: 'Ghost',
    averageWeight: {
        value: "40.5",
        measurementUnit: "kg"
    },
    image: "https://cdn2.bulbagarden.net/upload/2/21/Spr_5b_094.png",
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Gengar_(Pok%C3%A9mon)"
  },
];

export default pokemons;
