const pokemons = [
  {
      id: 25,
      name: "Pikachu",
      type: 'Electric',
      averageWeight: {
          value: "6.0",
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
  },
  {
      id: 4,
      name: "Charmander",
      type: 'Fire',
      averageWeight: {
          value: "8.5",
          measurementUnit: "kg"
      },
      image: "https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png",
      moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
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
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
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
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
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
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
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
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
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
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
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
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
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
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
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
    moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
  },
];

export default pokemons;
