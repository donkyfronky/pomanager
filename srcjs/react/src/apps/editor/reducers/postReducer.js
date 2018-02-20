
// - Import action types
import * as types from '../constants/actionTypes'

/* ---------------- */


/**
 * Default State
 */
var defaultState = {
  userPosts: {},
  loaded: false,
  text: ""
}


/**
 * Post reducer
 * @param {object} state
 * @param {object} action
 */
export let postReducer = (state = defaultState, action) => {
  const { payload } = action
  switch (action.type) {
    case types.CLEAR_ALL_DATA_POST:
      return defaultState
    case types.SAVE_TEXT:
      return {
        ...state,
        text: payload.text
      }
    case types.ADD_IMAGE_POST:
      return {
        ...state,
        userPosts: {
          ...state.userPosts,
          [payload.uid]: {
            ...state.userPosts[payload.uid],
            [payload.post.id]: { ...payload.post }
          }
        }
      }

    case types.ADD_POST:
      return {
        ...state,
        userPosts: {
          ...state.userPosts,
          [payload.uid]: {
            ...state.userPosts[payload.uid],
            [payload.post.id]: { ...payload.post }
          }
        }
      }

    case types.ADD_LIST_POST:
      return {
        ...state,
        userPosts: {
          ...state.userPosts,
          [payload.uid]: {
            ...state.userPosts[payload.uid],
            ...payload.posts
          }
        },
        loaded:true

      }

    default:
      return state;

  }
}