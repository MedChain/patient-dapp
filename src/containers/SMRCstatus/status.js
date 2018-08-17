import React from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom'
import Footer from '../logs/logs'
import { ENGINE_METHOD_STORE } from 'constants';
import {createStore, getState} from 'redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import { toggleDD } from '../../modules/SMRCstatus'

const mapStateToProps = (state, ownProps) => ({
  toggle: state.toggle.toggle
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
      toggleDD
    },
    dispatch
  )

class Page extends React.Component {
    componentDidMount() {
      this.props.toggleDD();
    }
  constructor(props) {
    super(props);
    this.state = {
      listOpen: this.props.toggle
    }
}

handleClickOutside(){
  this.setState({
    listOpen: false
  })
}
toggleList(){
  this.setState(prevState => ({
    listOpen: !prevState.listOpen
  }))
}
  render() {
    const{listOpen} = this.state
    return (
    // <div className="dd-wrapper">
    //   <li className="dropdown dd-header">
    //       <div className="nav-link dd-title" id="navbarDropdown" data-toggle="dropdown">
    //         <img alt="" className="support-3" src="../images/connection.png" />
    //       </div>
    //       <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //         <a className="dropdown-item">Secure Medical Record Chain</a>
    //         <a className="dropdown-item"> Private IPFS</a>
    //         <div className="dropdown-divider" />
    //         <Footer />
    //       </div>
    //     </li>
    // </div>
    <div className="dd-wrapper">
      <div className="dd-header" onClick={() => this.toggleList()}>
        <div className="dd-header-title">title</div>
        {/* {listOpen
          ? <FontAwesome name="angle-up" size="2x"/>
          : <FontAwesome name="angle-down" size="2x"/>
        } */}
      </div>
      {listOpen && <ul className="dd-list">
       {/* {list.map((item) => (
         <li className="dd-list-item" key={item.id} >{item.title}</li>
        ))} */}
        <li className="dd-list-item">yay</li>
      </ul>}
    </div>
    )
  }
}

  

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Page)
