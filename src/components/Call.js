import React from 'react';
import { connect} from 'react-redux';
import { fetchCall } from '../actions';

class Call extends React.Component {


  componentDidMount() {
    this.props.fetchCall(this.props.match.params.id)

    console.log(this.props)
  }

  render() {
    console.log(this.props)
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">{this.props.match.params.id}</div>
          <div className="meta">
            <span className="right floated time">..</span>
            <span className="category">Animals</span>
          </div>
          <div className="description">
            <p></p>
          </div>
        </div>
          <div className="extra content">
            <div className="right floated author">
            </div>
          </div>
        </div>
      )
   }
}


const mapStateToProps = (state, ownProps) => {
  return { call: state.calls[ownProps.match.params.id] }; //grabs the props from the current id (url)
};


export default connect(
  mapStateToProps,
  { fetchCall }
  )(Call);

