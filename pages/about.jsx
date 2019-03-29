import withLayout from '../components/templates/withLayout'

const About = () => {
  return (
    <React.Fragment>
      <h1>About</h1>
      <p>This is about page</p>
    </React.Fragment>
  )
}

export default withLayout()(About)