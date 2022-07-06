import { ActionType } from '../action-type';
import browserHistory from '../../browser-history';

export const redirect =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
