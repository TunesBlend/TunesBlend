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
        console.error('Error fetching playlists:', error)
        throw error
    }
}
