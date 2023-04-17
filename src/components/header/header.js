import React from 'react'
import Link from 'next/link'

const Header = () => {
    const btnClass = 'px-6 py-2 bg-violet-900 text-white'
    return (
        <header className='flex flex-row items-center justify-between w-full'>
            <span>
                <h3 className='font-semibold italic pl-4'>
                    GOOD HAMBURGUER
                </h3>
            </span>
            <nav  className='flex flex-row'>
                <ul className='flex flex-row'>
                    <Link href='/' className={btnClass} >Menu</Link>
                    <Link href='/orders' className={btnClass}>Orders</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header
