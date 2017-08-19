import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import AppNavigator from '../components/App';

function nav(state, action) {
  console.log(state, action)
  switch (action.type) {
    default:
      return AppNavigator.router.getStateForAction(action, state);
  }
}

const rootReducer = combineReducers({
  nav
});

export default rootReducer;
