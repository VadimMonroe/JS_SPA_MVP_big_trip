const OFFERS = [
  {
    type: 'train',
    offers: [
      { id: 1, title: 'Book a taxi at the arrival point', price: 50 },
    ],
  },
  {
    type: 'taxi',
    offers: [
      { id: 1, title: 'Upgrade to a business class', price: 10 },
      { id: 2, title: 'Choose the radio station', price: 15 },
      { id: 3, title: 'Choose temperature', price: 50 },
    ],
  },
  {
    type: 'bus',
    offers: [
      { id: 1, title: 'Infotainment system', price: 20 },
    ],
  },
  {
    type: 'check-in',
    offers: [
      { id: 1, title: 'Choose the time of check-in', price: 50 },
      { id: 2, title: 'Order a meal from the restaurant', price: 30 },
    ],
  },
  {
    type: 'sightseeing',
    offers: [],
  },
  {
    type: 'ship',
    offers: [
      { id: 1, title: 'Choose meal', price: 130 },
      { id: 2, title: 'Choose seats', price: 70 },
    ],
  },
  {
    type: 'drive',
    offers: [
      { id: 1, title: 'With automatic transmission', price: 150 },
    ],
  },
  {
    type: 'restaurant',
    offers: [
      { id: 1, title: 'Choose VIP area', price: 90 },
    ],
  },
  {
    type: 'flight',
    offers: [
      { id: 1, title: 'Price -50%', price: 50 },
    ],
  }
];

export const getOffers = () => OFFERS;
