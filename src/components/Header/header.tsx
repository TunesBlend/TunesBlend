import React from 'react'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'

interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="bg-gray-100 dark:bg-gray-800 text-white py-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-70 dark:bg-opacity-70 border-b border-gray-200 dark:border-gray-700">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold mr-auto text-gray-800 dark:text-gray-300">
                        {title}
                    </h1>
                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                        <a
                            href="/home"
                            className="text-xl text-gray-800 dark:text-gray-300 font-semibold hover:text-green-700 dark:hover:text-green-700 transition duration-250 ease-in-out"
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className="text-xl text-gray-800 dark:text-gray-300 font-semibold hover:text-green-700 dark:hover:text-green-700 transition duration-250 ease-in-out"
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
