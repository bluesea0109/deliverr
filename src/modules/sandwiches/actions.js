import { createAction } from 'redux-actions'

/**
 * Constants
 */

export const ADD_SANDWICH = 'ADD_SANDWICH'
export const UPDATE_SANDWICH = 'UPDATE_SANDWICH'
export const LIST_SANDWICHES = 'LIST_SANDWICHES'

/**
 * Actions
 */

export const addSandwichRequest = createAction(ADD_SANDWICH)

export const updateSandwichRequest = createAction(UPDATE_SANDWICH)

export const listSandwichesRequest = createAction(LIST_SANDWICHES)
