import React from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom'
import Footer from '../logs/logs'
import { ENGINE_METHOD_STORE } from 'constants';
import {createStore, getState} from 'redux'


import toggleDD from '../../modules/SMRCstatus'


class Page extends React.Component {
    componentDidMount() {
      this.props.toggleDD();
    }
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     statusOpen: statusState.getState()
  //   };
  // }

  // openStatus() {
  //   this.setState({statusOpen: true});
  // }


  // closeStatus() {
  //   this.setState({statusIsOpen: false});
  // }
  render() {
    return (
    <div className="nav-wrapper">
    <li className="dropdown nav-header" onClick={() => this.openStatus()}>
    
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
          
        </li>
    </div>
      );
    }
  }

export default Page



