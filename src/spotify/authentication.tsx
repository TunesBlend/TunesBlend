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
    const scope = 'user-read-private user-read-email'

    return `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`
}
