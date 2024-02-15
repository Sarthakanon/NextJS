import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='header'>
        <div className='container'>
            <div className='logo'>
                <Link href='/'>My Webpage</Link>
            </div>
            <div className='links'>
                <Link href='/'>Home</Link>
                <Link href='/about/team'>About my Team</Link>
                <Link href='/code/repos'>Code</Link>
            </div>
        </div>
    </header>
  )
}

export default Header
