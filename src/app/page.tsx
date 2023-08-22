'use client'

import React from 'react'

const LoginPage: React.FC = () => {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
    const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI
    const scope = 'user-read-private user-read-email' // Add desired scopes

    const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`

    return (
        <div className="flex h-[80vh] justify-center items-center">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-semibold mb-4">
                    Welcome to Tunes Blend
                </h1>
                <a
                    href={authorizeUrl}
                    className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
                >
                    Log in with Spotify
                </a>
            </div>
        </div>
    )
}

export default LoginPage
