import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Todos
// Adding Selectors 

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  storiesRequest: ['_page'],
  storiesSuccess: ['stories'],
  storiesFailure: null
})

export const StoriesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  stories: []
})

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state, {_page}) => state.merge({ fetching: true })

// successful avatar lookup
export const success = (state, action) => {
  const { stories } = action
  return state.merge({ fetching: false, error: null, stories})
}

// failed to get the avatar
export const failure = (state) => state.merge({ fetching: false, error: true, stories: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STORIES_REQUEST]: request,
  [Types.STORIES_SUCCESS]: success,
  [Types.STORIES_FAILURE]: failure
})
