const OFFERS = [
  {
    type: 'train',
    offers: [
      { id: 1, title: 'Random', price: 530 },
      { id: 2, title: 'Random2', price: 30 }
    ],
  },
  {
    type: 'taxi',
    offers: [
      { id: 1, title: 'Random', price: 10 },
      { id: 2, title: 'Random1', price: 15 },
      { id: 3, title: 'Random2', price: 50 },
    ],
  },
  {
    type: 'bus',
    offers: [
      { id: 1, title: 'Random', price: 20 },
    ],
  },
  {
    type: 'check-in',
    offers: [
      { id: 1, title: 'RandomRandom', price: 530 },
      { id: 2, title: 'RandomRandom2', price: 320 }
    ],
  },
  {
    type: 'sightseeing',
    offers: [],
  },
  {
    type: 'ship',
    offers: [
      { id: 1, title: 'RandomRandomRa', price: 10 },
      { id: 2, title: 'RandomRandomRa1', price: 70 }
    ],
  },
  {
    type: 'drive',
    offers: [
      { id: 1, title: 'RandomRandom', price: 20 },
      { id: 2, title: 'RandomRandom1', price: 250 },
      { id: 3, title: 'RandomRandom2', price: 350 },
      { id: 4, title: 'RandomRandom3', price: 950 },
      { id: 5, title: 'RandomRandom4', price: 150 }
    ],
  },
  {
    type: 'restaurant',
    offers: [
      { id: 1, title: 'Random', price: 90 },
      { id: 2, title: 'Random2', price: 30 },
      { id: 3, title: 'Random3', price: 20 },
      { id: 4, title: 'Random4', price: 10 }
    ],
  },
  {
    type: 'flight',
    offers: [
      { id: 1, title: 'Random', price: 50 },
      { id: 2, title: 'Random2', price: 10 },
      { id: 3, title: 'Random3', price: 20 }
    ],
  }
];

export const getOffers = () => OFFERS;
