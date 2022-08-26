const POINT_TYPES = [
  {
    id: 1,
    type: 'taxi',
    label: 'event__type-label--taxi'
  },
  {
    id: 2,
    type: 'bus',
    label: 'event__type-label--bus'
  },
  {
    id: 3,
    type: 'train',
    label: 'event__type-label--train'
  },
  {
    id: 4,
    type: 'ship',
    label: 'event__type-label--ship'
  },
  {
    id: 5,
    type: 'drive',
    label: 'event__type-label--drive'
  },
  {
    id: 6,
    type: 'flight',
    label: 'event__type-label--flight'
  },
  {
    id: 7,
    type: 'check-in',
    label: 'event__type-label--check-in'
  },
  {
    id: 8,
    type: 'sightseeing',
    label: 'event__type-label--sightseeing'
  },
  {
    id: 9,
    type: 'restaurant',
    label: 'event__type-label--restaurant'
  }
];

export const getPointTypes = () => POINT_TYPES;