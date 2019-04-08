import Link from 'next/link'

const NavigationBar = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/pokemons">
          <a>Pokemons</a>
        </Link>
      </li>
    </ul>
  )
}

export default NavigationBar