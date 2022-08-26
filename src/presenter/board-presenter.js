import { render } from '../render.js';
import PointsView from '../view/point-view.js';
import SortView from '../view/sort-view.js';
import TripListView from '../view/trip-events-list-view';
import NewPointView from '../view/new-point-view.js';
import EditPointView from '../view/edit-point-view.js';
import { getOffers } from '../mock/offers.js';
import { getPointTypes } from '../mock/point-types,.js';

export default class BoardPresenter {
  eventsList = new TripListView();

  init = (boardContainer, pointsModel) => {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;

    // Получаем все обновленные points
    this.boardPoints = this.pointsModel.getPoints();
    // // Получаем destinations
    // this.boardDestination = this.pointsModel.getPointDestination();
    // Получаем все offers
    this.offers = getOffers();
    // Получаем все point-types
    this.pointTypes = getPointTypes();

    // console.log(this.offers);

    render(new SortView(), this.boardContainer);
    render(this.eventsList, this.boardContainer);
    // Передаем дополнительно массив offers
    render(new EditPointView(this.boardPoints[0], this.offers), this.eventsList.getElement());
    // Передаем дополнительно массив offers
    render(new NewPointView(this.boardPoints[1], this.offers), this.eventsList.getElement());

    // отрисовываем готовые точки
    for (let i = 0; i < this.boardPoints.length; i++) {
      render(new PointsView(this.boardPoints[i]), this.eventsList.getElement());
    }
  };
}
