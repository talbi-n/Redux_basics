//default state
const initialState = {
  posts: [
    { id: 1, title: 'Post 1', body: 'you are in the post 1' },
    { id: 2, title: 'Post 2', body: 'you are in the post 2' },
    { id: 3, title: 'Post 3', body: 'you are in the post 3' },
  ],
};
const rootReducer = (state = initialState, action) => {
  if (action.type === 'Delete_Post') {
    let newPosts = state.posts.filter((post) => {
      return post.id !== action.id;
    });
    return {
      ...state,
      posts: newPosts,
    };
  }
  return state;
};
export default rootReducer;
