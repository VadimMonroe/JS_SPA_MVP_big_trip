import { getRandomInteger, humanizeTime } from '../utils.js';
import { getOffers } from './offers.js';
import { getPointTypes } from './point-types,.js';

const generateCities = () => {

  const cities = [
    'London',
    'Dubai',
    'Kazan',
    'Los Angeles'
  ];

  const randomIndex = getRandomInteger(0, cities.length - 1);

  return cities[randomIndex];
};

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



// export const generateDestination = () => ({
//   id: 1,
//   description: generateDescription(),
//   name: generateCities(),
//   pictures: [
//     {
//       src: 'http://picsum.photos/300/200?r=0.0762563005163317',
//       description: 'Chamonix parliament building',
//     }
//   ]
// }
// );



/** Генерируем массив offers. он должен быть с 1 типом.
 * Типы и их offers можно посмотреть в файле src/mock/offers.js
 * */
// const generateOffers = () => {
//   const randomIndex = getRandomInteger(0, getOffers().length - 1);

//   // const offers = [
//   //   { id: 1, title: 'Infotainment system', price: 20 },
//   // ];

//   return getOffers()[randomIndex];
// };

export const getDestination = () => {
  const generateDestination = (idInner) => ({
    id: idInner,
    description: generateDescription(),
    name: generateCities(),
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: generateDescription(),
      }
    ]
  }
  );
  
  let destinations = [];
  
  for (let i = 0; i < 15; i++) {
    destinations.push(generateDestination(i));
  }
  return destinations
}


// делаем из массива объектов, массив с id.
 // подробнее про метод map: https://learn.javascript.ru/array-methods#map
// const getOffersId = (pointTypeInner) => getOffers().map((offer) => offer.id);
const getOffersId = (type) => {
  for (let i = 0; i < getOffers().length; i++){
    if (getOffers()[i].type == type) {
      return getOffers()[i].offers.map((offer) => offer.id);
    };
  };
};


const generateRandomType = () => {
  // Берём из point-types рандомный индекс из массива и вытаскиваем Тип
  return getPointTypes()[getRandomInteger(0, getPointTypes().length - 1)].type
}

export const generateDateForPoint = () => ({
  basePrice: 1100,
  dateFrom: humanizeTime('2019-07-10T22:55:56.845Z'),
  dateTo: humanizeTime('2019-07-11T11:22:13.375Z'),
  destination: getDestination()[getRandomInteger(0, getDestination().length - 1)].id, //$Destination.id$
  id: '0',
  offers: [], // [1,2,3] //$Array<Offer.id>$
  type: 0
});


export const generatePoint = () => {
  const type = generatePointType();
  const offers = getOffersId(type);

  const generatedObject = generateDateForPoint();
  generatedObject.type = type;
  generatedObject.offers = offers;

  return generatedObject
};
