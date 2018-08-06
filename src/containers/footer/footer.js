import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './footer.css'

const Footer = props => (
  <div id="footer">
    Logs: {props.logs.map(object => {
      return (
        <span>
          {object.msg}
          <br/>
        </span>
      )
    })}
  </div>
)

const mapStateToProps = ({ logs }) => ({
  logs: logs.logs
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
