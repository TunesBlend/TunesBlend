'use client'

import React, { useEffect, useState } from 'react'
import { fetchTracks } from '@/spotify/utils'
import TrackDisplay from '@/components/TrackDisplay/TrackDisplay'
import Header from '@/components/Header/header'

const PlaylistPage: React.FC = ({ params }: any) => {
    const [tracks, setTracks] = useState([])
    const playlist_uri = params.id

    useEffect(() => {
        const access_token = localStorage.getItem('access_token')
        if (access_token) {
            fetchTracks(access_token, playlist_uri)
                .then(items => {
                    items.map((item: { [x: string]: any }) => {
                        const name = item['track']['name']
                        const preview_url = item['track']['preview_url']
                    })
                    setTracks(items)
                })
                .catch(error => {
                    console.error('Error fetching playlists:', error)
                })
        }
    }, [])

    return (
        <div>
            <Header title="Playlist" />
            <TrackDisplay tracks={tracks}></TrackDisplay>
        </div>
    )
}

export default PlaylistPage
