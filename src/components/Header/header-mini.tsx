'use client'

import React from 'react'
import Image from 'next/image'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft,
    faGrip,
    faGripLines,
} from '@fortawesome/free-solid-svg-icons'

interface HeaderProps {
    playlistTitle: string
    displayGrid: boolean
    toggleDisplay: () => void
}

const Header: React.FC<HeaderProps> = ({
    playlistTitle,
    displayGrid,
    toggleDisplay,
}) => {
    const [userName, setUserName] = useState('')

    useEffect(() => {
        const storedUserName = localStorage.getItem('user_details')
        if (storedUserName) {
            setUserName(storedUserName)
        }
    }, [])

    return (
        <header className="h-18 flex items-center bg-gray-100 dark:bg-gray-800 text-white py-4 sticky top-0 z-5 backdrop-filter backdrop-blur-lg bg-opacity-70 dark:bg-opacity-70 border-b border-gray-200 dark:border-gray-700">
            <div className="container flex items-center">
                <a href="../" className="text-gray-500 dark:text-gray-300">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </a>
                <h1 className="text-3xl flex-1 text-center">{playlistTitle}</h1>
                <button
                    className="px-4 py-2 bg-green-800 text-white rounded"
                    onClick={toggleDisplay}
                >
                    {displayGrid ? (
                        <FontAwesomeIcon icon={faGrip} />
                    ) : (
                        <FontAwesomeIcon icon={faGripLines} />
                    )}
                </button>
            </div>
        </header>
    )
}

export default Header
