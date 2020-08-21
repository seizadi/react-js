import JsonPlaceholder from "../services/JsonPlaceholder";
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach( id => dispatch(fetchUser(id)));

    // Chain lodash methods to do the above function
    // _.chain(getState().posts)
    //   .map('userId')
    //   .uniq()
    //   .forEach(id => dispatch(fetchUser(id)))
    //   .value();
}
export const fetchPosts = () => async dispatch => {
    const response = await JsonPlaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response.data});
};

export const fetchUsers = () => async dispatch => {
    const response = await JsonPlaceholder.get('/users');
    dispatch({type: 'FETCH_USERS', payload: response.data});
};

export const fetchUser = (id) => async dispatch => {
    const response = await JsonPlaceholder.get('/users/'+ id);
    dispatch({type: 'FETCH_USER', payload: response.data});
};

// export const fetchUser = id => dispatch => {
//     _fetchUser(id, dispatch);
// };
//
// const _fetchUser = _.memoize( async (id, dispatch) => {
//     const response = await JsonPlaceholder.get('/users/'+ id);
//     dispatch({type: 'FETCH_USER', payload: response.data});
// });
