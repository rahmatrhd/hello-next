import Link from 'next/link'

const Index = () => {
  return (
    <React.Fragment>
      <h1>Hello Next!</h1>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </React.Fragment>
  )
}

export default Index
