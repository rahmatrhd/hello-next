import React from 'react'
import withLayout from '../components/templates/withLayout'

const Index = () => {
  return (
    <React.Fragment>
      <h1>Hello Next!</h1>
    </React.Fragment>
  )
}

export default withLayout()(Index)
