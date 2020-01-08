import { combineReducers } from 'redux';
import { localeReducer as locale } from 'react-localize-redux';
import loginreducer from './loginreducer'

export default combineReducers({
  locale,
  loginreducer
});
