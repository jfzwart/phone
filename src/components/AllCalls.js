import React from 'react';
import { connect} from 'react-redux';
import { fetchCalls } from '../actions';

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
            <div className="description">
              <h2>Form: {call.from}</h2>
              <p>Type: {call.type}</p>
              <p>Duration: {call.duration}</p>
            </div>
          </div>
        </div>
        );
    })
}


  render() {
    return <div className="ui relaxed devided list">{this.renderList()}</div>
  }
}

  const mapStateToProps = state => {
    console.log(state)
    return { calls: Object.values(state.calls)}
  }


export default connect(
  mapStateToProps,
  { fetchCalls }
  )(AllCalls);



// const ImageList = (props) => {
//     // console.log(props.images)
//     const images = props.images.map((image) => {
//         return <ImageCard key={image.id} image={image} />
//     })

//     return <div className="image-list">{images}</div>
// };
