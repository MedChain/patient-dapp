import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  apiGetLogs,
} from '../../modules/logs'


import './logs.css'

class Footer extends React.Component {
  componentDidMount() {
    this.props.apiGetLogs();
  }

  componentDidUpdate(prevProps) {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
  }

  render() {
    return (
      <div id="logs">
        <span id="title">Blockchain Logs:</span>
        <div id="messages">
          {this.props.logs.map(object => {
            return (
              <span>
                {object.msg}
                <br/>
              </span>
            )
          })}
          <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    logs: state.logs.logs
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({
    apiGetLogs,
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer)
