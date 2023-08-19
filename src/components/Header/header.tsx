import React from 'react'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'

interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="bg-green-800 text-white py-4">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold mr-auto">{title}</h1>
                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                        <a
                            href="/home"
                            className="text-xl font-semibold hover:text-green-500 transition duration-250 ease-in-out"
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className="text-xl font-semibold hover:text-green-500 transition duration-250 ease-in-out"
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
