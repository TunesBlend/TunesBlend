'use client'

import React, { useEffect, useState } from 'react'
import { fetchPlaylists } from '../../spotify/utils'
import { Playlist } from '../../interfaces/user_interfaces'
import PlaylistDisplay from '../../components/PlaylistDisplay/PlaylistDisplay'

const PlaylistPage: React.FC = () => {
    const [playlists, setPlaylists] = useState<Playlist[]>([])

    useEffect(() => {
        const access_token = localStorage.getItem('access_token')
        if (access_token) {
            fetchPlaylists(access_token)
                .then(items => {
                    console.log(items)
                    setPlaylists(items)
                })
                .catch(error => {
                    console.error('Error fetching playlists:', error)
                })
        }
    }, [])

    return (
        <div>
            <PlaylistDisplay playlists={playlists} />
        </div>
    )
}

export default PlaylistPage
