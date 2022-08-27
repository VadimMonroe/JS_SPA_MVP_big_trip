import { getRandomInteger } from '../utils.js';
import { getOffers } from './offers.js';


export const cities = [
  'London',
  'Dubai',
  'Kazan',
  'Los Angeles'
];

const generateCities = () => cities[getRandomInteger(0, cities.length - 1)];

const generateDescription = () => {

  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.'
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const generatePointType = () => {

  const pointType = [
    'taxi',
    'bus',
    'train',
    'ship',
    'drive',
    'flight',
    'check-in',
    'sightseeing',
    'restaurant'
  ];

  const randomIndex = getRandomInteger(0, pointType.length - 1);

  return pointType[randomIndex];
};

const generatePictures = () => {
  const listPictures = [];
  for (let i = 0; i < getRandomInteger(0, 9); i++) {
    listPictures.push({
      src: `http://picsum.photos/300/200?r=0.076256300516331${i}`,
      description: generateDescription(),
    });
  }
  return listPictures;
};

export const getDestination = () => {
  const generateDestination = (idInner) => ({
    id: idInner,
    description: generateDescription(),
    name: generateCities(),
    pictures: generatePictures()
  }
  );

  const destinations = [];

  for (let i = 0; i < 15; i++) {
    destinations.push(generateDestination(i));
  }
  return destinations;
};

const getOffersId = (type) => {
  for (let i = 0; i < getOffers().length; i++){
    if (getOffers()[i].type === type) {
      return getOffers()[i].offers.map((offer) => offer.id);
    }
  }
};

export const generateDataPoint = () => ({
  basePrice: getRandomInteger(500, 3000),
  dateFrom: new Date(getRandomInteger(2010, 2022), getRandomInteger(0, 12), getRandomInteger(0, 31), getRandomInteger(0, 24), getRandomInteger(0, 60)),
  dateTo: new Date(), //'2019-07-11T11:22:13.375Z',
  destination: getDestination()[getRandomInteger(0, getDestination().length - 1)].id,
  id: '0',
  offers: [],
  type: generatePointType()
});


export const generatePoint = () => {
  const generatedObject = generateDataPoint();
  generatedObject.offers = getOffersId(generatedObject.type);
  return generatedObject;
};
