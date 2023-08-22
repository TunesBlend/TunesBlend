'use client'

import React, { useEffect, useState } from 'react'
import { fetchTracks, fetchPlaylistDetails } from '@/spotify/utils'
import TrackDisplay from '@/components/TrackDisplay/TrackDisplay'
import HeaderMini from '@/components/Header/header-mini'

const PlaylistPage: React.FC = ({ params }: any) => {
    const [tracks, setTracks] = useState([])
    const playlist_uri = params.id

    const [displayGrid, setDisplayGrid] = useState(true)
    const toggleDisplay = () => {
        setDisplayGrid(!displayGrid)
    }

    const [playlistTitle, setPlaylistTitle] = useState<string>('')
    const setTitle = (string: string) => {
        setPlaylistTitle(string)
    }

    useEffect(() => {
        const access_token = localStorage.getItem('access_token')
        if (access_token) {
            fetchPlaylistDetails(access_token, playlist_uri)
                .then(details => {
                    setTitle(details['name'])
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
        <div>
            <div className="w-[80vw] mx-auto">
                <HeaderMini
                    playlistTitle={playlistTitle}
                    toggleDisplay={toggleDisplay}
                    displayGrid={displayGrid}
                />
            </div>
            <div className="w-[50vw] mx-auto">
                <TrackDisplay
                    tracks={tracks}
                    displayGrid={displayGrid}
                ></TrackDisplay>
            </div>
        </div>
    )
}

export default PlaylistPage
