'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import GradientButtonAnimated from '@/components/Buttons/GradientButton/GradientButtonAnimated'

const HomePage: React.FC = () => {
    const [storedAccessToken, setAccessToken] = useState('')

    useEffect(() => {
        const storedAccessToken = localStorage.getItem('access_token')
        if (storedAccessToken) {
            setAccessToken(storedAccessToken)
        }
    }, [])

    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
    const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI
    const scope = 'user-read-private user-read-email'

    const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`

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
                <p className="text-xl text-slate-700 my-4">
                    "Discover Your Perfect Blend"
                </p>
                {storedAccessToken ? (
                    <GradientButtonAnimated
                        textDisplay="Click to Begin"
                        href="/playlists"
                        gradientColor1="#070707"
                        gradientColor2="#687aff"
                    />
                ) : (
                    <GradientButtonAnimated
                        textDisplay="Login to Spotify"
                        href={authorizeUrl}
                        gradientColor1="#070707"
                        gradientColor2="#1DB954"
                    />
                )}
            </div>
        </div>
    )
}

export default HomePage
