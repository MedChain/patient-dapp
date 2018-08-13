import React from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom'
import Footer from '../logs/logs'




class Page extends React.Component {
  constructor() {
    super();

    this.state = {
      statusIsOpen: true
    };

    this.openStatus = this.openStatus.bind(this);
    this.afterOpenStatus = this.afterOpenStatus.bind(this);
    this.closeStatus = this.closeStatus.bind(this);
  }

  openStatus() {
    this.setState({statusIsOpen: true});
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
    <li className="dropdown nav-header">
    
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





// reducers
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT_REQUESTED:
//       return {
//         ...state,
//         isIncrementing: true
//       }

//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1,
//         isIncrementing: !state.isIncrementing
//       }

//     case DECREMENT_REQUESTED:
//       return {
//         ...state,
//         isDecrementing: true
//       }

//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1,
//         isDecrementing: !state.isDecrementing
//       }

//     default:
//       return state
//   }
// }


// export const changeStatus() = statusIsOpen