import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import cityCruiseLogo from '../images/citycruise_logo.png'

const NavigationBar = () => {
  const [testSwitch, setTestSwitch] = useState(false)

  const auth = getAuth()

  useEffect(() => {
    // setTestSwitch(!testSwitch)
    handleCurrentUserLoggedIn()
  }, [])

  function handleCurrentUserLoggedIn() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setTestSwitch(true)
      } else {
        setTestSwitch(false)
      }
    });
  }

  return (
    <nav className="navigation-bar-container">
        <div className="navigation-bar">
            <div className="navigation-bar-left">
                <Link to='/'><img src={cityCruiseLogo} alt="" /></Link>
            </div>
            <div className="navigation-bar-right">
                {/* <Link to='/account'>Account</Link>
                <Link to='/sign-in'>Sign-In</Link> */}
                {testSwitch === false ? null : <Link to='/account'>Account</Link>}
                {testSwitch === true ? null : <Link to='/sign-in'>Sign-In</Link>}
            </div>
        </div>
    </nav>
  )
}

export default NavigationBar