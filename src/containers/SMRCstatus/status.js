import React from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom'
import Footer from '../logs/logs'
import { ENGINE_METHOD_STORE } from 'constants';
import {createStore, getState} from 'redux'



function toggleStatus(state=true, action){
  switch (action.type){
    case 'OPEN': return true;
    case 'CLOSE': return false;
  }
}
const statusState = createStore(toggleStatus, true) 


class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statusOpen: statusState.getState()
    };
  }

  openStatus() {
    this.setState({statusOpen: true});
  }

  afterOpenStatus() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeStatus() {
    this.setState({statusIsOpen: false});
  }
  render() {
    return (
    <div className="nav-wrapper">
    <li className="dropdown nav-header" onClick={() => this.toggleList()}>
    
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



// export const changeStatus() = statusIsOpen