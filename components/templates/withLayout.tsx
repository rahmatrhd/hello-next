import React from 'react'
import { NextPage } from 'next'
import NavigationBar from '../organisms/NavigationBar'

export default () => <P extends object>(Component: NextPage<P>) => {
  const Layout: NextPage<P> = (props) => (
    <React.Fragment>
      <NavigationBar />
      <Component {...props} />
    </React.Fragment>
  )

  Layout.getInitialProps = Component.getInitialProps

  return Layout
}