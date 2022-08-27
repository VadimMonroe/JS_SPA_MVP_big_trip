import { render } from '../render.js';
import PointsView from '../view/point-view.js';
import SortView from '../view/sort-view.js';
import TripListView from '../view/trip-events-list-view';
import NewPointView from '../view/new-point-view.js';
import EditPointView from '../view/edit-point-view.js';

export default class BoardPresenter {
  eventsList = new TripListView();

  init = (boardContainer, pointsModel) => {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;

    // Получаем все обновленные points
    this.boardPoints = this.pointsModel.getPoints();

    render(new SortView(), this.boardContainer);
    render(this.eventsList, this.boardContainer);
    render(new NewPointView(this.boardPoints[1]), this.eventsList.getElement());
    render(new EditPointView(this.boardPoints[0]), this.eventsList.getElement());

    // отрисовываем готовые точки
    for (let i = 0; i < this.boardPoints.length; i++) {
      render(new PointsView(this.boardPoints[i]), this.eventsList.getElement());
    }
  };
}
