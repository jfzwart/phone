import React from 'react';
import { connect} from 'react-redux';
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
              <div className="description">
                <h2>Form: {call.from}</h2>
                <p>Type: {call.type}</p>
                <p>Duration: {call.duration}</p>
              </div>
            </div>
            <button
              className="ui button primary"
              onClick={updateCall}
              >
              Archive
            </button>
          </div>
          );
      }
    })
}

  render() {
    return (
    <div>
          <button
              className="ui button primary">
              Reset Calls
          </button>
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
