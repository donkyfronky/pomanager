 // - Import image gallery action types
import * as types from '../constants/actionTypes'
import * as appHelper from '../helpers/applHelper'


 export const loadData = (data) => {
  return {
    type: types.LOAD_DATA,
    payload: data
  }
}

/**
 * Progress change
 * @param {string} percent
 * @param {boolean} visible
 */
export const clickedRoute = (clicked_route) => {
    return {
        type: types.CHANGED_ROUTE,
        payload: {clicked_route}
    }
}

 export let dbAddPost = (newPost,callBack, failureCallBack) => {
     return(dispatch,getState) => {


         let jwt = getState().globalAppData.user.jwt;
         var route = appHelper.getRoute(appHelper.ROUTE_USER_DATA);


         var postRef = fetch(route, {headers: {"Authorization": jwt},method: 'get'})
         return postRef.then(response=> {
             return response.json();
         }).then(data => {

         },(error) => console.log(error))
     }
 }