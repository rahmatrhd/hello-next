import React from 'react'
import NavigationBar from '../organisms/NavigationBar'

export default () => <P extends object>(Component: React.ComponentType<P>) => (props: P) => (
  <React.Fragment>
    <NavigationBar />
    <Component {...props} />
  </React.Fragment>
)