import { createAction } from 'redux-actions'

/**
 * Constants
 */

export const ADD_ORDER = 'ADD_ORDER'
export const LIST_ORDERS = 'LIST_ORDERS'
export const PICKED_UP_ORDER = 'PICKED_UP_ORDER'

/**
 * Actions
 */

export const addOrderRequest = createAction(ADD_ORDER)

export const listOrdersRequest = createAction(LIST_ORDERS)

export const pickedUpOrderRequest = createAction(PICKED_UP_ORDER)
