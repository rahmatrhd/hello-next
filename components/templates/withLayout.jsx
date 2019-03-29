import NavigationBar from '../NavigationBar'

export default () => (Component) => (props) => (
  <React.Fragment>
    <NavigationBar />
    <Component {...props} />
  </React.Fragment>
)