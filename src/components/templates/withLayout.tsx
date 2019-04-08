import React from 'react'
import { NextComponentType, NextStatelessComponent } from 'next'
import NavigationBar from '../organisms/NavigationBar'

export default () => <P extends object>(Component: NextComponentType<P>) => {
  const Layout: NextStatelessComponent<P> = (props) => (
    <React.Fragment>
      <NavigationBar />
      <Component {...props} />
    </React.Fragment>
  )

  Layout.getInitialProps = Component.getInitialProps

  return Layout
}