import axios from 'axios'

export const fetchPlaylists = async (accessToken: string) => {
    const authHeader = {
        Authorization: `Bearer ${accessToken}`,
    }

    try {
        const response = await axios.get(
            'https://api.spotify.com/v1/me/playlists',
            {
                headers: authHeader,
            },
        )
        return response.data.items
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 401) {
                console.error('Unauthorized:', error.response.data)
            } else {
                console.error('Error fetching playlists:', error)
            }
        } else {
            console.error('Error fetching playlists:', error)
        }
        throw error
    }
}

export const fetchTracks = async (
    accessToken: string,
    playlist_uri: string,
) => {
    const authHeader = {
        Authorization: `Bearer ${accessToken}`,
    }
    try {
        const response = await axios.get(
            `https://api.spotify.com/v1/playlists/${playlist_uri}/tracks`,
            {
                headers: authHeader,
            },
        )
        return response.data.items
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 401) {
                console.error('Unauthorized:', error.response.data)
            } else {
                console.error('Error fetching tracks:', error)
            }
        } else {
            console.error('Error fetching tracks:', error)
        }
        throw error
    }
}
