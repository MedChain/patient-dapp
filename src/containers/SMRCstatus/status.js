import React from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom'
import Footer from '../logs/logs'
import { ENGINE_METHOD_STORE } from 'constants';
import {createStore, getState} from 'redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import { toggleDD } from '../../modules/SMRCstatus'

Modal.setAppElement('#status')

class Page extends React.Component {
    componentDidMount() {
      this.props.toggleDD();
    }
  constructor(props) {
    super(props);
    

  }
  render() {
    return (
    <div className="nav-wrapper">
    <li className="dropdown nav-header" onClick={this.props.toggleDD}>
      <Modal
            contentLabel="Status Modal"
            isOpen={this.state.toggle}
            // onAfterOpen={this.afterOpenModal}
            // onRequestClose={this.closeModal}
            // className="Modal"
            // overlayClassName="Overlay"
          >
          <div
            className="nav-link"
            id="navbarDropdown"
            data-toggle="dropdown"
            // aria-haspopup="false"
            // aria-expanded="false">
            >
            <img alt="" className="support-3" src="../images/connection.png" />
          </div>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item">Secure Medical Record Chain</a>
            <a className="dropdown-item"> Private IPFS</a>
            <div className="dropdown-divider" />
            <Footer />
          </div>
      </Modal>
        </li>
    </div>
      );
    }
  }

  const mapStateToProps = (state, ownProps) => ({
    toggle: state.toggle.toggle
  })

  const mapDispatchToProps = dispatch =>
    bindActionCreators({
        toggleDD
      },
      dispatch
    )

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Page)
