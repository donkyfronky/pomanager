// - Import action types
import * as types from '../constants/actionTypes'

// - Import actions
import * as globalActions from './globalActions'
import * as mediaGalleryActions from './mediaGalleryActions'

/* _____________ CRUD DB _____________ */

/**
 * Add a normal post
 * @param {object} newPost
 * @param {function} callBack
 */
export let dbAddPost = (newPost,callBack, failureCallBack) => {
  return(dispatch,getState) => {


    let uid = getState().global.loggedAuthorId
    let item_id = getState().global.item_id
    let type_id = getState().global.type_id
    let mediaList = getState().mediaGallery.mediaList;

    let post = {
      item_id: item_id,
      type_id: type_id,
      body: newPost.body,
      user_id: parseInt(uid),
      publish_date: Date.now(),
      media: mediaList,
      status: 1
    }

    var url = window.location.href;
    var arr = url.split("/");
    var result = arr[0];

    var postRef = fetch(result + `/app/posts/`, {credentials: "same-origin",method: 'post', body: JSON.stringify({action: 'createPost', data: post})})
    return postRef.then(response=> {
      return response.json();
    }).then(data => {
      if (data.success === false) {
        dispatch(globalActions.showErrorMessage(data.error))
      failureCallBack()
      } else {
        dispatch(addPost(uid, {
          ...post,
          id: data.id
        }))
        callBack()
      }
    },(error) => dispatch(globalActions.showErrorMessage(error.error)))
  }
}

/**
 * Update a post from database
 * @param  {object} newPost
 * @param {func} callBack
 */
export const dbUpdatePost = (newPost,callBack) => {
  console.log(newPost)
  return (dispatch, getState) => {


    // Get current user id
    let uid = getState().global.loggedAuthorId
    let mediaList = getState.mediaGallery.mediaList;


    let post = getState().post.userPosts[uid][newPost.id]
    let updatedPost = {
      item_id: post.item_id,
      type_id: post.type_id,
      body: newPost.body ? newPost.body : post.body || '',
      user_id: uid,
      publish_date: Date.now(),
      media: mediaList ? mediaList : post.media,
      status:1
    }

    return fetch(`http://home.test.it.blastingnews.com/app/posts/`, {method: 'post', body: JSON.stringify({action: 'createPost', data: updatedPost})}).
    then(response=> {
      return response.json();
    }).then((result) => {

      dispatch(updatePost(uid,{id:newPost.id, ...updatedPost}))
      callBack()
      dispatch(globalActions.hideTopLoading())
    }, (error) => {
      dispatch(globalActions.showErrorMessage(error.message))
      dispatch(globalActions.hideTopLoading())
    })
  }

}



/**
 *  Get all user posts from data base
 */
export const dbGetPostById = (uid,postId) => {
  return (dispatch, getState) => {
    if (uid) {
      var postsRef = fetch(`userPosts/${uid}/posts/${postId}`);

      return postsRef.once('value').then((snapshot) => {
        const newPost = snapshot.val() || {};
        const post = {
          id : postId,
          ...newPost
        }
        dispatch(addPost(uid,post));
      });

    }
  }
}

export const clearAllMedia = () => {
  return (dispatch, getState) => {
    dispatch(mediaGalleryActions.clearAllMedia());
    return dispatch(clearAllData());
  }
}






/* _____________ CRUD State _____________ */

/**
 * Add a normal post
 * @param {string} uid is user identifier
 * @param {object} post
 */
export const addPost = (uid,post) => {
  return{
    type: types.ADD_POST,
    payload: {uid,post}
  }
}

/**
 * Update a post
 * @param {string} uid is user identifier
 * @param {object} post
 */
export const updatePost = (uid,post) => {
  return{
    type: types.UPDATE_POST,
    payload: {uid,post}
  }
}



/**
 * Clea all data in post store
 */
export const clearAllData = () => {
  return{
    type: types.CLEAR_ALL_DATA_POST
  }
}

/**
 * Add a post with image
 * @param {int} uid
 * @param {object} post
 */
export const addImagePost = (uid,post) => {
  return{
    type: types.ADD_POST,
    payload: {uid,post}
  }

}

export const saveText = (text) => {
  return{
    type: types.SAVE_TEXT,
    payload: text
  }
}

