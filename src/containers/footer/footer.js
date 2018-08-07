import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  apiGetLogs,
} from '../../modules/logs'


import './footer.css'

class Footer extends React.Component {
  componentDidMount() {
    this.props.apiGetLogs();
  }

  render() {
    return (
      <div id="footer">
        Logs: {this.props.logs.map(object => {
          return (
            <span>
              {object.msg}
              <br/>
            </span>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ logs }) => ({
  logs: logs.logs
})

const mapDispatchToProps = dispatch => bindActionCreators({
    apiGetLogs,
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
