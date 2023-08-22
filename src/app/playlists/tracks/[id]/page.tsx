'use client'

import React, { useEffect, useState } from 'react'
import { fetchTracks, fetchPlaylistDetails } from '@/spotify/utils'
import TrackDisplay from '@/components/TrackDisplay/TrackDisplay'

const PlaylistPage: React.FC = ({ params }: any) => {
    const [tracks, setTracks] = useState([])
    const [playlistDetails, setPlaylistDetails] = useState<any>()
    const playlist_uri = params.id

    useEffect(() => {
        const access_token = localStorage.getItem('access_token')
        if (access_token) {
            fetchPlaylistDetails(access_token, playlist_uri)
                .then(details => {
                    setPlaylistDetails(details)
                })
                .catch(error => {
                    console.error('Error fetching playlist details:', error)
                })

            fetchTracks(access_token, playlist_uri)
                .then(items => {
                    setTracks(items)
                })
                .catch(error => {
                    console.error('Error fetching playlists:', error)
                })
        }
    }, [playlist_uri])

    return (
        <div className="w-[50vw] mx-auto">
            <TrackDisplay tracks={tracks}></TrackDisplay>
        </div>
    )
}

export default PlaylistPage
