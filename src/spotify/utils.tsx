import axios from 'axios'

export const userDetails = async (accessToken: string) => {
    const authHeader = {
        Authorization: `Bearer ${accessToken}`,
    }

    try {
        const response = await axios.get('https://api.spotify.com/v1/me', {
            headers: authHeader,
        })
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 401) {
                // console.error('Unauthorized:', error.response.data)
                console.log('test1')
                throw error
            } else {
                // console.error('Error fetching playlists:', error)
                console.error('ERRORUIJASDHDIUASHD')
            }
        } else {
            // console.error('Error fetching playlists:', error)
            console.error('ERRORTEST')
        }
        throw error
    }
}
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
                console.log('test1')
                throw error
            } else {
                // console.error('Error fetching playlists:', error)
                console.error('ERRORUIJASDHDIUASHD')
            }
        } else {
            // console.error('Error fetching playlists:', error)
            console.error('ERRORUIJASDHDIUASHD')
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

export const fetchPlaylistDetails = async (
    accessToken: string,
    playlist_uri: string,
) => {
    const authHeader = {
        Authorization: `Bearer ${accessToken}`,
    }
    try {
        const response = await axios.get(
            `https://api.spotify.com/v1/playlists/${playlist_uri}`,
            {
                headers: authHeader,
            },
        )
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.status === 401) {
                console.error('Unauthorized:', error.response.data)
            } else {
                console.error('Error fetching playlist details:', error)
            }
        } else {
            console.error('Error fetching playlist details:', error)
        }
        throw error
    }
}
