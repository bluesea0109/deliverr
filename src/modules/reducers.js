import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import sandwichesReducer from './sandwiches/reducers'
import ordersReducer from './orders/reducers'

const rootReducer = combineReducers({
  form,
  sandwiches: sandwichesReducer,
  orders: ordersReducer,
})

export default rootReducer
