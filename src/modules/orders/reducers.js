import { handleActions } from 'redux-actions'

import { ADD_ORDER, LIST_ORDERS, PICKED_UP_ORDER } from './actions'

const initialState = {
  listOrders: [],
  order: null,
  status: null,
  error: null,
}

export default handleActions(
  {
    [ADD_ORDER]: (state, { payload, type }) => ({
      ...state,
      listOrders: [...state.listOrders, payload],
      order: null,
      status: type,
      error: null,
    }),
    [LIST_ORDERS]: (state, { payload, type }) => ({
      ...state,
      order: null,
      status: type,
      error: null,
    }),
    [PICKED_UP_ORDER]: (state, { payload, type }) => ({
      ...state,
      listOrders: state.listOrders.map((order) => {
        return order.name !== payload.name
          ? order
          : {
              ...payload,
              status: 'picked-up',
            }
      }),
      order: null,
      status: type,
      error: null,
    }),
  },
  initialState,
)
