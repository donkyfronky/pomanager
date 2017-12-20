// - Import action types
import * as types from '../constants/actionTypes'



/**
 * Default state
 */
var defaultState = {
  user: {
    logged:false,
    role: 'admin',
    jwt: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVhMjI3M2M4ODQ1NDIzMDA5NDA0M2Q0MSIsImhhc2hfcGFzc3dvcmQiOiIkMmEkMTAkNjJtVnJsZlVZSmxSU2x2LlZqd2tHdVRUM3ZER0pBU0UybkpJLkVncGVYaFE1VjRzZ3YzL0siLCJuaWNrIjoibWFyaW8iLCJmdWxsTmFtZSI6Ik1hcmlvIEJyZWdhIiwiZW1haWwiOiJtYXJpby5icmVnYUBsb2wuaXQiLCJfX3YiOjAsIm93blRhc2tzIjpbXSwiYWRtaW4iOmZhbHNlLCJjcmVhdGVkIjoiMjAxNy0xMi0wMlQwOTozNTowNC43NTBaIiwic3RhdHVzIjpbImFjdGl2ZSJdfSwiaWF0IjoxNTEyMjA3NTU3fQ.If3UkNAB8m2iuPpRiv_VFqPNL1iqcrIjCuEiGVsqdf4',
    routes: [
        {
            href:'/',
            icon:'icon-home',
            value:'Home'
        },
        {
            href:'/users',
            icon:'icon-grid',
            value:'Users'
        },
    ]
  },
    actual_route:'/'

}


/**
 * Global reducer
 * @param {object} state
 * @param {object} action
 */
export const globalReducer = (state = defaultState, action) => {
  const { payload } = action
  switch (action.type) {
      case types.CHANGED_ROUTE:

        return{
            ...state,
          actual_route:payload.clicked_route
        }
    case types.LOAD_DATA:
      return {
        ...state,
        flagLogged: payload.flagLogged,
        loggedAuthorId: payload.loggedAuthorId,
        loggedAuthorImage: !payload.flagLogged  ? '' :payload.loggedAuthorImage,
        item_id: payload.item_id,
        type_id: payload.type_id,
        verticalName: payload.vertical_name
      }

    default:
      return state
  }



}