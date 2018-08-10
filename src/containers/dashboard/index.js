import React from 'react'
import AppSelect from '../devices/app-select/app-select'
import AppData from '../devices/app-data/app-data'

const Page = () => (
  <div>
    <AppSelect>
      <AppData />
    </AppSelect>
    <div className="content">
    <div className="Patient">
      <div className="avi">
        <img className="p-image" alt="" src="https://static1.squarespace.com/static/55ecec2ae4b048d1ed402671/t/59f212ade9bfdff97985afaa/1516916823951/kara-circle-profile.png?format=500w"/>
      </div>
      <h3 className="p-name">Jane Doe </h3>
      <div className="ss">
        <div className="p-snapshot">mm/dd/yyyy</div>
        <div className="p-snapshotRight">mm/dd/yyyy</div>
      </div>
      <div className="email"> jane.doe@gmail.com</div>
      <div className="bottom-patient">
        <div className="reminder-header"> REMINDERS </div>
        <div className="reminder"> You have an appointment coming up with Dr.Smith Mon, August 13</div>
      </div>

    </div>



    <div className="container">
      <div className="row" id="top-buttons">
        <div className="col-md-2 buttons" id="scheduled">SCHEDULED</div>
        <div className="col-md-2 offset-md-4 buttons">ADD NOTE</div>
        <div className="col-md-2 buttons">CANCEL VISIT</div>
        <div className="col-md-2 buttons">MAKE PAYMENT</div>
      </div>
      <div className="row" id="main">
        <div className="col-md-2 hosp" id="hosp">
          <div className="apt-text">Dermatology Associates
            <div className="apt-location">Winchester, MA</div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="doc-prof">
          <div className="dhead"> DOCTOR</div>
          <img className="dimg" alt="" src="http://medcare-c795.kxcdn.com/wp-content/uploads/2016/02/doctor-profile11.jpg"/>
            <span className="dName">Dr.Smith</span>
          </div>
        </div>
        <div className="col-md-2 dt">
        <span className="datetime">DATE</span>
            <div className="current">11.05.2018</div>
            <div className="datetime">TIME</div>
            <div className="current">09:30</div>
        </div>
        <div className="col-md-4 noteHead">
          NOTES
              <div className="note-content">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </div>
        </div>
        <div className="col-md-2">
          <div className="info">GET INFO</div>
        </div>
      </div>
      <div className="row" id="main">
        <div className="col-md-2 hosp" id="hosp">
          <div className="apt-text">Boston Physical Therapy
              <div className="apt-location">Boston, MA</div>
            </div>
        </div>
        <div className="col-md-2">
        <div className="doc-prof">
        <div className="dhead"> DOCTOR</div>
          <img className="dimg" alt="" src="http://medcare-c795.kxcdn.com/wp-content/uploads/2016/02/doctor-profile11.jpg"/>
          <span className="dName">Dr.Smith</span>
          </div>
        </div>
        <div className="col-md-2 dt">
          <span className="datetime">DATE</span>
              <div className="current">11.05.2018</div>
              <div className="datetime">TIME</div>
              <div className="current">09:30</div>
        </div>
        <div className="col-md-4 noteHead">
            NOTES
              <div className="note-content">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </div>
        </div>
        <div className="col-md-2">
          <div className="info">GET INFO</div>
        </div>
      </div>
      <div className="row" id="main-bottom">
        <div className="col-md-2 hosp" id="hosp">
          <div className="apt">
          <div className="apt-text">Dermatology Associates
            <div className="apt-location">Boston, MA</div>
          </div>
          </div>
        </div>
        <div className="col-md-2">
        <div className="doc-prof">
          <div className="dhead"><strong> DOCTOR</strong></div>
          <img className="dimg" alt="" src="http://medcare-c795.kxcdn.com/wp-content/uploads/2016/02/doctor-profile11.jpg"/>
          <span className="dName">Dr.Smith</span>
          </div>
        </div>
        <div className="col-md-2 dt">
            <span className="datetime">DATE</span>
                <div className="current">11.05.2018</div>
                <div className="datetime">TIME</div>
                <div className="current">09:30</div>
        </div>
        <div className="col-md-4 noteHead">
        NOTES
            <div className="note-content">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </div>
          </div>
        <div className="col-md-2">
            <div className="info">GET INFO</div>
        </div>
      </div>
    </div>


    </div>

  </div>
)

export default Page
