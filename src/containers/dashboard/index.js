import React from 'react'
import AppSelect from './app-select/app-select'
import AppData from './app-data/app-data'
import { Link } from 'react-router-dom'

const Page = () => (
  <div>
    <AppSelect>
      <AppData />
    </AppSelect>
    <div className="jumbotron">
      <h1 className="display-4">Dashboard Coming Soon!!</h1>
      <p className="lead">You can use the Doctor button above, or choose one of the other icons in the header.</p>

      <p>Click below to learn more about MedChain</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" target="#" href="https://medchain.us">Learn more</a>
      </p>
    </div>
  </div>
)

export default Page
