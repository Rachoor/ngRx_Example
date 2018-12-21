import { ConfigActions, EConfigActions } from './../actions/config.actions';
import { initialConfigState, IConfigState } from './../state/config.state';
export const configReducers = (
  state = initialConfigState,
  action: ConfigActions
) => {
  switch (action.type) {
    case EConfigActions.GetConfig: {
      return {
        ...state,
        config: action.type,
      };
    }
    default:
      return state;
  }
};
