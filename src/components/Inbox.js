import React from 'react';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCalls, updateCall, resetCalls } from '../actions';

// rewrite as a class based component to use lifecycle methods!

class Inbox extends React.Component {

  componentDidMount() {
    this.props.fetchCalls();
  }

  renderList() {
    return this.props.calls.map(call => {
      if (call.is_archived === false ) {
        return (
          <div className="item" key={call.id}>
          <i className="large middle alligned icon phone" />
            <div className="content">
            <Link to={`/call/${call.id}`} className="header">{call.from}</Link>
              <div className="description">
                <p>Type: {call.direction}</p>
                <p>Duration: {call.duration}</p>
              </div>
                <button
                  className="ui right floated primary button"
                  onClick={()=>this.props.updateCall(call.id)}
                  >
                  Archive
                </button>
            </div>
          </div>
          );
      }
    })
}

  render() {
    return (
    <div>
          <div
          className="ui relaxed devided list">
          {this.renderList()}
          </div>
        </div>
    )
  }
}

  const mapStateToProps = state => {
    return { calls: Object.values(state.calls)}
  }

const mapDispatchToProps = {
  fetchCalls, updateCall, resetCalls
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Inbox);
