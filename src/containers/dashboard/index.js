import React from 'react'
import AppSelect from '../devices/app-select/app-select'

const Page = () => (
  <div>
    <AppSelect />
    <div class="content">
    <div class="Patient">
      <div class="avi">
        <img class="p-image" alt="" src="https://static1.squarespace.com/static/55ecec2ae4b048d1ed402671/t/59f212ade9bfdff97985afaa/1516916823951/kara-circle-profile.png?format=500w"/>
      </div>
      <h3 class="p-name">Jane Doe </h3>
      <div class="ss">
        <div class="p-snapshot">mm/dd/yyyy</div>
        <div class="p-snapshotRight">mm/dd/yyyy</div>
      </div>
      <div class="email"> jane.doe@gmail.com</div>
      <div class="bottom-patient">
        <div class="reminder-header"> REMINDERS </div>
        <div class="reminder"> You have an appointment coming up with Dr.Smith Mon, August 13</div>
      </div>

    </div>
    


    <div class="container">
      <div class="row" id="top-buttons">
        <div class="col-md-2 buttons" id="scheduled">SCHEDULED</div>
        <div class="col-md-2 offset-md-4 buttons">ADD NOTE</div>
        <div class="col-md-2 buttons">CANCEL VISIT</div>
        <div class="col-md-2 buttons">MAKE PAYMENT</div>
      </div>
      <div class="row" id="main">
        <div class="col-md-2 hosp" id="hosp">
          <div class="apt-text">Dermatology Associates 
            <div class="apt-location">Winchester, MA</div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="doc-prof">
          <div class="dhead"> DOCTOR</div>
          <img class="dimg" alt="" src="http://medcare-c795.kxcdn.com/wp-content/uploads/2016/02/doctor-profile11.jpg"/>
            <span class="dName">Dr.Smith</span>
          </div>
        </div>
        <div class="col-md-2 dt">
        <span class="datetime">DATE</span>
            <div class="current">11.05.2018</div>
            <div class="datetime">TIME</div> 
            <div class="current">11.05.2018</div>  
        </div>
        <div class="col-md-4 noteHead">
          NOTES
              <div class="note-content"> 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </div>
        </div>
        <div class="col-md-2">
          <div class="info">GET INFO</div>
        </div>
      </div>
      <div class="row" id="main">
        <div class="col-md-2 hosp" id="hosp">
          <div class="apt-text">Boston Physical Therapy 
              <div class="apt-location">Boston, MA</div>
            </div>
        </div>
        <div class="col-md-2">
        <div class="doc-prof">
        <div class="dhead"> DOCTOR</div>
          <img class="dimg" alt="" src="http://medcare-c795.kxcdn.com/wp-content/uploads/2016/02/doctor-profile11.jpg"/>
          <span class="dName">Dr.Smith</span>
          </div>
        </div>
        <div class="col-md-2 dt">
          <span class="datetime">DATE</span>
              <div class="current">11.05.2018</div>
              <div class="datetime">TIME</div> 
              <div class="current">11.05.2018</div> 
        </div>
        <div class="col-md-4 noteHead">
            NOTES
              <div class="note-content"> 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </div>
        </div>
        <div class="col-md-2">
          <div class="info">GET INFO</div>
        </div>
      </div>
      <div class="row" id="main-bottom">
        <div class="col-md-2 hosp" id="hosp">
          <div class="apt">
          <div class="apt-text">Dermatology Associates
            <div class="apt-location">Boston, MA</div>
          </div>
          </div>
        </div>
        <div class="col-md-2">
        <div class="doc-prof">
          <div class="dhead"><strong> DOCTOR</strong></div>
          <img class="dimg" alt="" src="http://medcare-c795.kxcdn.com/wp-content/uploads/2016/02/doctor-profile11.jpg"/>
          <span class="dName">Dr.Smith</span>
          </div>
        </div>
        <div class="col-md-2 dt">
            <span class="datetime">DATE</span>
                <div class="current">11.05.2018</div>
                <div class="datetime">TIME</div> 
                <div class="current">11.05.2018</div> 
        </div>
        <div class="col-md-4 noteHead">
        NOTES
            <div class="note-content"> 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </div>
          </div>
        <div class="col-md-2">
            <div class="info">GET INFO</div>
        </div>
      </div>
    </div>


    </div>

  </div>
)

export default Page
