import React from 'react'
import withLayout from '../components/templates/withLayout'
import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <React.Fragment>
      <h1>About</h1>
      <p>This is about page</p>
    </React.Fragment>
  )
}

export default withLayout()(About)