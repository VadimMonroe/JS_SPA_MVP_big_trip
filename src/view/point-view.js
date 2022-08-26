import { createElement } from '../render.js';
import { humanizeDate } from '../utils.js';

/** Вспомогательная функция, которая выводит разметку с параметрами */
const createOfferTemplate = ({ title, price }) => (`
  <li class="event__offer">
    <span class="event__offer-title">${title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${price}</span>
  </li>
`);

/** Вспомогательная функция, которая проходится по каждому элементу массива, и применяет функцию createOfferTemplate
 * Т.е после метода map мы получим просто массив со строками,
 * а потом через join обведением их и получаем одну цельную строку
*/
const createOffersTemplate = (offers) => offers?.length ? offers.map(createOfferTemplate).join('') : '';

const createPointsTemplate = (point) => {
  const { basePrice, dateFrom, dateTo, destination, offers, type } = point;

  /** Создаем разметку с offers */
  const offersTemplate = createOffersTemplate(offers);

  return (`
    <li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="2019-03-18">${humanizeDate('2019-03-18')}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${destination.name}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T14:30">${dateFrom}</time>
            &mdash;
            <time class="event__end-time" datetime="2019-03-18T16:05">${dateTo}</time>
          </p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${offersTemplate}
        </ul>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  `);
};

export default class PointsView {
  constructor(point) {
    this.point = point;
  }

  getTemplate() {
    return createPointsTemplate(this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
