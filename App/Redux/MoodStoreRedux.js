import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import stateToStorage from '../Transforms/MoodStateToStorage'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  checkIn: ['moodData'],
})

export const MoodStoreTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  moodHistory: [],
})

/* ------------- Selectors ------------- */

export const MoodStoreSelectors = {
  getData: state => state.moodHistory
}

/* ------------- Reducers ------------- */

// request the data from an api
export const checkIn = (state, { moodData }) =>
  state.merge({ moodHistory: [...state.moodHistory, stateToStorage(moodData)] })


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHECK_IN]: checkIn,
})
