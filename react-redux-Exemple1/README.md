# 1- instaal this packeges :

npm install redux react-redux

# 2- where we create the store --> the best place to call this package is the index(root component) :

//Provider here is a component wich entourne et enveloppe application
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const store = createStore()
// pass store as props of our provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

# 3- create the reducer folder : we specify all the shcema of the store

# when we do connect(fname)(component)==>

this mean we connect to our redux stoore get specific data (we specify with fname) and wrap this data as prop in component

# 4- Mapping props \***\*get all posts from our state\*\***:

in home if we want to access to the redux local store we must use the {connect} function to connect component 'home' with the store and define a function to map the state as props of component (this function to specify witch data we want to get from our state ) :
---**_witch connect return the higher order component_**---
import { connect } from 'react-redux';
.
. ///code
.
//here we define witch data we want to use from redux state
const mapStateToProps = (state) => {
return {
posts: state.posts,
};
};
export default connect(mapStateToProps)(Home);

# 5- get individual Post details from our state : see post.js

the very important is this function
const mapStateAsProps=(state,ownProps)=>{//OwnProps here is the prop of ourr component ==> to get his params
const id = ownProps.match.params.post_id;//post_id is the params look to app.js
return {
post: state.posts.find((post) => post.id === id),
};

# 6- Map Props and Dispatch Action :

dispatch action from component to reducer
reducer checkes .. and it update the local store state \***\*the exempple here is to delete our post \*\***

const mapDispatchToProps = (dispatch) => {
return {
//the same think we want to filter deletePost from high order component
deletePost: (id) =>
dispatch({
id: id,
type: 'Delete_Post',
}),
};
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);

handleClick = () => {
this.props.deletePost(this.props.post.id);//because this declared method becaume as props oof this component
};

/// know it must be deleted from the state using the reducer
if (action.type === 'Delete_Post') {
let newPosts = posts.filters((post) => {
return post.id !== action.id;
});
return {
...state,
posts: newPosts,
};
}

# 7- for more readable code we use action creators :

create Action folder --> PostActions file
