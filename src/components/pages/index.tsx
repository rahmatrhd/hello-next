import React from 'react'
import withLayout from '../templates/withLayout'
import { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <h1>Hello Next!</h1>
    </React.Fragment>
  )
}

export default withLayout()(Index)
