import React, { Component } from 'react';
import { DeleteAction } from '../Actions/PostActions';
//here we get individual Post details from our state
import { connect } from 'react-redux';
class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id); //because this declared method becaume as props oof this component
    this.props.history.push('/'); //to redirect
  };
  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="grey btn" onClick={this.handleClick}>
            {' '}
            delete
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  //OwnProps here is the prop of ourr component ==> to get his params

  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id == id),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //the same think we want to filter deletePost from high order component
    deletePost: (id) =>
      //with actions creators we can just do
      //dispatch(DeleteAction(id))
      dispatch({
        id: id,
        type: 'Delete_Post',
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
