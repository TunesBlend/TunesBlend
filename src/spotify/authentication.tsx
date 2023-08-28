const axios = require('axios')

export function isTokenExpired(expiryTimeStr: string): boolean {
    if (!expiryTimeStr) {
        return true
    }

    const expiryTime = parseInt(expiryTimeStr)
    const currentTime = new Date().getTime()

    return currentTime > expiryTime
}

export function getAuthenticationURL() {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
    const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI
    const scope =
        'playlist-read-private playlist-modify-private playlist-modify-public user-read-recently-played user-top-read user-library-modify'

    return `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`
}

export async function getNewRefreshToken(refreshToken: string) {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
    const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
    const tokenEndpoint = 'https://accounts.spotify.com/api/token'

    const authOptions = {
        url: tokenEndpoint,
        method: 'post',
        headers: {
            Authorization: `Basic ${Buffer.from(
                `${clientId}:${clientSecret}`,
            ).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
        }),
    }

    try {
        const response = await axios(authOptions)
        const newAccessToken: string = response.data.access_token
        return newAccessToken
    } catch (error) {
        console.error('Error refreshing token:', error)
        throw error
    }
}
