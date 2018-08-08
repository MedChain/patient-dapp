import React from 'react'
import AppSelect from './app-select/app-select'
import AppData from './app-data/app-data'

const Page = () => (
  <div>
    <AppSelect>
      <AppData />
    </AppSelect>
    <div class="content">
    <div class="Patient">
      <div class="avi">
        <img class="p-image" src="https://static1.squarespace.com/static/55ecec2ae4b048d1ed402671/t/59f212ade9bfdff97985afaa/1516916823951/kara-circle-profile.png?format=500w"/>
      </div>
      <h3 class="p-name">Jane Doe </h3>
      <div class="ss">
        <div class="p-snapshot">mm/dd/yyyy</div>
        <div class="p-snapshotRight">mm/dd/yyyy</div>
      </div>
      <div class="email"> jane.doe@gmail.com</div>
      <div class="bottom-patient">
        <div class="reminder-header"> Reminders </div>
        <div class="reminder"> You have an appointment coming up with Dr.Smith Mon, August 13</div>
      </div>
      
    </div>
    {/* <div class="scheduled">
      <div class="s-text">SCHEDULED</div>
      
    </div>
    <div class="s-block">
      <div class="row1">
        <div class="apt"> 
          <div class="apt-text">Dermatology Associates 
            <div class="apt-location">Winchester, MA</div>
          </div>      
        </div>
        <div class="doc">
          <div class="doc-img">
            <img alt="" scr="..images/doc1.png"/>
          </div>
        </div>
      </div>
      <div class="row2">
        <div class="apt">
          <div class="apt-text">Boston Physical Therapy 
            <div class="apt-location">Boston, MA</div>
          </div>
        </div>
      </div>
      <div class="row3">
        <div class="apt">
        <div class="apt-text">Dermatology Associates 
          <div class="apt-location">Boston, MA</div>
        </div>
        </div>
      </div>
    </div> */}


    <div class="container">
      <div class="row" id="top-buttons">
        <div class="col-md-2" id="scheduled">SCHEDULED</div>
        <div class="col-md-2 offset-md-4">Add note</div>
        <div class="col-md-2">Cancel Visit</div>
        <div class="col-md-2">Make Payment</div>
      </div>
      <div class="row" id="main">
        <div class="col-md-2" id="hosp">
          <div class="apt-text">Dermatology Associates 
            <div class="apt-location">Winchester, MA</div>
          </div>  
        </div>
        <div class="col-md-2">
          <div class="doc-prof">
          DOCTOR
          <img class="dimg" src="http://medcare-c795.kxcdn.com/wp-content/uploads/2016/02/doctor-profile11.jpg"/>
          Dr.Smith
          </div>
        </div>
        <div class="col-md-2">Time Date</div>
        <div class="col-md-4">Notes</div>
        <div class="col-md-2">Get Info</div>
      </div>
      <div class="row" id="main">
        <div class="col-md-2" id="hosp">
          <div class="apt-text">Boston Physical Therapy 
              <div class="apt-location">Boston, MA</div>
            </div>
        </div>
        <div class="col-md-2">
        <div class="doc-prof">
          DOCTOR
          <img class="dimg" src="http://medcare-c795.kxcdn.com/wp-content/uploads/2016/02/doctor-profile11.jpg"/>
          Dr.Smith
          </div>
        </div>
        <div class="col-md-2">Time Date</div>
        <div class="col-md-4">Notes</div>
        <div class="col-md-2">Get Info</div>
      </div>
      <div class="row" id="main-bottom">
        <div class="col-md-2" id="hosp">
          <div class="apt">
          <div class="apt-text">Dermatology Associates 
            <div class="apt-location">Boston, MA</div>
          </div>
          </div>
        </div>
        <div class="col-md-2">
        <div class="doc-prof">
          DOCTOR
          <img class="dimg" src="http://medcare-c795.kxcdn.com/wp-content/uploads/2016/02/doctor-profile11.jpg"/>
          Dr.Smith
          </div>
        </div>
        <div class="col-md-2">Time Date</div>
        <div class="col-md-4">Notes</div>
        <div class="col-md-2">Get Info</div>
      </div>
    </div>


    </div>
    
  </div>
)

export default Page
