import React from 'react';
import Link from 'next/link';
import useAuthentication from '../hooks/useAuthentication';

const NavigationBar = () => {
  const { isLoggedIn, login, logout } = useAuthentication();

  return (
    <React.Fragment>
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
          <Link prefetch href="/pokemons">
            <a>Pokemons</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          {isLoggedIn ? (
            <button onClick={logout}>logout</button>
          ) : (
            <button onClick={login}>login</button>
          )}
        </li>
        {isLoggedIn && (
          <li>
            <Link href="/profile">
              <a>hi, user!</a>
            </Link>
          </li>
        )}
      </ul>
    </React.Fragment>
  )
}

export default NavigationBar