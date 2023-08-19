import React from 'react'

const LoginPage: React.FC = () => {
    const clientId = '2bad5cdadccd43fa8448c86264f62d03'
    const redirectUri = 'http://127.0.0.1:3000/callback'
    const scope = 'user-read-private user-read-email' // Add desired scopes

    const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`

    return (
        <div>
            <div className="text-center">
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
