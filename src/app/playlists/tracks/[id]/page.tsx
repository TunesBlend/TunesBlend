'use client'

import React, { useEffect, useState } from 'react'
import { fetchTracks } from '../../../../spotify/utils'
import TrackDisplay from '../../../../components/TrackDisplay/TrackDisplay'

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
                        // console.log(`${name}: ${preview_url}`)
                        if (preview_url === null) {
                            console.log(name)
                        }
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
            <TrackDisplay tracks={tracks}></TrackDisplay>
        </div>
    )
}

export default PlaylistPage
