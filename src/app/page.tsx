'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import GradientButtonAnimated from '@/components/Buttons/GradientButton/GradientButtonAnimated'

import {
    getAuthenticationURL,
    getNewRefreshToken,
    isTokenExpired,
} from '@/spotify/authentication'

const HomePage: React.FC = () => {
    const [storedExpiryTimeStr, setStoredExpiryTimeStr] = useState('')

    useEffect(() => {
        const storedExpiryTime = localStorage.getItem('expiry_time') || ''
        setStoredExpiryTimeStr(storedExpiryTime)

        const refreshToken = localStorage.getItem('refresh_token') || ''

        if (isTokenExpired(storedExpiryTime)) {
            getNewRefreshToken(refreshToken)
                .then(new_access_token => {
                    if (new_access_token) {
                        localStorage.setItem('access_token', new_access_token)
                    }
                })
                .catch(error => {
                    console.error('Error getting new access token:', error)
                })
        }
    }, [])

    const authenticationURL = getAuthenticationURL()

    return (
        <div className="flex h-[80vh] justify-center items-center p-7">
            <div className="flex flex-col items-center text-center">
                <Image
                    className="block dark:hidden mb-2"
                    src="/logo-black.svg"
                    alt={'TunesBlend Logo'}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                />
                <Image
                    className="hidden dark:block mb-2"
                    src="/logo-white.svg"
                    alt={'TunesBlend Logo'}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '700px', height: 'auto' }}
                />
                <p className="text-lg sm:text-2xl italic text-slate-700 my-4">
                    "Beats Aligned, Tunes Refined."
                </p>
                {!isTokenExpired(storedExpiryTimeStr) ? (
                    <GradientButtonAnimated
                        textDisplay="Click to Begin"
                        href="/playlists"
                        gradientColor1="#070707"
                        gradientColor2="#687aff"
                    />
                ) : (
                    <GradientButtonAnimated
                        textDisplay="Login to Spotify"
                        href={authenticationURL}
                        gradientColor1="#070707"
                        gradientColor2="#1DB954"
                    />
                )}
            </div>
        </div>
    )
}

export default HomePage
