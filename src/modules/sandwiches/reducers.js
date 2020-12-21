import { handleActions } from 'redux-actions'

import { ADD_SANDWICH, UPDATE_SANDWICH, LIST_SANDWICHES } from './actions'

const initialState = {
  listSandwiches: [],
  inventory: {
    bread: 40,
    lettuce: 20,
    tomato: 20,
    cheese: 10,
    bacon: 10,
    turkey: 5,
  },
  sandwich: null,
  totalPrice: 0.0,
  status: null,
  error: null,
}

const calcInventory = (currentState, payload) => {
  Object.keys(payload.ingredients).forEach((key) => {
    currentState.inventory[key] -= payload.ingredients[key]
  })

  return currentState
}

export default handleActions(
  {
    [ADD_SANDWICH]: (state, { payload, type }) => ({
      ...state,
      listSandwiches: [...state.listSandwiches, payload],
      inventory: Object.assign(
        {},
        state.inventory,
        calcInventory(state, payload),
      ),
      sandwich: null,
      totalPrice: state.totalPrice + payload.price,
      status: type,
      error: null,
    }),
    [UPDATE_SANDWICH]: (state, { payload, type }) => ({
      ...state,
      listSandwiches: [],
      totalPrice: 0,
      sandwich: null,
      status: type,
      error: null,
    }),
    [LIST_SANDWICHES]: (state, { payload, type }) => ({
      ...state,
      sandwich: null,
      status: type,
      error: null,
    }),
  },
  initialState,
)
