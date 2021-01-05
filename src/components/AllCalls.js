import React from 'react';
import { connect} from 'react-redux';
import { fetchCalls, resetCalls } from '../actions';
import { Link } from 'react-router-dom';

// rewrite as a class based component to use lifecycle methods!

class AllCalls extends React.Component {

  componentDidMount() {
    this.props.fetchCalls();
  }

  renderList() {
      return this.props.calls.map(call => {
        return (
          <div className="item" key={call.id}>
          <i className="large middle alligned icon phone" />
            <div className="content">
              <Link to={`/call/${call.id}`} className="header">{call.from}</Link>
              <div className="description">
                <p>Type: {call.direction}</p>
                <p>Duration: {call.duration}</p>
              </div>
            </div>
          </div>
          );
        })
      }


  render() {
    return (
      <div>
        <div className="ui relaxed devided list">{this.renderList()}</div>
          <button
            className="ui button primary"
            onClick={this.props.resetCalls}
            >
            Reset Calls To Inbox
          </button>
        </div>
      )
  }
}

  const mapStateToProps = state => {
    console.log(state)
    return { calls: Object.values(state.calls)}
  }


export default connect(
  mapStateToProps,
  { fetchCalls, resetCalls }
  )(AllCalls);



// const ImageList = (props) => {
//     // console.log(props.images)
//     const images = props.images.map((image) => {
//         return <ImageCard key={image.id} image={image} />
//     })

//     return <div className="image-list">{images}</div>
// };
