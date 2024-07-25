import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="bg-black py-4">
      <div className="container mx-auto flex justify-center md:justify-between items-center">
        <p className="text-red-600 text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest">N E T F L O W</p>
        <ul className='text-slate-100 hidden md:flex gap-4'>
            <li>
                <Link href="/">Inicio</Link>
            </li>
            <li>
                <Link href="/peliculas">Peliculas</Link>
            </li>
            <li>
                <Link href="/series">Series</Link>
            </li>
        </ul>
      </div>
    </header>
  )
}

export default Header