import { render } from '../render.js';
import PointsView from '../view/point-view.js';
import SortView from '../view/sort-view.js';
import TripListView from '../view/trip-events-list-view';
import NewPointView from '../view/new-point-view.js';
import EditPointView from '../view/edit-point-view.js';

export default class BoardPresenter {
  eventsList = new TripListView();

  init = (boardContainer, pointsModel) => {
    // Общий контейнер
    this.boardContainer = boardContainer;

    // Получаем модели
    this.pointsModel = pointsModel;
    // Обновляем модели
    this.boardPoints = this.pointsModel.points;

    // Отрисовываем сортировки
    render(new SortView(), this.boardContainer);

    // Отрисовываем контейнер для точек
    render(this.eventsList, this.boardContainer);

    // render(new NewPointView(this.boardPoints[1]), this.eventsList.getElement());
    // render(new EditPointView(this.boardPoints[0]), this.eventsList.getElement());
    // for (let i = 0; i < this.boardPoints.length; i++) {
    //   render(new PointsView(this.boardPoints[i]), this.eventsList.getElement());
    // }

    // Отрисовываем готовые точки
    for (let i = 0; i < this.boardPoints.length; i++) {
      this.#renderPoint(this.boardPoints[i]);
    }
  };

  #renderPoint = (point) => {
    const pointComponent = new PointsView(point);
    const editPointComponent = new EditPointView(point);

    // ----------

    const replacePointToEditForm = () => {
      this.eventsList.element.replaceChild(editPointComponent.element, pointComponent.element);
    };

    pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToEditForm();
    });

    // ----------

    const replaceEditFormToPoint = () => {
      this.eventsList.element.replaceChild(pointComponent.element, editPointComponent.element);
    };

    editPointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceEditFormToPoint();
    });

    render(pointComponent, this.eventsList.element);
  };

}

