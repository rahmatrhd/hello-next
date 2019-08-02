import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import authService from '../../services/auth';

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      authService.login();
    } else {
      authService.logout();
    }
  }, [isLoggedIn]);

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
            <button onClick={() => setIsLoggedIn(false)}>logout</button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}>login</button>
          )}
        </li>
        {isLoggedIn && (
          <li>hi, user!</li>
        )}
      </ul>
    </React.Fragment>
  )
}

export default NavigationBar