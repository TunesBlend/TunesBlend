'use client'

import React from 'react'
import Image from 'next/image'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import { useEffect, useState } from 'react'

interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const [userName, setUserName] = useState('')

    useEffect(() => {
        const storedUserName = localStorage.getItem('user_details')
        if (storedUserName) {
            setUserName(storedUserName)
        }
    }, [])

    return (
        <header className="h-18 flex items-center bg-gray-100 dark:bg-slate-950 text-white py-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-70 dark:bg-opacity-70 border-b border-gray-200 dark:border-slate-800">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between">
                    <div>
                        <a href="/" className="block">
                            <Image
                                className="block dark:hidden mb-2"
                                src="/logo-black.png"
                                alt={'TunesBlend Logo'}
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </a>
                        <a href="/" className="block">
                            <Image
                                className="hidden dark:block mb-2"
                                src="/logo-white.png"
                                alt={'TunesBlend Logo'}
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </a>
                        {userName && (
                            <p className="text-s text-gray-400 dark:text-slate-700 text-center">
                                for {userName}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                        <a
                            href="/"
                            className="text-l text-gray-800 dark:text-gray-300 font-semibold hover:text-green-700 dark:hover:text-green-700 transition duration-250 ease-in-out"
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className="text-l text-gray-800 dark:text-gray-300 font-semibold hover:text-green-700 dark:hover:text-green-700 transition duration-250 ease-in-out"
                        >
                            About
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
