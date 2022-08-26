import { getOffers } from '../mock/offers.js';
import { generatePoint } from '../mock/point.js';
import { getDestination } from '../mock/point.js';

export default class PointModel {
  points = Array.from({ length: 3 }, generatePoint);

  offers = getOffers();

  destinations = getDestination();

  getPoint = (point) => {
    const offerByType = this.offers.find(({ type }) => type === point.type);
    const offers = offerByType.offers.filter(({ id }) => point.offers.includes(id));

    const destination = this.destinations.find(({ id }) => id === point.destination);
    return {...point, offers, destination};
  };



  /** Через map проходимся по сгенерированным points и применяем вспомогательную функцию */
  getPoints = () => this.points.map((point) => this.getPoint(point));
}
